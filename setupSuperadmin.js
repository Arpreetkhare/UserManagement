const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

// Load User model (adjust the path as per your project structure)
const User = require('./models/User');

// Connect to the database
const connectDB = require('./config/db');
connectDB();

// Create the superadmin user
const createSuperAdmin = async () => {
  try {
    // Check if the superadmin already exists
    const existingSuperAdmin = await User.findOne({ email: process.env.SUPERADMIN_EMAIL });
    if (existingSuperAdmin) {
      console.log('Superadmin already exists.');
      process.exit(0);
    }


    const superAdmin = new User({
      name: 'Arpreet',
      email: process.env.SUPERADMIN_EMAIL,
      password:process.env.SUPERADMIN_PASSWORD,
      role: 'superadmin',
    });

    await superAdmin.save();
    console.log('Superadmin user created successfully.');
    process.exit(0); // Exit the script
  } catch (error) {
    console.error('Error creating superadmin:', error);
    process.exit(1); // Exit with failure code
  }
};

createSuperAdmin();
console.log(createSuperAdmin())
