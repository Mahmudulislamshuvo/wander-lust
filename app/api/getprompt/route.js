import { NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";
import { zodToJsonSchema } from "zod-to-json-schema";
import { itinerarySchema } from "@/Schema/geminiSchema";

const client = new GoogleGenAI({ apiKey: process.env.GOOGLE_API_KEY });

export async function POST(request) {
  const searchParams = new URL(request.url).searchParams;
  const userPrompt = searchParams.get("prompt");

  try {
    if (!userPrompt) {
      return NextResponse.json(
        { error: "Prompt is required" },
        { status: 400 },
      );
    }

    // প্রম্পটটি এমনভাবে লেখা হয়েছে যাতে সে স্কিমার সব ফিল্ড (Highlights, Budget, Itinerary) পূরণ করে
    const fullPrompt = `You are an expert travel assistant. 
    Generate a COMPLETE travel itinerary for: "${userPrompt}".
    
    CRITICAL INSTRUCTIONS:
    1. Follow the JSON schema strictly.
    2. Populate ALL fields including 'highlights' (exactly 6 items), 'budget_estimate', 'main_image', and 'daily_itinerary'.
    3. For 'daily_itinerary', ensure 'activities' contains at least 3 items per day.
    4. Use high-quality Unsplash URLs for all images.
    5. Return ONLY the JSON object.`;

    const response = await client.models.generateContent({
      model: "gemini-2.5-flash", // আপনার রিকোয়েস্ট অনুযায়ী মডেল সেট করা হলো
      contents: [{ role: "user", parts: [{ text: fullPrompt }] }],
      config: {
        responseMimeType: "application/json",
        responseJsonSchema: zodToJsonSchema(itinerarySchema),
      },
    });

    // রেসপন্স হ্যান্ডলিং (সিম্পল রাখা হয়েছে, ক্লিনআপ আপনি করবেন বলেছেন)
    const text = response.text;
    if (!text) {
      throw new Error("Empty response from AI");
    }

    const aiResponse = JSON.parse(text);

    return NextResponse.json(aiResponse, { status: 200 });
  } catch (error) {
    console.error("Gemini API Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error", details: error.message },
      { status: 500 },
    );
  }
}
