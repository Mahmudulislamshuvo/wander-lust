"use server";

import { checkExistingTravelPlan } from "@/db/queries";
import TravelPlan from "@/schema/travelplanSchema";
import { getUnsplashImage } from "@/utils/getUnsplashImage";

export const createNewTravelPlan = async (userPrompt) => {
  if (!userPrompt) return null;

  try {
    const existingPlan = await checkExistingTravelPlan(userPrompt);

    if (existingPlan) {
      console.log("Match found in MongoDB!");
      return JSON.parse(JSON.stringify(existingPlan));
    }

    // ২. Gemini কল করা
    const apiKey = process.env.GEMINI_API_KEY;
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent?key=${apiKey}`;

    const promptWithInstructions = `
      Create a detailed travel plan for: ${userPrompt}.
      Respond strictly in JSON format with the following structure:
      {
        "slug": "string (format: number-days-destination, e.g., '3-days-paris')",
        "hero_section": {
          "destination_name": "string",
          "tagline": "string",
          "duration": "string",
          "cover_image": { "source": "unsplash", "query": "search query" },
          "overview_description": "string"
        },
        "itinerary_section": {
          "title": "string",
          "daily_plans": [
            {
              "day": 1,
              "theme_title": "string",
              "thumbnail_image": { "source": "unsplash", "query": "search query" },
              "schedule": [
                { "time": "string", "activity": "string", "note": "string" }
              ]
            }
          ]
        }
      }
      Important for Slug: 
      1. Always use numbers.
      2. Lowercase and hyphens (e.g., '3-days-paris').
      
      General Rules: Respond ONLY with valid JSON.
    `;

    const requestBody = {
      contents: [{ parts: [{ text: promptWithInstructions }] }],
      generationConfig: { responseMimeType: "application/json" },
    };

    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestBody),
    });

    const data = await response.json();

    if (data.error) {
      console.error("Gemini API Error:", data.error.message);
      return null;
    }

    if (data.candidates && data.candidates[0].content.parts[0].text) {
      let jsonResponse = JSON.parse(data.candidates[0].content.parts[0].text);

      // ============================================================
      //  Unsplash image
      // ============================================================
      try {
        console.log("Fetching images from Unsplash...");

        // 1. hero section image update
        if (jsonResponse.hero_section?.cover_image?.query) {
          const heroUrl = await getUnsplashImage(
            jsonResponse.hero_section.cover_image.query,
          );
          if (heroUrl) {
            jsonResponse.hero_section.cover_image.url = heroUrl;
          }
        }

        // 2. itinerary section daily plans image update
        if (jsonResponse.itinerary_section?.daily_plans) {
          await Promise.all(
            jsonResponse.itinerary_section.daily_plans.map(async (day) => {
              if (day.thumbnail_image?.query) {
                const dayUrl = await getUnsplashImage(
                  day.thumbnail_image.query,
                );
                if (dayUrl) {
                  day.thumbnail_image.url = dayUrl;
                }
              }
            }),
          );
        }
      } catch (imgError) {
        console.error("Image fetching error:", imgError);
        // if image fetching fails, we can still save the plan without images, so we won't return null here. The plan will just have missing image URLs.
      }

      try {
        const savedPlan = await TravelPlan.create({
          ...jsonResponse,
          userPrompt: userPrompt,
          createdAt: new Date(),
        });
        console.log("New plan saved to MongoDB with Images!");

        return JSON.parse(JSON.stringify(savedPlan));
      } catch (dbError) {
        console.error("Error saving to MongoDB:", dbError);
        return jsonResponse;
      }
    }

    return null;
  } catch (error) {
    console.error("Error in create New Travel Plan:", error);
    return null;
  }
};
