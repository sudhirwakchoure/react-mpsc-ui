import React, { useState } from 'react';
import "../Css/Category.css";

export default function Section() {
    const [data, setData] = useState([]);
    const [inputData, setInputData] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(5);
  
    // Handle submit
    const handleSubmit = (e) => {
      e.preventDefault();
      setData([...data, { srNo: data.length + 1, data: inputData }]);
      setInputData('');
    };
  
    // Handle page navigation
    const handlePageChange = (type) => {
      if (type === 'prev') {
        setCurrentPage((prev) => prev - 1);
      } else {
        setCurrentPage((prev) => prev + 1);
      }
    };
  
    // Get current items based on currentPage and itemsPerPage
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  
    // Map over currentItems and create table rows
    const tableRows = currentItems.map((item) => (
      <tr key={item.srNo}>
        <td>{item.srNo}</td>
        <td>{item.data}</td>
        <td>{item.CategoryName}</td>
        <td>
          <button>Edit</button>
          <button>Delete</button>
        </td>
      </tr>
    ));
  
    // Create page numbers for pagination
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
      pageNumbers.push(i);
    }
  
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" value={inputData} onChange={(e) => setInputData(e.target.value)} />
          <button type="submit">Submit</button>
        </form>
        <table>
          <thead>
            <tr>
              <th>SrNo</th>
              <th>Data</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{tableRows}</tbody>
        </table>
        <div>
          <button onClick={() => handlePageChange('prev')} disabled={currentPage === 1}>
            Prev
          </button>
          {pageNumbers.map((number) => (
            <button
              key={number}
              onClick={() => setCurrentPage(number)}
              disabled={currentPage === number}
            >
              {number}
            </button>
          ))}
          <button
            onClick={() => handlePageChange('next')}
            disabled={currentPage === Math.ceil(data.length / itemsPerPage)}
          >
            Next
          </button>
        </div>
      </div>
    );
  }
  
  