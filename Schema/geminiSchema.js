export const jsonSchema = {
  type: "object",
  properties: {
    travel_plan: {
      type: "object",
      properties: {
        hero_section: {
          type: "object",
          properties: {
            destination_name: { type: "string" },
            tagline: { type: "string" },
            duration: { type: "string" },
            cover_image_prompt: { type: "string" },
            overview_description: { type: "string" },
          },
          required: [
            "destination_name",
            "tagline",
            "duration",
            "cover_image_prompt",
            "overview_description",
          ],
        },
        essentials_section: {
          type: "object",
          properties: {
            title: { type: "string" },
            subtitle: { type: "string" },
            top_attractions: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  name: { type: "string" },
                  category: { type: "string" },
                  rating: { type: "number", minimum: 1, maximum: 5 },
                  description: { type: "string" },
                },
                required: ["name", "category", "rating", "description"],
              },
            },
            practical_info: {
              type: "object",
              properties: {
                gastronomy: {
                  type: "object",
                  properties: {
                    title: { type: "string" },
                    description: { type: "string" },
                  },
                  required: ["title", "description"],
                },
                smart_travel: {
                  type: "object",
                  properties: {
                    title: { type: "string" },
                    description: { type: "string" },
                  },
                  required: ["title", "description"],
                },
                budget_estimate: {
                  type: "object",
                  properties: {
                    title: { type: "string" },
                    amount_range: { type: "string" },
                    note: { type: "string" },
                  },
                  required: ["title", "amount_range", "note"],
                },
              },
              required: ["gastronomy", "smart_travel", "budget_estimate"],
            },
          },
          required: ["title", "subtitle", "top_attractions", "practical_info"],
        },
        itinerary_section: {
          type: "object",
          properties: {
            title: { type: "string" },
            daily_plans: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  day: { type: "number" },
                  theme_title: { type: "string" },
                  image: { type: "string" },
                  thumbnail_image_prompt: { type: "string" },
                  schedule: {
                    type: "array",
                    items: {
                      type: "object",
                      properties: {
                        time: { type: "string" },
                        activity: { type: "string" },
                        note: { type: "string" },
                      },
                      required: ["time", "activity", "note"],
                    },
                  },
                },
                required: [
                  "day",
                  "theme_title",
                  "image",
                  "thumbnail_image_prompt",
                  "schedule",
                ],
              },
            },
          },
          required: ["title", "daily_plans"],
        },
      },
      required: ["hero_section", "essentials_section", "itinerary_section"],
    },
  },
  required: ["travel_plan"],
};
