import { z } from "zod";

// প্রতিটি এক্টিভিটির বিস্তারিত
const activitySchema = z.object({
  time: z.string().describe("Time of the activity, e.g., 09:00 AM"),
  title: z.string().describe("Name of the landmark or activity"),
  description: z.string().describe("Detailed description of what to do there"),
});

// প্রতিটি দিনের প্ল্যান
const dayPlanSchema = z.object({
  day: z.number().describe("Day number starting from 1"),
  theme: z.string().describe("Main theme of the day"),
  image_url: z
    .string()
    .url()
    .describe("A relevant Unsplash image URL for the day"),
  activities: z
    .array(activitySchema)
    .min(3)
    .describe("A list of 3-4 activities for this day"),
});

// হাইলাইটস (২য় সেকশনের জন্য)
const highlightSchema = z.object({
  title: z.string().describe("Title of the highlight, e.g., Eiffel Tower"),
  rating: z.number().optional().describe("Rating between 4.5 - 5.0"),
  description: z.string().describe("Short description"),
  category: z.string().describe("Category e.g., Gastronomy, Landmark"),
});

// মেইন রেসপন্স স্কিমা
const itinerarySchema = z.object({
  destination_name: z.string().describe("Name of the destination"),
  duration: z.string().describe("Duration of the trip, e.g., 3 Days"),
  main_image: z.string().url().describe("Main cover image from Unsplash"),
  main_description: z
    .string()
    .describe("Attractive description of the destination"),
  budget_estimate: z.string().describe("Estimated budget range"),
  highlights: z
    .array(highlightSchema)
    .min(6)
    .max(6)
    .describe("Exactly 6 highlight cards"),
  daily_itinerary: z.array(dayPlanSchema).min(1).describe("Daily plan cards"),
});

export { itinerarySchema };
