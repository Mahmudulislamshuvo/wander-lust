import TravelPlan from "@/schema/travelplanSchema";
import generateSlug from "@/utils/getSlugFromPrompt";
import mongoose from "mongoose";

const getAllTravelPlans = async () => {
  try {
    const allTravelPlnas = await TravelPlan.find({}).lean();

    if (!allTravelPlnas || allTravelPlnas.length === 0) {
      return [];
    }

    allTravelPlnas
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
      .splice(3);

    return allTravelPlnas;
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

export { getAllTravelPlans, checkExistingTravelPlan };
