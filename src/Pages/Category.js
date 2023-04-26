  import React, { useState } from "react";
  import "../Css/Category.css";
  import Breadcrum from "../Components/Breadcrum";
  export default function Batch() {
    const [data, setData] = useState([]);
    const [inputData, setInputData] = useState("");
    const [inputCategory, setInputCategory] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(5);
    const [error, setError] = useState("");
    const [selectedItem, setSelectedItem] = useState(null);
    const [isEditing, setIsEditing] = useState(false);

    // Handle submit
    const handleSubmit = (e) => {
      e.preventDefault();
      if (inputData.trim() === "" || inputCategory.trim()==="") {
        setError("Please enter a valid input");
        return;
      }
      if (selectedItem) {
        const newData = data.map((d) =>
          d.srNo === selectedItem.srNo ? { srNo: d.srNo, data: inputData, category: inputCategory } : d
        );
        setData(newData);
        setSelectedItem(null);
      } else {
        setData([...data, { srNo: data.length + 1, data: inputData, category: inputCategory }]);
      }
      setInputData("");
      setInputCategory("");
      setError("");
    };

    // Filter data based on search input
  
    const handlePageChange = (type) => {
      if (type === "prev") {
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
  const tableRows = currentItems.map((item) =>
    isEditing && selectedItem && selectedItem.srNo === item.srNo ? (
      <tr key={item.srNo}>
        <td>{item.srNo}</td>
        <td>
          <input
            type="text"
            value={selectedItem.data}
            onChange={(e) =>
              setSelectedItem({ ...selectedItem, data: e.target.value })
            }
          />
        </td>
        <td>
          <input
            type="text"
            value={selectedItem.category}
            onChange={(e) =>
              setSelectedItem({ ...selectedItem, category: e.target.value })
            }
          />
        </td>
        <td>
          <button onClick={() => handleEditSubmit(selectedItem)}>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </td>
      </tr>
    ) : (
      <tr key={item.srNo}>
        <td>{item.srNo}</td>
        <td>{item.data}</td>
        <td>{item.category}</td>
        <td>
          <button onClick={() => handleEdit(item)}>Edit</button>
          <button onClick={() => handleDelete(item)}>Delete</button>
        </td>
      </tr>
    )
  );
  
  const handleEdit = (item) => {
    setSelectedItem(item);
    setIsEditing(true);
  };
  
  const handleEditSubmit = (item) => {
    const updatedData = data.map((d) =>
      d.srNo === item.srNo ? { ...d, ...item } : d
    );
    setData(updatedData);
    setIsEditing(false);
    setSelectedItem(null);
  };
  
  const handleDelete = (item) => {
    const newData = data.filter((d) => d.srNo !== item.srNo);
    setData(
      newData.map((d, index) => ({
        srNo: index + 1,
        data: d.data,
        category: d.category
      }))
    );
  };
    // Create page numbers for pagination
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
      pageNumbers.push(i);
    }


      return (

      <div>
        <Breadcrum/>
      <div>
        <form onSubmit={handleSubmit}>

        <div class="category-header">
          <h4>
            <strong class="card-title">Section Details</strong>
          </h4>
        </div>


            
          <div class="left-div">
          <h5 class="text-box">Section Name<spam>*</spam> :  </h5>
          <input
             className="data"
            type="text"
            value={inputData}
            onChange={(e) => setInputData(e.target.value)}
          />
          </div>

          <div class="left-div1">
          <h5 class="text-box">Category Name<spam>*</spam> :  </h5>
          <input
            className="category"
            type="text"
            value={inputCategory}
            onChange={(e) => setInputCategory(e.target.value)}
          />
          </div>


        <hr className="horizontalline"></hr>

          <div class="submit-button">
          <button  class="buttion-1" type="submit">Submit</button>
          <div class="error-msg">
          {error }
          </div>
          </div>
          <div class="vertical-line"></div>



        </form>
        <div class="table-data">
        <table style={{ display: data.length === 0 ? "none" : "block" }}>
          <thead>
            <tr>
              <th>SrNo</th>
              <th>Data</th>
              <th>Category</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{tableRows}</tbody>
        </table>

        </div>
      
                
        <div class="pagination">
          <button
            onClick={() => handlePageChange("prev")}
            disabled={currentPage === 1}
          >
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
            onClick={() => handlePageChange("next")}
            disabled={currentPage === Math.ceil(data.length / itemsPerPage)}
          >
            Next
          </button>
          </div>
        </div>
      </div>
    );
  }

