const structuredPrompt = (userPrompt) => {
  const prompt = `
Create a comprehensive travel plan for: "${userPrompt}".

**IMPORTANT:**
1. Return ONLY valid JSON matching the required schema
2. Destination can be ANYWHERE in the world (not just Bangladesh)
3. Make the travel plan realistic and detailed
4. Include 3-5 top attractions with ratings
5. Create itinerary with daily themes
6. Each day should have at least 3 activities with specific times
7. Use realistic prices in local currency
8. Include practical travel tips
9. Get similar place image prompts for hero section and daily thumbnails from unsplash style travel photography

Example structure to follow:
{
  "travel_plan": {
    "hero_section": {
      "destination_name": "Paris, France",
      "tagline": "City of Lights and Love",
      "duration": "4 Days 3 Nights",
      "cover_image_prompt": "Eiffel Tower at sunset with golden hour lighting",
      "overview_description": "Experience the romance and culture of Paris..."
    },
    "essentials_section": {
      "title": "Parisian Essentials",
      "subtitle": "Everything you need for your Paris adventure",
      "top_attractions": [...],
      "practical_info": {...}
    },
    "itinerary_section": {
      "title": "Your Paris Itinerary",
      "daily_plans": [...]
    }
  }
}

Now create the travel plan for "${userPrompt}" accordingly:
`;

  return prompt;
};

export { structuredPrompt };
