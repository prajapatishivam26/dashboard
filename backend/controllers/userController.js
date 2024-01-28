
const User = require('../models/User');

// In-memory storage for users
const users = [];

// Controller function for user signup
const signUp = async (req, res) => {
  const { username, email, password, role } = req.body;

  try {
    // Check if email already exists in the database
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already exists' });
    }

    // Create a new User instance
    const newUser = new User({ username, email, password, role });

    // Save the user to the database
    await newUser.save();

    console.log("User details:", newUser);

    return res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Controller function for user login
const login = async(req, res) => {
  const { email, password } = req.body;

  // Find user by username
  

  const user = await User.findOne({ email });

  // Check if user exists and password is correct
  if (user && user.password === password) {
    return res.status(200).json({ message: 'Login successful', role: user.role });
  }

  return res.status(401).json({ message: 'Invalid credentials' });
};

module.exports = {
  signUp,
  login,
};
