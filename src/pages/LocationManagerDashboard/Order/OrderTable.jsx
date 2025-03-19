// // function OrderTable({ orders }) {
// //     console.log("Orders received:", orders);
// //     if (!orders || orders.length === 0) {
// //       return <p className="text-center text-gray-500">No orders found.</p>;
// //     }
  
// //     return (
// //       <div className="mt-40">
// //         <table className="w-full border-collapse">
// //           {/* Table Header */}
// //           <thead>
// //             <tr className="bg-gray-100 text-gray-700 text-sm font-bold">
// //               <th className="px-4 py-2 text-left">#</th>
// //               <th className="px-4 py-2 text-left">Table</th>
// //               <th className="px-4 py-2 text-left">Customer</th>
// //               <th className="px-4 py-2 text-left">Items</th>
// //               <th className="px-4 py-2 text-left">Price</th>
// //               <th className="px-4 py-2 text-left">Created</th>
// //               <th className="px-4 py-2 text-left">Delivered</th>
// //               <th className="px-4 py-2 text-left">Status</th>
// //               <th className="px-4 py-2 text-left">Actions</th>
// //             </tr>
// //           </thead>
  
// //           {/* Table Body */}
// //           <tbody>
// //             {orders.map((order, index) => (
// //               <tr key={order.id} className="border-b border-gray-200 bg-white hover:bg-gray-50 transition">
// //                 <td className="px-4 py-3">{index + 1}</td>
// //                 <td className="px-4 py-3 font-medium">{order.table}</td>
// //                 <td className="px-4 py-3">{order.customer}</td>
// //                 <td className="px-4 py-3">{order.items.join(", ")}</td>
// //                 <td className="px-4 py-3 font-semibold">₦{order.price}</td>
// //                 <td className="px-4 py-3 text-gray-500">{order.created}</td>
// //                 <td className="px-4 py-3 text-gray-500">{order.delivered}</td>
  
// //                 {/* Status Badge */}
// //                 <td className="px-4 py-3">
// //                   <span className={`px-3 py-1 text-xs font-semibold rounded-full 
// //                     ${order.status === "Processing" ? "bg-purple-100 text-purple-600" :
// //                     order.status === "Ready" ? "bg-red-100 text-red-600" :
// //                     order.status === "Scheduled" ? "bg-yellow-100 text-yellow-600" :
// //                     "bg-green-100 text-green-600"}
// //                   `}>
// //                     {order.status}
// //                   </span>
// //                 </td>
  
// //                 {/* Actions */}
// //                 <td className="px-4 py-3 flex items-center space-x-2">
// //                   <span className={`flex items-center px-2 py-1 text-xs font-semibold rounded-full 
// //                     ${order.paid ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"}
// //                   `}>
// //                     {order.paid ? "✅ Paid" : "❌ Not Paid"}
// //                   </span>
  
// //                   <button className="p-2 hover:bg-gray-100 rounded-full transition">
// //                     ✏️
// //                   </button>
  
// //                   <button className="p-2 hover:bg-gray-100 rounded-full transition">
// //                     🗑️
// //                   </button>
// //                 </td>
// //               </tr>
// //             ))}
// //           </tbody>
// //         </table>
// //       </div>
// //     );
// //   }
  
// //   export default OrderTable;
  

// import React, { useState } from 'react';

// function OrderTable() {
//   const [orders, setOrders] = useState([
//     {
//       id: 1,
//       table: "T1",
//       customer: "Sochima Onah",
//       items: ["Item 1", "Item 2", "Item 3"],
//       price: "2,000",
//       created: "12:05 AM",
//       delivered: "12:05 AM",
//       status: "Processing",
//       paid: true,
//     },
//     {
//       id: 2,
//       table: "T2",
//       customer: "John Doe",
//       items: ["Item A", "Item B"],
//       price: "3,500",
//       created: "12:10 AM",
//       delivered: "12:20 AM",
//       status: "Ready",
//       paid: false,
//     },
//   ]);

//   const statusColors = {
//     Processing: "bg-purple-100 text-purple-600",
//     Scheduled: "bg-yellow-100 text-yellow-600",
//     Preparing: "bg-blue-100 text-blue-600",
//     Ready: "bg-red-100 text-red-600",
//   };

//   const [openDropdown, setOpenDropdown] = useState(null);

//   const handleStatusChange = (id, newStatus) => {
//     setOrders((prevOrders) =>
//       prevOrders.map((order) =>
//         order.id === id ? { ...order, status: newStatus } : order
//       )
//     );
//     setOpenDropdown(null); // Close dropdown after selecting
//   };

//   return (
//     <div className="mt-40">
//       <table className="w-full border-collapse relative">
//         <thead>
//           <tr className="bg-gray-100 text-gray-700 text-sm font-bold">
//             <th className="px-4 py-2 text-left">#</th>
//             <th className="px-4 py-2 text-left">Table</th>
//             <th className="px-4 py-2 text-left">Customer</th>
//             <th className="px-4 py-2 text-left">Items</th>
//             <th className="px-4 py-2 text-left">Price</th>
//             <th className="px-4 py-2 text-left">Created</th>
//             <th className="px-4 py-2 text-left">Delivered</th>
//             <th className="px-4 py-2 text-left">Status</th>
//             <th className="px-4 py-2 text-left">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {orders.map((order, index) => (
//             <tr key={order.id} className="border-b border-gray-200 bg-white hover:bg-gray-50 transition relative">
//               <td className="px-4 py-3">{index + 1}</td>
//               <td className="px-4 py-3 font-medium">{order.table}</td>
//               <td className="px-4 py-3">{order.customer}</td>
//               <td className="px-4 py-3">{order.items.join(", ")}</td>
//               <td className="px-4 py-3 font-semibold">₦{order.price}</td>
//               <td className="px-4 py-3 text-gray-500">{order.created}</td>
//               <td className="px-4 py-3 text-gray-500">{order.delivered}</td>

//               {/* Status Badge with Dropdown */}
//               <td className="px-4 py-3 relative">
//                 <button
//                   className={`px-3 py-1 text-xs font-semibold rounded-full ${statusColors[order.status]}`}
//                   onClick={() => setOpenDropdown(openDropdown === order.id ? null : order.id)}
//                 >
//                   {order.status} ⌵
//                 </button>
                
//                 {openDropdown === order.id && (
//                   <div className="absolute left-0 top-full mt-1 w-36 bg-white border border-gray-300 shadow-lg rounded-lg z-50">
//                     {["Processing", "Scheduled", "Preparing", "Ready"].map((status) => (
//                       <button
//                         key={status}
//                         className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${statusColors[status]}`}
//                         onClick={() => handleStatusChange(order.id, status)}
//                       >
//                         {status}
//                       </button>
//                     ))}
//                   </div>
//                 )}
//               </td>

//               {/* Actions */}
//               <td className="px-4 py-3 flex items-center space-x-2">
                // <span className={`flex items-center px-2 py-1 text-xs font-semibold rounded-full 
                //   ${order.paid ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"}
                // `}>
                //   {order.paid ? "✅ Paid" : "❌ Not Paid"}
                // </span>

//                 <button className="p-2 hover:bg-gray-100 rounded-full transition">✏️</button>
//                 <button className="p-2 hover:bg-gray-100 rounded-full transition">🗑️</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default OrderTable;


import React, { useState } from "react";


import edit from "../../../Assets/Edit.png"
import deleteButton from "../../../Assets/Delete.png"
import filter from "../../../Assets/Filter.png"
import print from "../../../Assets/Print.png"
import download from "../../../Assets/Download.png"

const OrderTable = ({ selectedTab, ordersData }) => {
    const filteredOrders =
      selectedTab === "All"
        ? ordersData
        : ordersData.filter((order) => order.status === selectedTab);
     const [currentPage, setCurrentPage] = useState(1);
      const [showModal, setShowModal] = useState(false);
      const [selectedRows, setSelectedRows] = useState(new Set()); // Track selected checkboxes
    
      const locationsPerPage = 12;
      const [locations, setLocations] = useState(
        Array.from({ length: 1253 }, (_, i) => ({
          id: i + 1,
          table: "T1",
          customer: "Sochima Onah",
          items: ["Item 1", "Item 2", "Item 3"],
          price: "2,000",
          created: "12:05 AM",
          delivered: "12:05 AM",
          status: "Processing",
          paid: true
        }))
      );
      
    
      const indexOfLastLocation = currentPage * locationsPerPage;
      const indexOfFirstLocation = indexOfLastLocation - locationsPerPage;
      const currentLocations = locations.slice(indexOfFirstLocation, indexOfLastLocation);
    
      const nextPage = () => {
        if (indexOfLastLocation < locations.length) setCurrentPage(currentPage + 1);
      };
    
      const prevPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
      };
    
      // Handle checkbox selection
      const toggleRowSelection = (id) => {
        const updatedSelection = new Set(selectedRows);
        if (updatedSelection.has(id)) {
          updatedSelection.delete(id);
        } else {
          updatedSelection.add(id);
        }
        setSelectedRows(updatedSelection);
      };
    
      // Handle "Select All" checkbox
      const toggleSelectAll = () => {
        if (selectedRows.size === currentLocations.length) {
          setSelectedRows(new Set());
        } else {
          setSelectedRows(new Set(currentLocations.map((loc) => loc.id)));
        }
      };

//       const [orders, setOrders] = useState([
//     {
//       id: i + 1,
//       table: "T1",
//       customer: "Sochima Onah",
//       items: ["Item 1", "Item 2", "Item 3"],
//       price: "2,000",
//       created: "12:05 AM",
//       delivered: "12:05 AM",
//       status: "Processing",
//       paid: true,
//     },
//     {
//       id: 2,
//       table: "T2",
//       customer: "John Doe",
//       items: ["Item A", "Item B"],
//       price: "3,500",
//       created: "12:10 AM",
//       delivered: "12:20 AM",
//       status: "Ready",
//       paid: false,
//     },
//   ]);

const statusColors = {
    Processing: "bg-white text-red-500",
    Scheduled: "bg-white text-[#FFAE4C]",
    Preparing: "bg-white text-[#CEF00C]",
    Ready: "bg-white text-black",
  };        

  const [openDropdown, setOpenDropdown] = useState(null);

  const handleStatusChange = (id, newStatus) => {
    setLocations((prevLocations) =>
      prevLocations.map((location) =>
        location.id === id ? { ...location, status: newStatus } : location
      )
    );
    setOpenDropdown(null); // Close dropdown after selecting
  };
  
  

  return (
    <div className="">
         {/* Selection Bar (Appears Above Table Headers) */}
           <div className="bg-white shadow-md rounded-lg mt-4 w-full">
           {selectedRows.size > 0 && (
             <div className="w-full  text-orange-500 px-4 py-2 rounded-t-lg flex justify-between items-center shadow-md z-50 mt-6">
               {/* Left Side: Selection Count & Cancel */}
               <div className="flex space-x-6 p-6 ">
                 <span className="font-medium text-xs">{selectedRows.size} Selected</span>
                 <button onClick={() => setSelectedRows(new Set())} className="text-orange-500 font-medium text-xs">
                   Cancel
                 </button>
               </div>
     
               {/* Right Side: Edit & Delete Icons */}
               <div className="flex space-x-3  p-6">
               <button>
                 <img src={deleteButton} className="h-4 w-4" alt="" />
                 </button>
                 <button >
                 <img src={filter} className="h-4 w-4" alt="" />
                 </button>
                 <button >
                 <img src={print} className="h-5 w-5" alt="" />
                 </button>
                 <button >
                 <img src={download} className="h-4 w-4" alt="" />
                 </button>
               
               </div>
             </div>
           )}
     
           {/* Table Container */}
         
          
             <table className="w-full text-xs text-left text-gray-600">
             <thead className="bg-gray-50 border-b">
       <tr>
         <th className="p-3 text-center">#</th>
     
         {/* Updated "Select All" Checkbox Column */}
         <th className="p-3 text-center">
           <label className="cursor-pointer flex items-center justify-center">
             <input
               type="checkbox"
               className="peer hidden"
               onChange={toggleSelectAll}
               checked={selectedRows.size === currentLocations.length}
             />
             <div className="w-3 h-3 border border-gray-400  flex items-center justify-center peer-checked:bg-orange-500 peer-checked:border-orange-500">
               {selectedRows.size === currentLocations.length && (
                 <svg
                   className="w-3 h-3 text-white"
                   viewBox="0 0 24 24"
                   fill="none"
                   stroke="currentColor"
                   strokeWidth="3"
                   strokeLinecap="round"
                   strokeLinejoin="round"
                 >
                   <polyline points="20 6 9 17 4 12" />
                 </svg>
               )}
             </div>
           </label>
         </th>
     
         <th className="p-3 text-left">Table</th>
            <th className="p-3 text-left">Customer</th>
            <th className="p-3 text-left">Items</th>
            <th className="p-3 text-left">Price</th>
            <th className="p-3 text-left">Created</th>
            <th className="p-3 text-left">Delivered</th>
            <th className="p-3 text-left">Status</th>
            <th className="p-3 text-left">Actions</th>
       </tr>
     </thead>
     
     
     
               
               
               <tbody>
       {currentLocations.map((location) => (
         <tr key={location.id} className="border-b hover:bg-gray-50">
           <td className="p-3 text-center">{location.id}</td>
     
          
           <td className="p-3 text-center">
             <label className="cursor-pointer flex items-center justify-center">
               <input
                 type="checkbox"
                 className="peer hidden"
                 checked={selectedRows.has(location.id)}
                 onChange={() => toggleRowSelection(location.id)}
               />
               <div className="w-3 h-3 border border-gray-400  flex items-center justify-center peer-checked:bg-orange-500 peer-checked:border-orange-500">
                 {selectedRows.has(location.id) && (
                   <svg
                     className="w-3 h-3 text-white"
                     viewBox="0 0 24 24"
                     fill="none"
                     stroke="currentColor"
                     strokeWidth="3"
                     strokeLinecap="round"
                     strokeLinejoin="round"
                   >
                     <polyline points="20 6 9 17 4 12" />
                   </svg>
                 )}
               </div>
             </label>
           </td>
     
         
            <td className="p-3 text-[10px] font-semibold">{location.table}</td>
                <td className="p-3 text-[10px] font-semibold">{location.customer}</td>
                <td className="p-3 text-[10px] font-semibold">{location.items}</td>
                <td className="p-3 text-[10px] font-semibold">{location.price}</td>
                <td className="p-3 text-[10px] font-semibold">{location.created}</td>
                <td className="p-3 text-[10px] font-semibold">{location.delivered}</td>
                {/* <td className="p-3 text-[10px] font-semibold">{location.status}</td> */}
                {/* Status Badge with Dropdown */}
             <td className="p-3 relative">
             <button
  className={`px-3 py-1 text-[10px] font-semibold rounded-md flex items-center justify-between space-x-1 ${statusColors[location.status]} w-24`}
  onClick={() => setOpenDropdown(openDropdown === location.id ? null : location.id)}
>
  <span>{location.status}</span>
  <span>⌵</span>
</button>

                
                {openDropdown === location.id && (
                  <div className="absolute -left-2 top-10 w-28 bg-white shadow-lg rounded-sm z-50">
                    {["Processing", "Scheduled", "Preparing", "Ready"].map((status) => (
                      <button
                        key={status}
                        className={`block w-full text-left px-4 py-2 text-[10px] hover:bg-[#FFAE4C26] ${statusColors[status]}`}
                        onClick={() => handleStatusChange(location.id, status)}
                      >
                        {status}
                      </button>
                      
                      
                    ))}
                  </div>
                )}
              </td>
                {/* <td className="p-3 text-[10px] font-semibold">{location.paid}</td> */}
    
     
           {/* Actions Column  */}
           <td className="p-3 text-[10px] font-semibold items-end">
             <div className="flex justify-center space-x-3">
               <button>
                 <img src={edit} className="h-4 w-4" alt="" />
               </button>
               <button>
                 <img src={deleteButton} className="h-4 w-4" alt="" />
               </button>
             </div>
           </td>
         </tr>
       ))}
     </tbody>
     
     
     
             </table>
     
     
           </div>
     
           {/* Pagination */}
           <div className="flex justify-between items-center mt-4 w-full">
             <span className="text-[10px] text-gray-600">
               Showing {indexOfFirstLocation + 1}-{indexOfLastLocation} of {locations.length}
             </span>
             <div className="flex space-x-2 text-sm border-">
               <button onClick={prevPage} disabled={currentPage === 1} className={`px-3 py-1 rounded-md ${currentPage === 1 ? "bg-gray-50 cursor-not-allowed" : "bg-gray-200 text-black"}`}>
                 &lt;
               </button>
               <button onClick={nextPage} disabled={indexOfLastLocation >= locations.length} className={`px-3 py-1 rounded-md ${indexOfLastLocation >= locations.length ? "bg-gray-50 cursor-not-allowed" : "bg-gray-200 text-black"}`}>
                 &gt;
               </button>
             </div>
           </div>
    </div>
  );
}

export default OrderTable;
