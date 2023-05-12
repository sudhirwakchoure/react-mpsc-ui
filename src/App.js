import React from 'react';
import Navbar from './Components/Navbar';
import{Routes, Route} from  'react-router-dom' 
import Dashboard from './Pages/Dashboard'
import Batch from './Pages/Batch'
import Category from './Pages/Category'
import Course from './Pages/Courses'
// import Level from './Pages/Level'

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
      <Route path='/Dashboard' element={<Dashboard/>}> </Route>
      <Route path='/Batch' element={<Batch/>}></Route>
      <Route path='/Section' element={<Batch/>}></Route>
      <Route path='/Category' element={<Category/>}></Route>
      <Route path='/Course' element={<Course/>}></Route>
      {/* <Route path='/Level' element={<Level/>}></Route> */}


      </Routes>
      </div>
  );
}

export default App;