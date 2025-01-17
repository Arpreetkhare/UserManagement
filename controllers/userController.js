const User = require('../models/User');

const getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateProfile = async (req, res) => {
  try {
    const updates = req.body;
    const user = await User.findByIdAndUpdate(req.user.id, updates, { new: true });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deactivateAccount = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.user.id, { isActive: false }, { new: true });
    res.status(200).json({ message: 'Account deactivated', user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



module.exports = { getProfile, updateProfile, deactivateAccount };
