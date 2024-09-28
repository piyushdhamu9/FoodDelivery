import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://piyushdhamu9:014560@cluster0.d0szi.mongodb.net/MERN"
    )
    .then(() => console.log("Database connected"));
};
