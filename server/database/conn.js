import mongoose, { Document } from "mongoose";

const uri = 'mongodb+srv://admin:admin@cluster1.3xsqvxd.mongodb.net/reactLogin?retryWrites=true&w=majority'

export default async function connect() {
  try {
      await mongoose.connect(uri);
      console.log("Connected to MongoDB");
  } catch (error) {
      console.error("Error connecting to MongoDB:", error);
  }
}

