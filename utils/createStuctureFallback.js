function createStructuredFallback(destination) {
  return {
    travel_plan: {
      hero_section: {
        destination_name: destination || "Your Destination",
        tagline: "An Unforgettable Journey",
        duration: "3 Days 2 Nights",
        cover_image_prompt: `Beautiful panoramic view of ${destination || "destination"} landscape, vibrant colors, travel photography`,
        overview_description: `Explore the rich culture, natural beauty, and warm hospitality of ${destination || "this destination"}. A perfect blend of adventure and relaxation awaits you.`,
      },
      essentials_section: {
        title: "Essentials for Your Journey",
        subtitle:
          "Curated highlights and practical tips for an amazing experience",
        top_attractions: [
          {
            name: "Main Attraction",
            category: "Landmark",
            rating: 4.5,
            description:
              "The must-visit spot that defines this destination's beauty and culture.",
          },
          {
            name: "Local Market",
            category: "Shopping",
            rating: 4.3,
            description:
              "Experience local life and find unique souvenirs and handicrafts.",
          },
          {
            name: "Natural Wonder",
            category: "Nature",
            rating: 4.7,
            description:
              "Breathtaking natural scenery that will leave you in awe.",
          },
        ],
        practical_info: {
          gastronomy: {
            title: "Local Cuisine",
            description:
              "Don't miss the authentic local dishes. Try the street food for a real taste of the culture.",
          },
          smart_travel: {
            title: "Travel Tips",
            description:
              "Best time to visit is during the dry season. Local transport is affordable and convenient.",
          },
          budget_estimate: {
            title: "Budget Estimate",
            amount_range: "$500 - $1500",
            note: "per person including accommodation, food, and local transport.",
          },
        },
      },
      itinerary_section: {
        title: `Your ${destination || "Destination"} Adventure`,
        daily_plans: [
          {
            day: 1,
            theme_title: "Arrival & Exploration",
            image:
              "take a picture from day one place from unsplash and use it as thumbnail",
            thumbnail_image_prompt:
              "Sunrise over beautiful landscape, peaceful morning, travel photography",
            schedule: [
              {
                time: "10:00 AM",
                activity: "Arrival & Check-in",
                note: "Settle in your accommodation and freshen up",
              },
              {
                time: "01:00 PM",
                activity: "Local Lunch Experience",
                note: "Try authentic local cuisine at a recommended restaurant",
              },
              {
                time: "04:00 PM",
                activity: "Guided City Tour",
                note: "Visit historical landmarks and cultural sites",
              },
            ],
          },
          {
            day: 2,
            theme_title: "Nature & Adventure",
            image:
              "take a picture from day two place from unsplash and use it as thumbnail",
            thumbnail_image_prompt:
              "Adventure in nature, hiking or water activities, action shot",
            schedule: [
              {
                time: "08:00 AM",
                activity: "Breakfast & Preparation",
                note: "Energy-packed breakfast for the day ahead",
              },
              {
                time: "10:00 AM",
                activity: "Nature Excursion",
                note: "Explore natural wonders and scenic spots",
              },
              {
                time: "02:00 PM",
                activity: "Adventure Activity",
                note: "Optional activities available",
              },
            ],
          },
          {
            day: 3,
            theme_title: "Cultural Immersion & Departure",
            image:
              "take a picture from day three place from unsplash and use it as thumbnail",
            thumbnail_image_prompt:
              "Cultural artifacts or traditional architecture, detailed shot",
            schedule: [
              {
                time: "09:00 AM",
                activity: "Local Market Visit",
                note: "Shop for souvenirs and local products",
              },
              {
                time: "12:00 PM",
                activity: "Farewell Lunch",
                note: "Last taste of local delicacies",
              },
              {
                time: "03:00 PM",
                activity: "Departure",
                note: "Transfer to departure point",
              },
            ],
          },
        ],
      },
    },
  };
}
export { createStructuredFallback };
