import { checkExistingTravelPlan } from "@/db/queries";
import TravelPlan from "@/schema/travelplanSchema";
import { NextResponse } from "next/server";

export async function POST(request) {
  const searchParams = new URL(request.url).searchParams;
  const userPrompt = searchParams.get("prompt") || "A surprise destination";

  try {
    const existingPlan = await checkExistingTravelPlan(userPrompt);

    if (existingPlan) {
      console.log("Match found in MongoDB!");
      return NextResponse.json(existingPlan);
    }

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
      1. Always use numbers (e.g., '3' instead of 'three').
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
      return NextResponse.json(
        { error: data.error.message },
        { status: data.error.code },
      );
    }

    if (data.candidates && data.candidates[0].content.parts[0].text) {
      const jsonResponse = JSON.parse(data.candidates[0].content.parts[0].text);

      try {
        await TravelPlan.create({
          ...jsonResponse,
          userPrompt: userPrompt,
          createdAt: new Date(),
        });
        console.log("New plan saved to MongoDB!");
      } catch (dbError) {
        console.error("Error saving to MongoDB:", dbError);
      }

      return NextResponse.json(jsonResponse);
    }

    return NextResponse.json(
      { error: "No content generated" },
      { status: 500 },
    );
  } catch (error) {
    console.error("Error in POST route:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
