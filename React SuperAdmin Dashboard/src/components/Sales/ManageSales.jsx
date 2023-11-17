// ManageSales.jsx

import React, { useState } from 'react';
import './managesales.css';
import logo from '../../assets/ppp.png';
import './managesales.css'


const TableRow = ({ data, onEdit, onDelete }) => {
  return (
    <tr>
        <td>{data.id}</td>
      <td>{data.medicineName}</td>
      <td>{data.date}</td>
      <td>{data.expireDate}</td>
      <td>{data.quantity}</td>
      <td>{data.price}</td>
      
    </tr>
  );
};

const ManageSales = () => {
  const [salesData, setSalesData] = useState([
    {
      id: 1,
      medicineName: 'Medicine 1',
      date: '2023-11-10',
      expireDate: '2023-11-20',
      quantity: 10,
      price: 120,
    },
    // Add more sales data objects as needed
  ]);

  const handleEdit = (id) => {
    // Add logic to handle edit action
    console.log(`Edit sale with ID: ${id}`);
  };

  const handleDelete = (id) => {
    // Add logic to handle delete action
    console.log(`Delete sale with ID: ${id}`);
  };


  const [filter, setFilter] = useState('all'); // 'all', 'month', 'week'

  const handleFilterChange = (selectedFilter) => {
    setFilter(selectedFilter);
  }

  return (
    <div className="managesales-container">
    <div className="container">
      <h2><img src={logo} alt="" className='managesales'/>Sales Management</h2>

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
      <div className="table-responsive">
        <table className="table table-bordered table-striped table-hover">
          <thead>
            <tr>
              <th>ID</th>
              <th>Medicine Name</th>
              <th>Date</th>
              <th>Expire Date</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {salesData.map((sale) => (
              <TableRow
                key={sale.id}
                data={sale}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            ))}
          </tbody>
        </table>
      </div>
    
    </div>
    </div>
  );
};

export default ManageSales;
