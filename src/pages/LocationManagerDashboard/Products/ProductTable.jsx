import React, { useState } from "react";


import edit from "../../../Assets/Edit.png"
import deleteButton from "../../../Assets/Delete.png"
import filter from "../../../Assets/Filter.png"
import print from "../../../Assets/Print.png"
import download from "../../../Assets/Download.png"
import paid from "../../../Assets/paid.png";
import notPaid from "../../../Assets/notPaid.png";

const ProductTable = ({ selectedTab, ordersData }) => {
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
                <td className="p-3 relative flex justify-start">
  {/* Status Button */}
  <button
    className={`px-3 py-1 text-[10px] font-semibold rounded-md flex items-center justify-between space-x-1 
      ${location.status ? "bg-[#9e7af2] text-white" : "bg-white border text-gray-600"} w-24`}
    onClick={() => setOpenDropdown(openDropdown === location.id ? null : location.id)}
  >
    <span>{location.status}</span>
    <span>⌵</span>
  </button>

  {/* Dropdown Menu */}
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

  {/* Paid / Not Paid Badge */}
  <span className={`flex items-center px-2 py-1 text-[10px] font-semibold rounded-full ml-2 
    ${location.paid ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"}
  `}>
   
       <img src={location.paid ? paid : notPaid} alt={location.paid ? "Paid" : "Not Paid"} className="w-3 h-3 mr-1" />
        {location.paid ? "Paid" : "Not Paid"}
  </span>
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

export default ProductTable;