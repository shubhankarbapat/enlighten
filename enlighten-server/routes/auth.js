// Import necessary modules
import express from "express";

// Create a new router instance
const router = express.Router();

import { requireSignin } from "../middlewares/index.js";
import { register, login, logout, currentUser } from "../controllers/auth.js";

// Route handler for registration
router.post("/register", register);
router.post("/login", login);
router.get("/logout", logout);
router.get("/current-user", requireSignin, currentUser);

// Export the router
export default router;
