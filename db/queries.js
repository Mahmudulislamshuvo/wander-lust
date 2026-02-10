import TravelPlan from "@/schema/travelplanSchema";
import generateSlug from "@/utils/getSlugFromPrompt";

const getAllTravelPlans = async () => {
  try {
    const latestPlans = await TravelPlan.find({})
      .sort({ createdAt: -1 })
      .limit(3)
      .lean();

    if (!latestPlans || latestPlans.length === 0) {
      return [];
    }

    return latestPlans;
  } catch (error) {
    console.log(error);
  }
};

const checkExistingTravelPlan = async (query) => {
  try {
    if (!query) return null;

    const makeSlug = generateSlug(query);

    const existingPlan = await TravelPlan.findOne({ slug: makeSlug }).lean();

    if (existingPlan) {
      console.log("Database Match Found!");
      return existingPlan;
    }

    return null;
  } catch (error) {
    console.error("MongoDB Check Error:", error);
    return null;
  }
};

const getTravelPlanBySlug = async (slug) => {
  try {
    const plan = await TravelPlan.findOne({ slug }).lean();
    if (!plan) {
      return null;
    }
    return JSON.parse(JSON.stringify(plan));
  } catch (error) {
    console.log(error);
  }
};

export { getAllTravelPlans, checkExistingTravelPlan, getTravelPlanBySlug };
