/* eslint-disable no-unused-vars */
// src/components/Employees.js

import React, { useState } from 'react';

const Employees = () => {
  const [employees, setEmployees] = useState([
    { id: 1, name: 'John Doe', location: 'New York' },
    { id: 2, name: 'Jane Smith', location: 'San Francisco' },
    { id: 3, name: 'Bob Johnson', location: 'Los Angeles' },
  ]);

  const [filteredEmployees, setFilteredEmployees] = useState(employees);
  const [filterName, setFilterName] = useState('');
  const [filterLocation, setFilterLocation] = useState('');

  const handleFilter = () => {
    // Implement logic for filtering employees based on name and location
    const filtered = employees.filter(employee => {
      const nameMatch = employee.name.toLowerCase().includes(filterName.toLowerCase());
      const locationMatch = employee.location.toLowerCase().includes(filterLocation.toLowerCase());
      return nameMatch && locationMatch;
    });

    setFilteredEmployees(filtered);
  };

  return (
    <div className="container mx-auto p-8 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Employees</h2>

      {/* Filter inputs */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Filter by Name"
          value={filterName}
          onChange={(e) => setFilterName(e.target.value)}
          className="p-2 border border-gray-300 rounded mr-2"
        />
        <input
          type="text"
          placeholder="Filter by Location"
          value={filterLocation}
          onChange={(e) => setFilterLocation(e.target.value)}
          className="p-2 border border-gray-300 rounded mr-2"
        />
        <button
          onClick={handleFilter}
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Filter
        </button>
      </div>

      {/* List of employees */}
      <ul>
        {filteredEmployees.map(employee => (
          <li key={employee.id} className="mb-2 p-2 bg-gray-100 rounded">
            <div className="flex justify-between items-center">
              <span>{employee.name}</span>
              <span>{employee.location}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Employees;
