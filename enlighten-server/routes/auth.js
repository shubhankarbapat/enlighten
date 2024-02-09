// Import necessary modules
import express from 'express';

// Create a new router instance
const router = express.Router();

import { register,login } from '../controllers/auth.js';

// Route handler for registration
router.post('/register', register);
router.post('/login', login);

// Export the router
export default router;
