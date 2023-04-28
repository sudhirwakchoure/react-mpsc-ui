import React from 'react';
import { Link } from 'react-router-dom';
import '../Css/Navbar.css';
import {
    FaTh,
    FaBell,
    FaUser,
    FaQuestionCircle,
    FaTasks,
    FaLightbulb,
    FaAnchor,
    FaGraduationCap,
    FaRupeeSign,
    FaPlus,
    FaQuoteLeft,
    FaQuestion,
    FaComment,
    FaTicketAlt,
    FaCaretDown,
}from "react-icons/fa";
function Navbar() {
   
        return (
            <nav className="navbar">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/Dashboard" className="nav-link">
                <FaTh/>&nbsp;&nbsp;Dashboard
                </Link>
              </li>

                
              <li className="nav-item">
                <a href="/src/Pages/Batch.js" className="nav-link">
                  <FaAnchor/>&nbsp;&nbsp;Batch&nbsp;&nbsp;<FaCaretDown/> 
                </a>
                <ul className="sublist">
                  <li className="sublist-item">
                   <a>
                    
                    <Link to="/service1" className="sublist-link">
                    &#x2666;&nbsp;&nbsp;Sections
                    </Link>

                    </a>   
                  </li>
                  <li className="sublist-item">
                    <Link to="/catagory" className="sublist-link">
                    &#x2666;&nbsp;&nbsp;Categories
                    </Link>
                  </li>
                  <li className="sublist-item">
                    <Link to="/service3" className="sublist-link">
                    &#x2666;&nbsp;&nbsp;Courses
                    </Link>
                  </li>
                  <li className="sublist-item">
                    <Link to="/service3" className="sublist-link">
                    &#x2666;&nbsp;&nbsp;Levels
                    </Link>
                  </li>

                </ul>
              </li>

              <li className="nav-item">
                <a href="#" className="nav-link">
                <FaLightbulb/>&nbsp;&nbsp;Containt Manegment&nbsp;&nbsp;<FaCaretDown/>
                </a>
                <ul className="sublist">
                  <li className="sublist-item">
                    <Link to="/service1" className="sublist-link">
                    &#x2666;&nbsp;&nbsp;View Content
                    </Link>
                  </li>
                  <li className="sublist-item">
                    <Link to="/service2" className="sublist-link">
                    &#x2666;&nbsp;&nbsp;Add Conatent
                    </Link>
                  </li>
                </ul>
              </li>


              <li className="nav-item">
                <a href="#" className="nav-link">
                 <FaQuestionCircle/>&nbsp;&nbsp;Question&nbsp;&nbsp;<FaCaretDown/>
                </a>
                <ul className="sublist">
                  <li className="sublist-item">
                    <Link to="/service1" className="sublist-link">
                    &#x2666;&nbsp;&nbsp;Dispaly Question
                    </Link>
                  </li>
                  <li className="sublist-item">
                    <Link to="/service2" className="sublist-link">
                    &#x2666;&nbsp;&nbsp;Questions Bulk Upload 
                    </Link>
                  </li>
                  <li className="sublist-item">
                    <Link to="/service3" className="sublist-link">
                    &#x2666;&nbsp;&nbsp;Questions Categories
                    </Link>
                  </li>
                </ul>
              </li>


              

              <li className="nav-item">
                <a href="#" className="nav-link">
                 <FaTasks/>&nbsp;&nbsp;Test Series&nbsp;&nbsp;<FaCaretDown/>
                </a>
                <ul className="sublist">
                  <li className="sublist-item">
                    <Link to="/service1" className="sublist-link">
                    &#x2666;&nbsp;&nbsp;Dispaly Exams
                    </Link>
                  </li>
                  <li className="sublist-item">
                    <Link to="/service2" className="sublist-link">
                    &#x2666;&nbsp;&nbsp;Allowcate Exams 
                    </Link>
                  </li>
                  <li className="sublist-item">
                    <Link to="/service3" className="sublist-link">
                    &#x2666;&nbsp;&nbsp;Add Exam 
                    </Link>
                  </li>
                  <li className="sublist-item">
                    <Link to="/service3" className="sublist-link">
                    &#x2666;&nbsp;&nbsp;View Allowcated Exam 
                    </Link>
                  </li>
                </ul>
              </li>


              <li className="nav-item">
                <a href="#" className="nav-link">
                 <FaBell/>&nbsp;&nbsp;Suscriptions&nbsp;&nbsp;<FaCaretDown/>
                </a>
                <ul className="sublist">
                  <li className="sublist-item">
                    <Link to="/service1" className="sublist-link">
                    &#x2666;&nbsp;&nbsp;Add Suscriptions
                    </Link>
                  </li>
                  <li className="sublist-item">
                    <Link to="/service2" className="sublist-link">
                    &#x2666;&nbsp;&nbsp;View Suscriptions 
                    </Link>
                  </li>
                </ul>
              </li>



              <li className="nav-item">
                <a href="#" className="nav-link">
                 <FaUser/>&nbsp;&nbsp;User&nbsp;&nbsp;<FaCaretDown/>
                </a>
                <ul className="sublist">
                  <li className="sublist-item">
                    <Link to="/service1" className="sublist-link">
                    &#x2666;&nbsp;&nbsp;Dispaly User
                    </Link>
                  </li>
                  <li className="sublist-item">
                    <Link to="/service2" className="sublist-link">
                    &#x2666;&nbsp;&nbsp;User Results 
                    </Link>
                  </li>
                </ul>
              </li>




              <li className="nav-item">
                <a href="#" className="nav-link">
                 <FaGraduationCap/>&nbsp;&nbsp;Capsule Batch&nbsp;&nbsp;<FaCaretDown/>
                </a>
                <ul className="sublist">
                  <li className="sublist-item">
                    <Link to="/service1" className="sublist-link">
                    &#x2666;&nbsp;&nbsp;Add Details
                    </Link>
                  </li>
                  <li className="sublist-item">
                    <Link to="/service2" className="sublist-link">
                    &#x2666;&nbsp;&nbsp;Show Details 
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <a href="#" className="nav-link">
                 <FaRupeeSign/>&nbsp;&nbsp;Refer & Earn
                </a>
              </li>

              <li className="nav-item">
                <a href="#" className="nav-link">
                 <FaPlus/>&nbsp;&nbsp;Whats New
                </a>
              </li>



              <li className="nav-item">
                <a href="#" className="nav-link">
                 <FaQuoteLeft/>&nbsp;&nbsp;Quotes&nbsp;&nbsp;<FaCaretDown/>
                </a>
                <ul className="sublist">
                  <li className="sublist-item">
                    <Link to="/service1" className="sublist-link">
                    &#x2666;&nbsp;&nbsp;Dispaly Quotes
                    </Link>
                  </li>
                  <li className="sublist-item">
                    <Link to="/service2" className="sublist-link">
                    &#x2666;&nbsp;&nbsp;Upload Quotes 
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <a href="#" className="nav-link">
                 <FaQuestion/>&nbsp;&nbsp;Frequently Asked ?&nbsp;&nbsp;<FaCaretDown/> 
                </a>
                <ul className="sublist">
                  <li className="sublist-item">
                    <Link to="/service1" className="sublist-link">
                    &#x2666;&nbsp;&nbsp;Dispaly FAQ
                    </Link>
                  </li>
                  <li className="sublist-item">
                    <Link to="/service2" className="sublist-link">
                    &#x2666;&nbsp;&nbsp;Upload FAQ 
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <a href="#" className="nav-link">
                 <FaUser/>&nbsp;&nbsp;Employee Manegment
                </a>
              </li>

              <li className="nav-item">
                <a href="#" className="nav-link">
                 <FaComment/>&nbsp;&nbsp;User Feedback
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                 <FaUser/>&nbsp;&nbsp;Access Setting
                </a>
              </li>

              <li className="nav-item">
                <a href="#" className="nav-link">
                 <FaTicketAlt/>&nbsp;&nbsp;Tikit Manegment&nbsp;&nbsp;<FaCaretDown/>
                </a>
                <ul className="sublist">
                  <li className="sublist-item">
                    <Link to="/service1" className="sublist-link">
                    &#x2666;&nbsp;&nbsp;Open Ticket
                    </Link>
                  </li>
                  <li className="sublist-item">
                    <Link to="/service2" className="sublist-link">
                    &#x2666;&nbsp;&nbsp;Close Ticket 
                    </Link>
                  </li>
                </ul>
              </li>


             
              <li className="nav-item">
                <a href="#" className="nav-link">
                 <FaTasks/>&nbsp;&nbsp;Special & Regular Batch&nbsp;<FaCaretDown/>
                </a>
                <ul className="sublist">
                  <li className="sublist-item">
                    <Link to="/service1" className="sublist-link">
                    &#x2666;&nbsp;&nbsp;View Allocated Batches
                    </Link>
                  </li>
                  <li className="sublist-item">
                    <Link to="/service2" className="sublist-link">
                    &#x2666;&nbsp;&nbsp;View Allocated Batches
                    </Link>
                  </li>
                  <li className="sublist-item">
                    <Link to="/service2" className="sublist-link">
                    &#x2666;&nbsp;&nbsp;Add/View Batches
                    </Link>
                  </li>
                </ul>
              </li>

            </ul>
          </nav>
              );
    }

export default Navbar;
