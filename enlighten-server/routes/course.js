// Import necessary modules
import express from "express";

// Create a new router instance
const router = express.Router();

import { isInstructor, requireSignin } from "../middlewares/index.js";
import { uploadImage, removeImage, create } from "../controllers/course.js";

// Route handler for registration
router.post("/course/upload-image", uploadImage);
router.post("/course/remove-image", removeImage);

//course
router.post("/course", requireSignin, isInstructor, create);

// Export the router
export default router;
