import mongoose from "mongoose";

const MONGO_URL = process.env.MONGODB_URL;
let cachedConnection = null; // Cache the connection

export const dbConnect = async () => {
  if (cachedConnection) {
    console.log("Using cached MongoDB connection");
    return cachedConnection;
  }
  try {
    const connection = await mongoose.connect(MONGO_URL, {
      dbName: "wanderlust",
    });
    console.log("Mongo Connected successfully");
    cachedConnection = connection; // Cache the new connection
    return connection;
  } catch (error) {
    console.error("Mongo Connection Error:", error);
    throw error; // Re-throw to propagate the error
  }
};
