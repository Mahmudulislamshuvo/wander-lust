const cleanTravelData = (apiResponse) => {
  try {
    // ১. চেক করা হচ্ছে travel_plan কি স্ট্রিং আকারে আছে কি না
    if (
      apiResponse.travel_plan &&
      typeof apiResponse.travel_plan === "string"
    ) {
      // ২. স্ট্রিংটিকে আসল JSON অবজেক্টে কনভার্ট করা (এতেই সব \ চলে যাবে)
      const parsedData = JSON.parse(apiResponse.travel_plan);

      // ৩. অনেক সময় ভেতরে আবার travel_plan নামে রুট key থাকে, সেটা হ্যান্ডেল করা
      if (parsedData.travel_plan) {
        return parsedData.travel_plan;
      }
      return parsedData;
    }

    // যদি আগে থেকেই ঠিক থাকে, তাহলে যা আছে তাই ফেরত দিবে
    return apiResponse;
  } catch (error) {
    console.error("Error parsing JSON:", error);
    return null;
  }
};

export { cleanTravelData };
