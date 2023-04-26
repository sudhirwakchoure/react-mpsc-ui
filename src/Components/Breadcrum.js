import React, { useState } from "react";
import "../Css/Breadcrum.css";

export default function Breadcrum() {
    const [selected, setSelected] = useState(0);

    const handleSelect = (index) => {
      setSelected(index);
    };
    return (
      <div>
      <div className="breadcrumbs-container">
        <div
          className={`breadcrumb ${selected === 0 ? 'selected' : ''}`}
          onClick={() => handleSelect(0)}
        >
          Add Batch
        </div>
        <div
          className={`breadcrumb ${selected === 1 ? 'selected' : ''}`}
          onClick={() => handleSelect(1)}
        >
          Add Sections  
        </div>
        <div
          className={`breadcrumb ${selected === 2 ? 'selected' : ''}`}
          onClick={() => handleSelect(2)}
        >
           Add Category 
        </div>
        <div
          className={`breadcrumb ${selected === 3 ? 'selected' : ''}`}
          onClick={() => handleSelect(3)}
        >
           Add Course
        </div>

        <div
          className={`breadcrumb ${selected === 4 ? 'selected' : ''}`}
          onClick={() => handleSelect(4)}
        >
           Add Level
        </div>

        <div
          className={`breadcrumb ${selected === 5 ? 'selected' : ''}`}
          onClick={() => handleSelect(5)}
        >
           Add Conatent      
        </div>
        <div
          className={`breadcrumb ${selected === 6 ? 'selected' : ''}`}
          onClick={() => handleSelect(6)}
        >
           Allocate
        </div>
        </div>
        </div>
      
    );

}
