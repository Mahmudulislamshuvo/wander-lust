import mongoose from "mongoose";

const TravelPlanSchema = new mongoose.Schema({
  slug: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },

  hero_section: {
    destination_name: { type: String, required: true },
    tagline: { type: String, required: true },
    duration: { type: String, required: true },
    cover_image: {
      source: { type: String, default: "unsplash" },
      query: { type: String, required: true },
    },
    overview_description: { type: String, required: true },
  },

  itinerary_section: {
    title: { type: String, required: true },
    daily_plans: [
      {
        day: { type: Number, required: true },
        theme_title: { type: String, required: true },
        thumbnail_image: {
          source: { type: String, default: "unsplash" },
          query: { type: String, required: true },
        },
        schedule: [
          {
            time: { type: String, required: true },
            activity: { type: String, required: true },
            note: { type: String },
          },
        ],
      },
    ],
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
  userPrompt: {
    type: String,
  },
});

TravelPlanSchema.index({ slug: 1 });

const TravelPlan =
  mongoose.models.TravelPlan || mongoose.model("TravelPlan", TravelPlanSchema);

export default TravelPlan;
