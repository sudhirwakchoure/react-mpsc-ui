// import React, { useState } from "react";
// import "../Css/Batch.css";
// import Breadcrumfalt from "./Breadcrumfalt";
// export default function Batch() {
//   const [data, setData] = useState([]);
//   const [inputData, setInputData] = useState("");
//   const [currentPage, setCurrentPage] = useState(1);
//   const [itemsPerPage] = useState(5);
//   const [error, setError] = useState("");
//   const [searchInput, setSearchInput] = useState("");
//   const [selectedItem, setSelectedItem] = useState(null);

//   // Handle submit
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (inputData.trim() === "") {
//       setError("Please enter a valid input");
//       return;
//     }
//     if (selectedItem) {
//       const newData = data.map((d) =>
//         d.srNo === selectedItem.srNo ? { srNo: d.srNo, data: inputData } : d
//       );
//       setData(newData);
//       setSelectedItem(null);
//     } else {
//       setData([...data, { srNo: data.length + 1, data: inputData }]);
//     }
//     setInputData("");
//     setError("");
//   };

//   // Handle search
//   const handleSearch = (e) => {
//     setSearchInput(e.target.value);
//   };

//   // Filter data based on search input
//   const filteredData = data.filter((item) =>
//     item.data.toLowerCase().includes(searchInput.toLowerCase())
//   );

//   // Handle page navigation
//   const handlePageChange = (type) => {
//     setSelectedItem(null);
//     if (type === "prev") {
//       setCurrentPage((prev) => prev - 1);
//     } else {
//       setCurrentPage((prev) => prev + 1);
//     }
//   };
//   // Get current items based on currentPage and itemsPerPage
//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

//   // Map over currentItems and create table rows
//   const tableRows = currentItems.map((item) => (
//     <tr key={item.srNo}>
//       <td>{item.srNo}</td>
//       <td>
//         {selectedItem && selectedItem.srNo === item.srNo ? (
//           <input
//             type="text"
//             value={inputData}
//             onChange={(e) => setInputData(e.target.value)}
//           />
//         ) : (
//           item.data
//         )}
//       </td>
//       <td>
//         {selectedItem && selectedItem.srNo === item.srNo ? (
//           <button onClick={handleSubmit}>Save</button>
//         ) : (
//           <>
//             <button onClick={() => handleEdit(item)}>Edit</button>
//             <button onClick={() => handleDelete(item)}>Delete</button>
//           </>
//         )}
//       </td>
//     </tr>
//   ));

//   const handleEdit = (item) => {
//     setSelectedItem(item);
//     setInputData(item.data);
//   };

//   const handleDelete = (item) => {
//     const newData = data.filter((d) => d.srNo !== item.srNo);
//     setData(
//       newData.map((d, index) => ({
//         srNo: index + 1,
//         data: d.data,
//       }))
//     );
//   };

//   // Create page numbers for pagination
//   const pageNumbers = [];
//   for (let i = 1; i <= Math.ceil(filteredData.length / itemsPerPage); i++) {
//     pageNumbers.push(i);
//   }
//   return (
//     <div>
//       <Breadcrumfalt />

//       <div class="card-header">
//         <form onSubmit={handleSubmit}>
//           <div className="title">
//             <strong class=" ">Section Details</strong>
//           </div>

//           <hr></hr>

//           <div class="section-div">
//             <div className="section-div-left">
//               <div class="text-box">
//                 <small>Section Name</small><spam className="important">&nbsp;*</spam> :&nbsp;&nbsp;
//                 <input
//                   type="text"
//                   value={inputData}
//                   onChange={(e) => setInputData(e.target.value)}
//                 />
//                 <hr className="line"></hr>
//                 <button class="buttion-1" type="submit">
//                   Submit
//                 </button>
//                 <br />
//                 {error && <p className="submiterror">{error}</p>}
//               </div>
//             </div>
//             <div class="v-line"></div>
//             <div className="section-div-right">
//             <small>Search</small>              <br/>
//             <input
//               type="text"
//               className="search-box"
//               value={searchInput}
//               onChange={handleSearch}
//               placeholder="Search..."
//             />
//             <br/>            <br/>

//             <div class="table-data">
//               <table
//                 class="sectiontable"
//                 style={{
//                   display: filteredData.length === 0 ? "none" : "block",
//                 }}
//               >
//                 <thead>
//                   <tr>
//                     <th>SrNo</th>
//                     <th>Data</th>
//                     <th>Action</th>
//                   </tr>
//                 </thead>
//                 <tbody>{tableRows}</tbody>
//               </table>
//             </div>

//             {filteredData.length === 0 && (
//               <p className="error">No data found</p>
//             )}

//             <div class="pagination">
//               <button
//                 onClick={() => handlePageChange("prev")}
//                 disabled={currentPage === 1}
//               >
//                 Prev
//               </button>
//               {pageNumbers.map((number) => (
//                 <button
//                   key={number}
//                   onClick={() => setCurrentPage(number)}
//                   disabled={currentPage === number}
//                 >
//                   {number}
//                 </button>
//               ))}
//               <button
//                 onClick={() => handlePageChange("next")}
//                 disabled={currentPage === Math.ceil(data.length / itemsPerPage)}
//               >
//                 Next
//               </button>
//             </div>
//           </div>

//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

import React, { useState } from "react";
import "../Css/Batch.css";
import Breadcrumfalt from "./Breadcrumfalt";
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
      <td>
        {selectedItem && selectedItem.srNo === item.srNo ? (
          <input
            type="text"
            value={inputData}
            onChange={(e) => setInputData(e.target.value)}
          />
        ) : (
          item.data
        )}
      </td>
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
        data: d.data,
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
      <Breadcrumfalt />

      <div class="card-header">
        <form onSubmit={handleSubmit}>
          <div className="title">
            <strong class="heding title ">Section Details</strong>
          </div>

          <hr></hr>

          <div class="section-div">
            <div className="section-div-left">
              <div class="text-box">
                <small>Section Name</small>
                <spam className="important">&nbsp;*</spam> :&nbsp;&nbsp;
                <input
                  type="text"
                  value={inputData}
                  onChange={(e) => setInputData(e.target.value)}
                />
                <hr className="line"></hr>
                <button class="buttion-1" type="submit">
                  Submit
                </button>
                <br />
                {error && <p className="submiterror">{error}</p>}
              </div>
            </div>
            <div class="v-line"></div>
            <div className="section-div-right">
              <small>Search</small>
              <br />
              <input
                type="text"
                className="search-box"
                value={searchInput}
                onChange={handleSearch}
                placeholder="Search..."
              />
              <br />
              <br />
              <div className="file">
                <button className="pdf">PDF</button>
                <button className="excel">Excel</button>
                <button className="csv">CSV </button>
              </div>
              <br /> <br />
              <div class="table-data">
                <table
                  class="sectiontable"
                  style={{
                    display: filteredData.length === 0 ? "none" : "block",
                  }}
                >
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
              {filteredData.length === 0 && (
                <p className="error">No data found</p>
              )}
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
                  disabled={
                    currentPage === Math.ceil(data.length / itemsPerPage)
                  }
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
