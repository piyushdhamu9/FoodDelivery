import express from "express";

import {
  addFood,
  listFood,
  removeFood,
} from "../controllers/foodController.js";

// multer is used to store images
import multer from "multer";

// using this router we can create the get,post and many other methods
const foodRouter = express.Router();

// Image Storage Engine
const imgStorage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    return cb(null, `${Date.now()}-${file.originalname}`);
  },
});

// middleware
const upload = multer({ storage: imgStorage });

foodRouter.post("/add", upload.single("image"), addFood);
foodRouter.get("/list", listFood);
foodRouter.post("/remove", removeFood);

export default foodRouter;
