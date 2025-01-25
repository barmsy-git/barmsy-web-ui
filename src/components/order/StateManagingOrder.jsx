// import React, { useState } from "react";
// import Header from "../Layout/Header";
// import SubCategories from "../Route/Category/SubCategories";
// import Categories from "../Route/Category/Categories";
// import Order from "../order/Order";

// function App() {
//   const [openOrder, setOpenOrder] = useState(false);

//   return (
//     <div className="relative">
//       {/* Order Sidebar */}
//       {openOrder && <Order setOpenOrder={setOpenOrder} />}

//       {/* Main Content */}
//       <div
//         className={`transition-all duration-300 ${
//           openOrder ? "ml-[30%]" : "ml-0"
//         }`}
//       >
//         <Header openOrder={openOrder} setOpenOrder={setOpenOrder} />
//         <SubCategories openOrder={openOrder} />
//         <Categories openOrder={openOrder} />
//       </div>
//     </div>
//   );
// }

// export default App;
