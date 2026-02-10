import { NextResponse } from "next/server";

export async function POST(request) {
  const searchParams = new URL(request.url).searchParams;
  const userPrompt = searchParams.get("prompt") || "A surprise destination";

  try {
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
      1. Always use numbers for the day count (even if input says 'three', use '3').
      2. Keep it lowercase and use hyphens between words.
      3. Example: 'three days tour plan for paris' -> '3-days-paris'.
      
      General Rules: DO NOT provide direct image URLs. Provide only Unsplash search queries. Respond ONLY with valid JSON.
    `;

    const requestBody = {
      contents: [
        {
          parts: [
            {
              text: promptWithInstructions,
            },
          ],
        },
      ],
      generationConfig: {
        responseMimeType: "application/json",
      },
    };

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
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
        const data = await "";
      } catch (error) {
        console.log(error);
      }

      return NextResponse.json(jsonResponse);
    }

    return NextResponse.json(
      { error: "No content generated" },
      { status: 500 },
    );
  } catch (error) {
    console.error("Error fetching Gemini:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
