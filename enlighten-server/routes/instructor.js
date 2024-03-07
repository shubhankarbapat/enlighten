// Import necessary modules
import express from "express";

// Create a new router instance
const router = express.Router();

import { requireSignin } from "../middlewares/index.js";
import {
  makeInstructor,
  getAccountStatus,
  currentInstructor,
  instuctorCourses,
} from "../controllers/instructor.js";

// Route handler for registration
router.post("/make-instructor", requireSignin, makeInstructor);
router.post("/get-account-status", requireSignin, getAccountStatus);
router.get("/current-instructor", requireSignin, currentInstructor);
router.get("/instructor-courses", requireSignin, instuctorCourses);

// Export the router
export default router;
