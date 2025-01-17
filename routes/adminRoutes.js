const express = require('express');
const { login } = require('../controllers/adminController');
const { getAllUsers } = require('../controllers/adminController')


const { authMiddleware } = require('../middlewares/authMiddleware');
const router = express.Router();



router.post('/superadmin/login', login);
router.get('/users', authMiddleware, getAllUsers); // Get details of all users

module.exports = router;
