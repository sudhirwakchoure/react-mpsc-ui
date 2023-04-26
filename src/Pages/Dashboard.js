import React from 'react'
import '../Css/Dashboard.css';
import Navbar from '../Components/Navbar';
import { FaList, FaSignal }from "react-icons/fa";

export default function Dashboard() {
  return (
    <div >
        <Navbar/>

        <div>
          
        <div className="container">
        <div className="card">
           <p><FaSignal/></p>
           <p>Level Count</p>
        </div>

        <div className="card">
           <p><FaSignal/></p>
           <p>Course Count</p>
        </div>

        <div className="card">
          <p><FaList/></p>
          <p>Question Count</p>
        </div>

        <div className="card">
          <p><FaSignal/></p>
          <p>Category Count</p>
        </div>

    </div>
  </div>

   <div class="container">
   <div class="card-body">
            <h4 class="mb-3">Daily Question Limit</h4>
            <form action="h/addlimit"  enctype="multipart/form-data" class="form-horizontal">
        		<div class="row">
        			<div class="col-md-4">
        				<label for="text-input" class=" form-control-label">Daily Question Limit<span class="red">*</span></label>
        			</div>
        			<div class="col-md-6">
        			<input type="text" id="text-input" name="limit" 
               class="form-control required formchild" placeholder="Enter Question Limit" 
               value="" validation-title="Enter Question Limit"/>
        			</div>
        			<div class="col-md-2">
        				<button class="btn btn-primary">Submit</button>
        			</div>
        		</div>
        	</form>
        </div>
   </div>
   </div>
      
      
  )
}   
