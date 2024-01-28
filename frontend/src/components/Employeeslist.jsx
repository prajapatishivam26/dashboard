/* eslint-disable no-unused-vars */
// src/components/EmployeeDetails.js

import React from 'react';
import { useParams } from 'react-router-dom';

const EmployeeDetails = () => {
  const { id } = useParams();

  // Example static data for an employee
  const employee = {
   // id: parseInt(id),
   id: '1',
    name: 'John Doe',
    location: 'New York',
    position: 'Software Developer',
    email: 'john.doe@example.com',
  };

  return (
    <div className="container mx-auto mt-8">
    <div className="max-w-md mx-auto bg-white p-8 shadow-md rounded-md">
      <h2 className="text-2xl font-semibold mb-4">Employee Details</h2>
      <div>
        <p className="text-lg font-semibold mb-2">Employee ID: {employee.id}</p>
        <p className="mb-2"><span className="font-semibold">Name:</span> {employee.name}</p>
        <p className="mb-2"><span className="font-semibold">Location:</span> {employee.location}</p>
        <p className="mb-2"><span className="font-semibold">Position:</span> {employee.position}</p>
        <p><span className="font-semibold">Email:</span> {employee.email}</p>
      </div>
    </div>
  </div>
);
}

export default EmployeeDetails;
