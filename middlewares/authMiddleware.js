const jwt = require('jsonwebtoken');
require('dotenv').config(); 

const authMiddleware = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    if (!token) return res.status(401).json({ message: 'Access denied' });

    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    console.log(process.env.JWT_SECRET_KEY); 
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Invalid token' });
  }
};

// const superAdminMiddleware = (req, res, next) => {
//   try {
//     // Ensure req.user is defined and contains a role property
//     if (!req.user || req.user.role !== 'superadmin') {
//       return res.status(403).json({ message: 'Access forbidden' });
//     }
//     console.log(req.user.role)

//     next(); // Proceed to the next middleware or route handler
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };
module.exports = { authMiddleware};
