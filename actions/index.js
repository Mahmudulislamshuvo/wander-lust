const createNewTravelPlan = async (query) => {
  try {
    if (!query) return null;
    const makeSlug = generateSlug(query);

    const existingPlan = await TravelPlan.findOne({ slug: makeSlug }).lean();

    if (existingPlan) {
      console.log("Found in database, returning existing plan...");
      return existingPlan;
    }

    const allTravelPlnas = await TravelPlan.findOne({ slug: makeSlug }).lean();
  } catch (error) {
    console.log(error);
  }
};
