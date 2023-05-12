import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";
import jsPDF from "jspdf";
import "jspdf-autotable";
import"../Css/Course.css";
import Breadcrumfalt from "./Breadcrumfalt";

export default function Category() {
  const [data, setData] = useState([]);
  const [inputData, setInputData] = useState("");
  const [inputCategory, setInputCategory] = useState("");
  const [inputCourse, setInputCourse] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [error, setError] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);
  const [isEditing, setIsEditing] = useState(false);



  // Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputData.trim() === "" || inputCategory.trim() === ""|| inputCourse.trim() === "") {
      setError("Please enter a valid input");
      return;
    }
    if (isEditing) {
      const newData = data.map((d) =>
        d.srNo === selectedItem.srNo
          ? { srNo: d.srNo, 
            data: inputData,
             category: inputCategory,
             course:inputCourse
             }
          : d
      );
      setData(newData);
      setSelectedItem(null);
      setIsEditing(false);
    } else {
      setData([
        ...data,
        { srNo: data.length + 1,
           data: inputData,
            category: inputCategory,
            course:inputCourse

           },
      ]);
    }
    setInputData("");
    setInputCategory("");
    setInputCourse("");
    setError("");
  };

    // Handle search
    const handleSearch = (e) => {
      setSearchInput(e.target.value);
    };
  

  // Filter data based on search input
  const filteredData = data.filter(
    (item) =>
      item.data.toLowerCase().includes(searchInput.toLowerCase()) ||
      item.category.toLowerCase().includes(searchInput.toLowerCase()) ||
      item.course.toLowerCase().includes(searchInput.toLowerCase())

  );

  const handlePageChange = (type) => {
    setSelectedItem(null);
    setIsEditing(false);
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

  const tableRows = currentItems.map((item) => (
    <tr key={item.srNo}>
      <td>{item.srNo}</td>
      <td>
        {selectedItem && selectedItem.srNo === item.srNo ? (
          <inputData value={inputData} 
          onChange={(e) => setInputData(e.target.value)}
          />
        ) : (
          item.data
        )}
      </td>
      <td>
        {selectedItem && selectedItem.srNo === item.srNo ? (
          <inputCategory
            value={inputCategory}
            onChange={(e) => setInputCategory(e.target.value)}
          />
        ) : (
          item.category
        )}
      </td>
      <td>
        {selectedItem && selectedItem.srNo === item.srNo ? (
          <inputCourse
            value={inputCourse}
            onChange={(e) => setInputCourse(e.target.value)}
          />
        ) : (
          item.course
        )}
      </td>

      <td>
        <button className="buttion" onClick={() => handleEdit(item)}>
          <FaEdit />
        </button>
        <button className="buttion1" onClick={() => handleDelete(item)}>
          <FaTrash />
        </button>
      </td>
    </tr>
  ));

  const handleEdit = (item) => {
    setIsEditing(true);
    setSelectedItem(item);
    setInputData(item.data);
    setInputCategory(item.category);
    setInputCourse(item.course);

  };

  const handleDelete = (item) => {
    const newData = data.filter((d) => d.srNo !== item.srNo);
    setData(
      newData.map((d, index) => ({
        srNo: index + 1,
        data: d.data,
        category: d.category,
        course:d.course
      }))
    );
  };
  // Create page numbers for pagination
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  // pdf
  const pdf = () => {
    const doc = new jsPDF();
    const formattedData = data.map((item) => [item.srNo, item.data,item.category,item.course]);
    doc.autoTable({
      head: [["Sr No.", "Data", "Category","Course"]],
      body: formattedData,
    });
    doc.save("batch_data.pdf");
  };

  // Handle download as Excel
  const excel = () => {
    const fileType =
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
    const fileExtension = ".xlsx";
    const fileName = "batch_data";
    const formattedData = data.map((item) => [item.srNo, item.data,item.category,item.course]);
    const ws = XLSX.utils.aoa_to_sheet([
      ["Sr No.", "Data", "Category","Course"],
      ...formattedData,
    ]);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Batch Data");
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const blob = new Blob([excelBuffer], { type: fileType });
    FileSaver.saveAs(blob, fileName + fileExtension);
  };

  // Handle download as CSV
  const csv = () => {
    const fileType = "text/csv;charset=UTF-8";
    const fileExtension = ".csv";
    const fileName = "batch_data";
    const formattedData = data.map((item) => [item.srNo, item.data,item.category,item.course]);
    const csvData = [
      ["Sr No.", "Data", "Category","Course"],
      ...formattedData.map((item) => item.join(",")),
    ].join("\n");
    const blob = new Blob([csvData], { type: fileType });
    FileSaver.saveAs(blob, fileName + fileExtension);
  };

  return (
    <div>
      <Breadcrumfalt/>
      <div class="card-header-category">
        <div className="category-title">
          <strong class="heding title ">Courses Details</strong>
        </div>
        <hr></hr>

        <div className="category-section-div">
          <div class="category-section-div-left">
            <small>Section Name</small>
            <spam className="important">&nbsp;*</spam> :&nbsp;&nbsp;
            <input
              className="textbox1"
              placeholder="----Section Name----"
              type="text"
              value={inputData}
              onChange={(e) => setInputData(e.target.value)}
            />
            <br />
            <small>Category Name</small>
            <spam className="important">&nbsp;*</spam> :&nbsp;&nbsp;
            <input
              className="textbox2"
              placeholder="----Category Name----"
              type="text"
              value={inputCategory}
              onChange={(e) => setInputCategory(e.target.value)}
            />
            <br />
            <small>Course Name</small>
            <spam className="important">&nbsp;*</spam> :&nbsp;&nbsp;
            <input
              className="textbox3"
              placeholder="Course Name..."
              type="text"
              value={inputCourse}
              onChange={(e) => setInputCourse(e.target.value)}
            />

            <hr className="line"></hr>
            {/* <button class="buttion-1" type="submit">
                Submit
              </button> */}
            <button class="buttion-1" onClick={handleSubmit} type="submit">
              {isEditing ? "Update" : "Submit"}
            </button>
            <br />
            {error && <p className="submiterror">{error}</p>}
          </div>
          <div class="v-line"></div>
          <div class="category-section-div-right">
            <small>Search:</small>
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
              <button onClick={pdf} className="pdf">
                PDF
              </button>
              <button onClick={excel} className="excel">
                Excel
              </button>
              <button onClick={csv} className="csv">
                CSV{" "}
              </button>
            </div>
            <br /> <br />
            <div class="table-data">
              <table
                class="Categorytable"
                style={{
                  display: filteredData.length === 0 ? "none" : "block",
                }}
              >
                <thead>
                  <tr>
                    <th>SrNo</th>
                    <th>Data</th>
                    <th>Category</th>
                    <th>Course</th>
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
                disabled={currentPage === Math.ceil(data.length / itemsPerPage)}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
