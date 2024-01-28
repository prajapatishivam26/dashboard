/* eslint-disable no-unused-vars */
// src/components/Departments.js

import React, { useState,useEffect } from 'react';
import axios  from "axios";


const Departments = () => {
  const [departments, setDepartments] = useState([
    // { id: 1, name: 'HR' },
    // { id: 2, name: 'IT' },
    // { id: 3, name: 'Finance' },
  ]);

  const [newDepartment, setNewDepartment] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState(null);




  useEffect(() => {
    const fetchData = async () => {
      
      
        try {
          const response = await axios.get("http://localhost:3000/departments", {
            // headers: {
            //   "token": token, // Include the user's token
            // },
          }
          )
          const { data } = response;
          console.log('APi response----->', data)
          // setOrders(data.orders);

        } catch (error) {
          console.error('Error fetching data:', error);
        }

      

    };
    fetchData();
  }, []);





























































































  const handleCreateDepartment = () => {
    if (newDepartment.trim() !== '') {
      const newDept = { id: departments.length + 1, name: newDepartment };
      setDepartments([...departments, newDept]);
      setNewDepartment('');
    }
  };

  const handleUpdateDepartment = () => {
    if (selectedDepartment !== null && newDepartment.trim() !== '') {
      const updatedDepartments = [...departments];
      updatedDepartments[selectedDepartment].name = newDepartment;
      setDepartments(updatedDepartments);
      setNewDepartment('');
      setSelectedDepartment(null);
    }
  };

  const handleDeleteDepartment = (index) => {
    const updatedDepartments = [...departments];
    updatedDepartments.splice(index, 1);
    setDepartments(updatedDepartments);
  };

  return (
    <div className="container mx-auto p-8 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Departments</h2>

      {/* Form for creating or updating departments */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="New Department"
          value={newDepartment}
          onChange={(e) => setNewDepartment(e.target.value)}
          className="p-2 border border-gray-300 rounded mr-2"
        />
        <button
          onClick={selectedDepartment !== null ? handleUpdateDepartment : handleCreateDepartment}
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          {selectedDepartment !== null ? 'Update Department' : 'Create Department'}
        </button>
      </div>

      {/* List of existing departments */}
      <ul>
        {departments.map((department, index) => (
          <li key={department.id} className="mb-2 p-2 bg-gray-100 rounded flex justify-between items-center">
            <span>{department.name}</span>
            <div>
              <button
                onClick={() => setSelectedDepartment(index)}
                className="bg-yellow-500 text-white py-1 px-2 rounded mr-2"
              >
                Edit
              </button>
              <button
                onClick={() => handleDeleteDepartment(index)}
                className="bg-red-500 text-white py-1 px-2 rounded"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Departments;
