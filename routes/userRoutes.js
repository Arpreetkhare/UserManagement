const express = require('express');
const { register, login } = require('../controllers/authController');
const { 
  getProfile, 
  updateProfile, 
  deactivateAccount
} = require('../controllers/userController');
const { authMiddleware } = require('../middlewares/authMiddleware');

const router = express.Router();

// Public routes
router.post('/register', register);  // Register a new user
router.post('/login', login);        // Login a user

// Protected routes (requires authentication)
router.get('/profile', authMiddleware, getProfile);         // Get logged-in user's profile
router.put('/profile', authMiddleware, updateProfile);      // Update logged-in user's profile
router.put('/deactivate', authMiddleware, deactivateAccount); // Deactivate logged-in user's account


module.exports = router;
