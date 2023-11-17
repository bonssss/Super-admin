// ManagePurchase.jsx
import React from 'react';
import './managepurchase.css'; // Import your CSS file for styling if needed
import managepurchase from '../../assets/ppp.png'
import { useState } from 'react';
const TableRow = ({ data }) => {
  return (
    <tr>
      <td>{data.supplierName}</td>
      <td>{data.medicineName}</td>
      <td>{data.invoiceNumber}</td>
      <td>{data.paymentType}</td>
      <td>{data.invoiceDate}</td>
      <td>{data.expireDate}</td>
      <td>{data.price}</td>
      {/* Add more columns as needed */}
      
    </tr>
  );
};

const ManagePurchase = () => {
  const purchasesData = [
    {
      id: 1,
      supplierName: 'Supplier 1',
      medicineName: 'Medicine 1',
      invoiceNumber: 'INV001',
      paymentType: 'Cash Payment',
      invoiceDate: '2023-01-01',
      expireDate: '2023-12-31',
      price: 100,
    },
    // Add more purchase data objects as needed
  ];

  const handleEdit = (id) => {
    console.log(`Edit purchase with ID: ${id}`);
  };

  const handleDelete = (id) => {
    console.log(`Delete purchase with ID: ${id}`);
  };

  const [filter, setFilter] = useState('all'); // 'all', 'month', 'week'

  const handleFilterChange = (selectedFilter) => {
    setFilter(selectedFilter);
  }

  return (

    <div className="container-fluid">
          <div className="managepurchase-container">

      <h1><img src={managepurchase} className='dashboard-icon' alt="" />Manage Purchases</h1>
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
              <th>Supplier Name</th>
              <th>Medicine Name</th>
              <th>Invoice Number</th>
              <th>Payment Type</th>
              <th>Invoice Date</th>
              <th>Expire Date</th>
              <th>Price</th>
              {/* Add more columns as needed */}
            </tr>
          </thead>
          <tbody>
            {purchasesData.map((purchase) => (
              <TableRow key={purchase.id} data={purchase} />
            ))}
          </tbody>
        </table>
      </div>
      
    </div>
    </div>
  );
};

export default ManagePurchase;
