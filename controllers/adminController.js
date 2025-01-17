const User = require('../models/User'); // Replace with your user model path
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
require('dotenv').config();

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }

    // Check if user exists and is superadmin
    const user = await User.findOne({ email });
    console.log('User found:', user); // Debugging log

    if (!user || user.role !== 'superadmin') {
      return res.status(403).json({ message: 'Access denied' });
    }

    // Validate password
    const isMatch = await bcrypt.compare(password, user.password);
    console.log('Password match:', isMatch); // Debugging log

    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Generate JWT token
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET_KEY,
      { expiresIn: '1d' }
    );

    res.status(200).json({
      message: 'Superadmin login successful',
      token,
    });
  } catch (error) {
    console.error('Error during login:', error); // Debugging log
    res.status(500).json({ message: error.message });
  }
};

const getAllUsers = async (req, res) => {
  try {

    // Check if the user is a superadmin
    if (req.user.role !== 'superadmin') {
      return res.status(403).json({ message: 'Access forbidden. Superadmin only.' });
    }
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { login , getAllUsers};
