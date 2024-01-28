const express = require('express');
const bodyParser = require('body-parser');

const userController = require('../controllers/userController');    
const departmentController = require('../controllers/departmentController');


const router = express.Router();
router.use(bodyParser.json());

// User signup route
router.post('/signup', userController.signUp);

// User login route
router.post('/login', userController.login);

// Department routes
 router.get('/departments', departmentController.getAllDepartments);
 router.get('/departments/:id', departmentController.getDepartmentById);
 router.post('/departments', departmentController.createDepartment);
router.put('/departments/:id', departmentController.updateDepartmentById);
 router.delete('/departments/:id', departmentController.deleteDepartmentById);



module.exports = router;
