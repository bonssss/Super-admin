
import React, { useState } from 'react';
import './managemedicine.css'; // Import the CSS file for stylin
// YourComponent.jsx
import '@fortawesome/fontawesome-free/css/all.css';
import manage from '../../assets/medicine.png'






const TableRow = ({ data, onEdit, onDelete }) => {
  return (
    <tr>
      <td>{data.sl}</td>
      <td>{data.medicineName}</td>
      <td>{data.genericName}</td>
      <td>{data.supplier}</td>
      <td>{data.date}</td>
      <td>{data.ExDate}</td>

      <td>{data.quantity}</td>
      <td>{data.Price}</td>


     
    </tr>
  );
};


const ManageMedicine = () => {
  const [selectedRow, setSelectedRow] = useState(null);

  const handleEdit = (sl) => {
    console.log(`Edit row with SL: ${sl}`);
  };

  const handleDelete = (sl) => {
    console.log(`Delete row with SL: ${sl}`);
  };

  const medicinesData = [
    {
      sl: 1,
      medicineName: 'Medicine 1',
      genericName: 'Generic 1',
      supplier: 'Supplier 1',
      date: '11/3/2000',
      Exdate: '11/3/2000',
      quantity:12,
      Price:120


      

    },
    // Add more medicine data objects as needed
  ];

  const [filter, setFilter] = useState('all'); // 'all', 'month', 'week'

  const handleFilterChange = (selectedFilter) => {
    setFilter(selectedFilter);
  }
  return (
    
    <div className="container-fluid">
      <div className="container"> 
        <h1> <img src={manage} className=" dashboard-icon" alt="" />Manage Medicine</h1>
        {/* Header section */}
        <div className="row">
          <div className="col-md-12 form-group form-inline">
            <label className="font-weight-bold" htmlFor="">Search:&emsp;</label>
            <input type="text" className="form-control" id="by_name" placeholder="By Medicine Name" />
            &emsp;<input type="text" className="form-control" id="by_generic_name" placeholder="By Generic Name" />
            &emsp;<input type="text" className="form-control" id="by_suppliers_name" placeholder="By Supplier Name" />
          </div>
          <div className="col col-md-12">
            <hr className="col-md-12" style={{ padding: '0px', borderTop: '2px solid #02b6ff' }} />
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
        {/* Header section end */}

        {/* Medicine table */}
        <div className="row">
          <div className="col col-md-12 table-responsive">
            <div className="table-responsives">
              <table className="table table-bordered table-striped table-hover">
                <thead>
                  <tr>
                    <th>SL.</th>
                    <th>Medicine Name</th>
                    <th>Generic Name</th>
                    <th>Supplier</th>
                    <th>Date</th>
                    <th>Ex.Date</th>
                    <th>Quantity</th>
                    <th>Price</th>




                  </tr>
                </thead>
                <tbody id="medicines_div">
                  {medicinesData.map((medicine, index) => (
                    <TableRow key={index} data={medicine} onEdit={handleEdit} onDelete={handleDelete} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        
        {/* Medicine table end */}
      </div>
    </div>
  );
};

export default ManageMedicine;
