// import React, { useState } from "react";
// import "../Css/Batch.css";
// import Navbar from "../Components/Navbar";
// export default function Batch() {
//   const [selected, setSelected] = useState(0);

//   const handleSelect = (index) => {
//     setSelected(index);
//   };
//   return (
//     <div>
//       <div>
//         {/* <Navbar/> */}
//         <div className="breadcrumbs-container">
//           <div
//             className={`breadcrumb ${selected === 0 ? "selected" : ""}`}
//             onClick={() => handleSelect(0)}
//           >
//             Add Batch
//           </div>
//           <div
//             className={`breadcrumb ${selected === 1 ? "selected" : ""}`}
//             onClick={() => handleSelect(1)}
//           >
//             Add Sections
//           </div>
//           <div
//             className={`breadcrumb ${selected === 2 ? "selected" : ""}`}
//             onClick={() => handleSelect(2)}
//           >
//             Add Category
//           </div>
//           <div
//             className={`breadcrumb ${selected === 3 ? "selected" : ""}`}
//             onClick={() => handleSelect(3)}
//           >
//             Add Course
//           </div>

//           <div
//             className={`breadcrumb ${selected === 4 ? "selected" : ""}`}
//             onClick={() => handleSelect(4)}
//           >
//             Add Level
//           </div>

//           <div
//             className={`breadcrumb ${selected === 5 ? "selected" : ""}`}
//             onClick={() => handleSelect(5)}
//           >
//             Add Conatent
//           </div>
//           <div
//             className={`breadcrumb ${selected === 6 ? "selected" : ""}`}
//             onClick={() => handleSelect(6)}
//           >
//             Allocate
//           </div>
//         </div>

//         <div class="card-header">
//           <div class="col-md-12">
//             <h4>
//               <strong class="card-title">Section Details</strong>
//             </h4>
//           </div>
//         </div>
//         <div class="search">
//           <h5 class="search-text">Section Name </h5>
//           <input
//             class="search-box"
//             type="serach"
//             placeholder="Enter Section Name"
//           ></input>
//           <div class="submit">
//             <button class="btn-primary" type="submit">
//               Submit
//             </button>
//           </div>
//           <hr />

//           <table class="table">
//             <tr>
//               <td>Sr.No</td>
//               <td>Section Name</td>
//               <td>Action </td>
//             </tr>
//             <tr>
//               <td>1</td>
//               <td>Mpsc</td>
//               <td>
//                 <button type="delete">delete</button>
//               </td>
//             </tr>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// }

// import React, { useState } from "react";
// import "../Css/Batch.css";
// import Breadcrum from "../Components/Breadcrum";
// export default function Batch() {
//   const [data, setData] = useState([]);
//   const [inputValue, setInputValue] = useState("");
//   const [editingIndex, setEditingIndex] = useState(null);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [currentPage, setCurrentPage] = useState(1);

//   const handleInputChange = (event) => {
//     setInputValue(event.target.value);
//   };

//   const handleSaveData = () => {
//     if (inputValue.trim() !== "") {
//       if (editingIndex !== null) {
//         // If editing an existing row, update the data array with the new value
//         const newData = [...data];
//         newData[editingIndex].data = inputValue;
//         setData(newData);
//         setEditingIndex(null);
//       } else {
//         // If adding a new row, push the new data to the data array
//         const newData = [...data];
//         const newRow = {
//           srNo: data.length + 1,
//           data: inputValue
//         };
//         newData.push(newRow);
//         setData(newData);
//       }
//       setInputValue("");
//     }
//   };

//   const handleEditData = (index) => {
//     setEditingIndex(index);
//     setInputValue(data[index].data);
//   };

//   const handleDeleteData = (index) => {
//     const newData = [...data];
//     newData.splice(index, 1);
//     setData(newData);
//   };

//   const filteredData = data.filter((row) => {
//     if (searchTerm === "") {
//       return true;
//     } else if (row.data.toLowerCase().includes(searchTerm.toLowerCase())) {
//       return true;
//     } else {
//       return false;
//     }
//   });


//   const pageSize=5;
//   const pageCount = Math.ceil(data.length / pageSize);

//   const startIndex =(currentPage-1)*pageSize;
//   const endIndex = Math.min(startIndex + pageSize -1, data.length-1);
//    const currentData= data.slice(startIndex,endIndex+1);

//   const handlePageChange = (page) => {
//     setCurrentPage(page);
//   };
//     return (
//     <div>
//       <Breadcrum />
//       <div class="card-header">
//         <h4>
//           <strong class="card-title">Section Details</strong>
//         </h4>
//       </div>

//        <div class="left-div">
//        <h5 class="text-box">Section Name </h5>
//        <input type="text" 
//        class="text-box-1"
//        value={inputValue} onChange={handleInputChange} />
//       <br/><br/>
//        </div>
//        <hr className="hrline"></hr>
//        <div class="submit">
//        <button onClick={handleSaveData}>{editingIndex !== null ? "Update" : "Submit"}</button>
//         </div>
//         <div class="vertical-line"></div>

//         <div class="search-box">
//         <input type="text"
//          class="search-box-1"
//          value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)}
//           placeholder="Search..." />
//          <br /><br />
//          <div class="table-data">
//          <table>
//         <thead>
//           <tr>
//             <th>Sr. No.</th>
//             <th>Data</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {currentData.map((row, index) => (
//             <tr key={index}>
//               <td>{row.srNo}</td>
//               <td>{editingIndex === index ? <input type="text" value={inputValue} onChange={handleInputChange} /> : row.data}</td>
//               <td>
//                 {editingIndex === index ? (
//                   <button onClick={() => setEditingIndex(null)}>Cancel</button>
//                 ) : (
//                   <>
//                     <button onClick={() => handleEditData(index)}>Edit</button>&nbsp;&nbsp;
//                     <button onClick={() => handleDeleteData(index)}>Delete</button>
//                   </>
//                 )}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <br />
//      <div class="pagination">
//     {Array.from({ length: pageCount },(_,i) => i+1).map ((page) =>(
//       <button class="pagenumber" key={page} onClick={() => handlePageChange(page)}
//         disabled={currentPage === page} 
//         >

//         {page}
//        </button>

//     ))}
//   </div>



//         </div>
//         </div>

//       </div>

//   );
// }






import React, { useState } from "react";
import "../Css/Batch.css";
import Breadcrum from "../Components/Breadcrum";
export default function Batch() {
  const [data, setData] = useState([]);
  const [inputData, setInputData] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [error, setError] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);

  // Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputData.trim() === "") {
      setError("Please enter a valid input");
      return;
    }
    if (selectedItem) {
      const newData = data.map((d) =>
        d.srNo === selectedItem.srNo ? { srNo: d.srNo, data: inputData } : d
      );
      setData(newData);
      setSelectedItem(null);
    } else {
      setData([...data, { srNo: data.length + 1, data: inputData }]);
    }
    setInputData("");
    setError("");
  };
  
  // Handle search
  const handleSearch = (e) => {
    setSearchInput(e.target.value);
  };

  // Filter data based on search input
  const filteredData = data.filter((item) =>
    item.data.toLowerCase().includes(searchInput.toLowerCase())
  );

  // Handle page navigation
  const handlePageChange = (type) => {
    setSelectedItem(null);
    if (type === "prev") {
      setCurrentPage((prev) => prev - 1);
    } else {
      setCurrentPage((prev) => prev + 1);
    }
  };
    // Get current items based on currentPage and itemsPerPage
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  // Map over currentItems and create table rows
  const tableRows = currentItems.map((item) => (
    <tr key={item.srNo}>
      <td>{item.srNo}</td>
      <td>{selectedItem && selectedItem.srNo === item.srNo ? (
        <input
          type="text"
          value={inputData}
          onChange={(e) => setInputData(e.target.value)}
        />
      ) : (
        item.data
      )}</td>
      <td>
        {selectedItem && selectedItem.srNo === item.srNo ? (
          <button onClick={handleSubmit}>Save</button>
        ) : (
          <>
            <button onClick={() => handleEdit(item)}>Edit</button>
            <button onClick={() => handleDelete(item)}>Delete</button>
          </>
        )}
      </td>
    </tr>
  ));
  
  const handleEdit = (item) => {
    setSelectedItem(item);
    setInputData(item.data);
  };

  const handleDelete = (item) => {
    const newData = data.filter((d) => d.srNo !== item.srNo);
    setData(
      newData.map((d, index) => ({
        srNo: index + 1,
        data: d.data
      }))
    );
  };
    
  
  // Create page numbers for pagination
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(filteredData.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (

    <div>
      <Breadcrum/>
    <div>
      <form onSubmit={handleSubmit}>

      <div class="card-header">
        <h4>
          <strong class="card-title">Section Details</strong>
        </h4>
      </div>


           
        <div class="left-div">
        <h5 class="text-box">Section Name<spam>*</spam> :  </h5>
        <input
          type="text"
          value={inputData}
          onChange={(e) => setInputData(e.target.value)}
        />
        </div>

       <hr className="line"></hr>

        <div class="submit-button">
        <button  class="buttion-1" type="submit">Submit</button>
        <div class="error-msg">
        {error  && <p>{error}</p>}
        </div>
        </div>
         <div class="v-line"></div>



      </form>

      <div className="search-box">
        
      <input
        type="text"
        value={searchInput}
        onChange={handleSearch}
        placeholder="Search..."
      />


      </div>

      <div class="table-data">
      <table class="customers" style={{ display: filteredData.length === 0 ? "none" : "block" }}>
        <thead>
          <tr>
            <th>SrNo</th>
            <th>Data</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{tableRows}</tbody>
      </table>

      </div>
     
      <div  class="error">
      {filteredData.length === 0 && <p>No data found</p>}

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

