// PharmacyManagement.jsx

import React, { useState, useEffect } from 'react';
// import './managepharmacy.css'; // Import your CSS file for styling if needed

const ManagePharmacy = () => {
  const [pharmacies, setPharmacies] = useState([]);

  useEffect(() => {
    // Fetch pharmacy data from the backend API
    fetch('your_backend_api_url') // Replace with your actual API endpoint
      .then((response) => response.json())
      .then((data) => setPharmacies(data))
      .catch((error) => console.error('Error fetching pharmacy data:', error));
  }, []);

  const [filter, setFilter] = useState('all'); // 'all', 'month', 'week'

  const handleFilterChange = (selectedFilter) => {
    setFilter(selectedFilter);
  }

  return (
    <div className="container">
      <h1>Pharmacy Management</h1>

      <div className="filter-dropdown">
        <label htmlFor="filter">Filter:</label>
        <select
          id="filter"
          value={filter}
          onChange={(e) => handleFilterChange(e.target.value)}
        >
          <option value="all">All</option>
          <option value="month">Month</option>
          <option value="week">Week</option>
          <option value="week">Today</option>

        </select>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>Pharmacy Name</th>
            <th>Owner Name</th>
            <th>License Number</th>
            <th>Location</th>
            <th>Email</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {pharmacies.map((pharmacy) => (
            <tr key={pharmacy.id}>
              <td>{pharmacy.pharmacyName}</td>
              <td>{pharmacy.ownerName}</td>
              <td>{pharmacy.licenseNumber}</td>
              <td>{pharmacy.location}</td>
              <td>{pharmacy.email}</td>
              <td>{pharmacy.phoneNo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManagePharmacy;
