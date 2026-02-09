import { NextResponse } from "next/server";
import { jsonSchema } from "../../../Schema/geminiSchema";
import { createStructuredFallback } from "../../../utils/createStuctureFallback";
import { structuredPrompt } from "@/utils/stucturedPrompt";
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI(process.env.GEMINI_API_KEY);

export async function POST(request) {
  const searchParams = new URL(request.url).searchParams;
  const userPrompt = searchParams.get("prompt");
  try {
    // if no prompt is provided, return an error response
    if (!userPrompt) {
      return NextResponse.json(
        { error: "Prompt is required" },
        { status: 400 },
      );
    }

    // const model = ai.GoogleGenAI({
    //   // model: "gemini-3-flash-preview",
    //   model: "gemini-3-flash-preview",
    //   generationConfig: {
    //     temperature: 0.2,
    //     maxOutputTokens: 4000,
    //     responseMimeType: "application/json",
    //     responseSchema: jsonSchema,
    //   },
    // });

    const model = await ai.models.generateContent({
      model: "gemini-2.5-flash-lite",
      contents: structuredPrompt(userPrompt),
      config: {
        responseMimeType: "application/json",
        responseJsonSchema: createStructuredFallback(userPrompt), // Fallback structure
      },
    });

    const result = await model.generateContent(structuredPrompt(userPrompt));
    const response = result.response;
    const text = response.text();

    // JSON parse
    try {
      const jsonResponse = JSON.parse(text);

      // Validate basic structure
      if (!jsonResponse.travel_plan || !jsonResponse.travel_plan.hero_section) {
        throw new Error("Invalid response structure");
      }

      return NextResponse.json(jsonResponse, { status: 200 });
    } catch (parseError) {
      console.error("JSON Parse Error:", parseError);

      // Fallback response তৈরি করুন
      const fallbackResponse = createStructuredFallback(userPrompt);
      return NextResponse.json(fallbackResponse, { status: 200 });
    }
  } catch (error) {
    console.error("API Error:", error);

    // Fallback response
    const fallbackResponse = createStructuredFallback(userPrompt);
    return NextResponse.json(fallbackResponse, { status: 200 });
  }
}
