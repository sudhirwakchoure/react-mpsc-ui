import React from 'react';
import Category from './Pages/Category';
import Navbar from './Components/Navbar';
// import Breadcrum from './Components/Breadcrum';
function App() {
  return (
    <div>
      <Navbar/>
      <Category/>
      </div>
  );
}

export default App;

// import { BrowserRouter as Router, Route } from "react-router-dom";
// import Navbar from "./Components/Navbar";
// import Category from "./Pages/Category";

// function App() {
//   return (
//       <Router>
//         <div>
//           <Navbar/>
//           <Route path="/category" component={Category} />
//         </div>
//       </Router>
//   );
// }

// export default App;
