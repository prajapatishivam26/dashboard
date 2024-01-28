const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const uri = 'mongodb://localhost:27017/IPANGRAM'; // Replace with your MongoDB connection URI and database name
    await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1); // Exit the process if the connection fails
  }
};

module.exports=connectDB;