import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import "dotenv/config";
import userRouter from "./routes/userRoute.js";
import foodRouter from "./routes/foodRoute.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";

// app config
const app = express();
const port = 4000;

// middleware
app.use(express.json());
app.use(cors()); // access backend from any frontend

// databse connection
connectDB();

// API endpoints
app.use("/api/food", foodRouter);
app.use("/images", express.static("uploads"));
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use('/api/order',orderRouter)

// methods
app.get("/", (req, res) => {
  res.send("API is working");
});

// run the express server
app.listen(port, () => {
  console.log(`Server is started on http://localhost:${port}`);
});

// mongodb+srv://piyushdhamu9:<db_password>@cluster0.d0szi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
