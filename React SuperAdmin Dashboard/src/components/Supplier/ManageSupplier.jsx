import React, { useState, useEffect } from 'react';
import './managesupplier.css'; // Import your CSS file
import managesupplier from '../../assets/supplier.png'

const ManageSupplier = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [suppliers, setSuppliers] = useState([]);

  // Fetch suppliers data (use useEffect for asynchronous operations)
  useEffect(() => {
    // Implement your logic to fetch suppliers data from API or database
    // For example: fetchSuppliersData().then(data => setSuppliers(data));
  }, []); // Empty dependency array ensures useEffect runs once after initial render

  const filteredSuppliers = suppliers.filter(supplier =>
    supplier.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle search input change
  const handleSearchInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const [filter, setFilter] = useState('all'); // 'all', 'month', 'week'

  const handleFilterChange = (selectedFilter) => {
    setFilter(selectedFilter);
  }

  return (
    <div className="container-fluid">
      <div className="container">
        <h1> <img src={managesupplier} className='dashboard-icon' alt="" />Manage Supplier</h1>
        
        {/* Header section */}
        <div className="row">
          <div className="col-md-12 form-group form-inline">
            <label className="font-weight-bold" htmlFor="">Search:&emsp;</label>
            <input type="text" className="form-control" id="" placeholder="Search Supplier" value={searchTerm} onChange={handleSearchInputChange} />
          </div>
        </div>

        
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
        <div className="row">
          <div className="col col-md-12">
            <hr className="col-md-12" style={{ padding: '0px', borderTop: '2px solid #02b6ff' }} />
          </div>
        </div>
        {/* Table */}
        <div className="row">
          <div className="col col-md-12 table-responsive">
            <div className="table-responsive">
              <table className="table table-bordered table-striped table-hover">
                <thead>
                  <tr>
                    <th style={{ width: '5%' }}>SL</th>
                    <th style={{ width: '10%' }}>ID</th>
                    <th style={{ width: '20%' }}>Name</th>
                    <th style={{ width: '15%' }}>Email</th>
                    <th style={{ width: '15%' }}>Contact Number</th>
                    <th style={{ width: '20%' }}>Address</th>
                  </tr>
                </thead>
                <tbody id="suppliers_div">
                  {filteredSuppliers.map((supplier, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{supplier.id}</td>
                      <td>{supplier.name}</td>
                      <td>{supplier.email}</td>
                      <td>{supplier.contactNumber}</td>
                      <td>{supplier.address}</td>
                      <td> {/* Actions buttons */}
                        {/* Add action buttons here */}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {/* Table end */}
      </div>
    </div>
  );
};

export default ManageSupplier;
