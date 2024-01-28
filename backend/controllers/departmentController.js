const Department = require('../models/Department');

// Get all departments
const getAllDepartments = async (req, res) => {
  try {
    const departments = await Department.find();
    res.status(200).json(departments);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get department by ID
const getDepartmentById = async (req, res) => {
  const { id } = req.params;
  try {
    const department = await Department.findById(id);
    if (department) {
      res.status(200).json(department);
    } else {
      res.status(404).json({ error: 'Department not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Create a new department
const createDepartment = async (req, res) => {
  const { name, description, head, location } = req.body;

  try {
    const newDepartment = new Department({
      name,
      description,
      
      location,
    });

    await newDepartment.save();
    res.status(201).json(newDepartment);
  } catch (error) {
    res.status(400).json({ error: 'Bad Request' });
  }
};

// Update department by ID
const updateDepartmentById = async (req, res) => {
  const { id } = req.params;
  const { name, description,  location } = req.body;

  try {
    const department = await Department.findById(id);
    if (department) {
      department.name = name || department.name;
      department.description = description || department.description;
      
      department.location = location || department.location;

      await department.save();
      res.status(200).json(department);
    } else {
      res.status(404).json({ error: 'Department not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Delete department by ID
const deleteDepartmentById = async (req, res) => {
  const { id } = req.params;
  try {
    const department = await Department.findByIdAndDelete(id);
    if (department) {
      res.status(200).json({ message: 'Department deleted successfully' });
    } else {
      res.status(404).json({ error: 'Department not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  getAllDepartments,
  getDepartmentById,
  createDepartment,
  updateDepartmentById,
  deleteDepartmentById,
};
