import mongoose from "mongoose";
const URL_MONGODB = process.env.URL_MONGODB;

export async function connectDB() {
  try {
    await mongoose.connect(URL_MONGODB);
    console.log(">>> Connected");
  } catch (error) {
    console.log(error);
  }
}
