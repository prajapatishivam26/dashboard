const mongoose = require('mongoose');

const departmentSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  description: { type: String },
  location: { type: String, default: 'ground' },
  
  // You can add more fields based on your requirements
});

const Department = mongoose.model('Department', departmentSchema);

module.exports = Department;
