// import React from 'react'
// import"../Css/breadcrumfalt.css"
// export default function Breadcrumfalt() {


//   return (
//     <><div class="breadcrumb flat">
//           <a href="#" class="active">
//             Browse</a>
//           <a href="#">Compare</a>
//           <a href="#">Order Confirmation</a>
//           <a href="#">Checkout</a>
//       </div><script src="http://thecodeplayer.com/uploads/js/prefixfree-1.0.7.js" type="text/javascript"></script></>

//   )
// }


import React, { useState } from 'react';
import '../Css/breadcrumfalt.css';

export default function Breadcrumfalt() {
const [activeLink, setActiveLink] = useState('Add Batch');

const handleLinkClick = (link) => {
setActiveLink(link);
};

return (
<>
<div className="breadcrumb flat">
<a
href="#"
className={activeLink === 'Add Section' ? 'active' : ''}
onClick={() => handleLinkClick('Add Section')}
>
Add Section
</a>
<a
href="#"
className={activeLink === 'Add Category' ? 'active' : ''}
onClick={() => handleLinkClick('Add Category')}
>
Add Category
</a>
<a
href="#"
className={activeLink === 'Add Course' ? 'active' : ''}
onClick={() => handleLinkClick('Add Course')}
>
Add Course</a>
<a
href="#"
className={activeLink === 'Add level' ? 'active' : ''}
onClick={() => handleLinkClick('Add level')}
>
Add Level</a>
</div>

<script
     src="http://thecodeplayer.com/uploads/js/prefixfree-1.0.7.js"
     type="text/javascript"
   ></script>
</>
);
}



