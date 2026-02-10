import mongoose from "mongoose";

const MONGO_URL = process.env.MONGODB_URL;

export const dbConnect = async () => {
  try {
    const connection = await mongoose.connect(MONGO_URL, {
      dbName: "wanderlust",
    });
    console.log("Mongo Connected successfully");
    return connection;
  } catch (error) {
    console.error("Mongo Connection Error:", error);
  }
};
