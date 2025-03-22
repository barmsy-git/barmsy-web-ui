// import React, { useState } from "react";
// import { MoreHorizontal, MoreVertical } from "lucide-react"; // Ensure this is imported

// import edit from "../../../Assets/Edit.png";
// import deleteButton from "../../../Assets/Delete.png";
// import filter from "../../../Assets/Filter.png";
// import print from "../../../Assets/Print.png";
// import download from "../../../Assets/Download.png";
// import img from "../../../Assets/myImage.jpg"; 

// const ProductGrid = () => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const [selectedRows, setSelectedRows] = useState(new Set());
//   const locationsPerPage = 12;

//   const [locations, setLocations] = useState(
//     Array.from({ length: 50 }, (_, i) => ({
//       id: i + 1,
//       image: img,
//       name: `Product ${i + 1}`,
//       category: "Pasta",
//       subCategory: "Pasta",
//       price: "₦2,000",
//       created: "12:05 AM",
//       status: true,
//     }))
//   );

//   const indexOfLastLocation = currentPage * locationsPerPage;
//   const indexOfFirstLocation = indexOfLastLocation - locationsPerPage;
//   const currentLocations = locations.slice(indexOfFirstLocation, indexOfLastLocation);

//   const nextPage = () => {
//     if (indexOfLastLocation < locations.length) setCurrentPage(currentPage + 1);
//   };

//   const prevPage = () => {
//     if (currentPage > 1) setCurrentPage(currentPage - 1);
//   };

//   // Handle checkbox selection
//   const toggleRowSelection = (id) => {
//     const updatedSelection = new Set(selectedRows);
//     if (updatedSelection.has(id)) {
//       updatedSelection.delete(id);
//     } else {
//       updatedSelection.add(id);
//     }
//     setSelectedRows(updatedSelection);
//   };

//   // Toggle Status Function
//   const toggleStatus = (id) => {
//     setLocations((prevLocations) =>
//       prevLocations.map((location) =>
//         location.id === id ? { ...location, status: !location.status } : location
//       )
//     );
//   };

//   return (
//     <div className="">
//       {/* Selection Bar */}
//       {selectedRows.size > 0 && (
//         <div className="w-full text-orange-500 px-4 py-2 rounded-t-lg flex justify-between items-center shadow-md z-50 mt-6">
//           {/* Left: Selection Count & Cancel */}
//           <div className="flex space-x-6 p-6">
//             <span className="font-medium text-xs">{selectedRows.size} Selected</span>
//             <button onClick={() => setSelectedRows(new Set())} className="text-orange-500 font-medium text-xs">
//               Cancel
//             </button>
//           </div>

//           {/* Right: Edit & Delete Icons */}
//           <div className="flex space-x-3 p-6">
//             <button>
//               <img src={deleteButton} className="h-4 w-4" alt="Delete" />
//             </button>
//             <button>
//               <img src={filter} className="h-4 w-4" alt="Filter" />
//             </button>
//             <button>
//               <img src={print} className="h-5 w-5" alt="Print" />
//             </button>
//             <button>
//               <img src={download} className="h-4 w-4" alt="Download" />
//             </button>
//           </div>
//         </div>
//       )}

//       {/* Table Container */}
//       <div className="mt-3">
//         {currentLocations.map((location) => (
//           <div
//             key={location.id}
//             className="flex items-center justify-between bg-white shadow-sm rounded-lg p-4 mb-3"
//           >
//             {/* Left: Image */}
//             <div className="flex items-center space-x-4">
//               <img src={location.image} alt={location.name} className="w-16 h-16 rounded-lg object-cover" />
//               <div>
//                 <h3 className="font-semibold text-lg">
//                   #{location.id} {location.name}
//                 </h3>
//                 <p className="text-gray-500 text-sm">
//                   Created: {location.created} • <span className="font-semibold">{location.price}</span>
//                 </p>
//                 <p className="text-gray-400 text-sm">
//                   Category - {location.category} • Sub - <span className="font-semibold">{location.subCategory}</span>
//                 </p>
//               </div>
//                {/* Updated "Select All" Checkbox Column */}
//          <th className="p-3 text-center">
//            <label className="cursor-pointer flex items-center justify-center">
//              <input
//                type="checkbox"
//                className="peer hidden"
//                onChange={toggleSelectAll}
//                checked={selectedRows.size === currentLocations.length}
//              />
//              <div className="w-3 h-3 border border-gray-400  flex items-center justify-center peer-checked:bg-orange-500 peer-checked:border-orange-500">
//                {selectedRows.size === currentLocations.length && (
//                  <svg
//                    className="w-3 h-3 text-white"
//                    viewBox="0 0 24 24"
//                    fill="none"
//                    stroke="currentColor"
//                    strokeWidth="3"
//                    strokeLinecap="round"
//                    strokeLinejoin="round"
//                  >
//                    <polyline points="20 6 9 17 4 12" />
//                  </svg>
//                )}
//              </div>
//            </label>
//          </th>
//                     <tbody>
//                 {currentLocations.map((location) => (
//                   <tr key={location.id} className="border-b hover:bg-gray-50">
//                     <td className="p-3 text-center">{location.id}</td>
              
                   
//                     <td className="p-3 text-center">
//                       <label className="cursor-pointer flex items-center justify-center">
//                         <input
//                           type="checkbox"
//                           className="peer hidden"
//                           checked={selectedRows.has(location.id)}
//                           onChange={() => toggleRowSelection(location.id)}
//                         />
//                         <div className="w-3 h-3 border border-gray-400  flex items-center justify-center peer-checked:bg-orange-500 peer-checked:border-orange-500">
//                           {selectedRows.has(location.id) && (
//                             <svg
//                               className="w-3 h-3 text-white"
//                               viewBox="0 0 24 24"
//                               fill="none"
//                               stroke="currentColor"
//                               strokeWidth="3"
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                             >
//                               <polyline points="20 6 9 17 4 12" />
//                             </svg>
//                           )}
//                         </div>
//                       </label>
//                     </td>
              
                  
                   
                 
//                     <td className="p-3 text-center w-[14.28%]">
//                    <img src={location.Image} alt="Customer" className="w-6 h-6 rounded-md mx-auto" />
//                  </td>
//                  <td className="p-3 text-[10px] font-semibold text-center w-[14.28%]">{location.category}</td>
//                  <td className="p-3 text-[10px] font-semibold text-center w-[14.28%]">{location.subcategory}</td>
//                  <td className="p-3 text-[10px] font-semibold text-center w-[14.28%]">{location.price}</td>
//                  <td className="p-3 text-[10px] font-semibold text-center w-[14.28%]">{location.created}</td>
         
//                          {/* <td className="p-3 text-[10px] font-semibold">{location.status}</td> */}
//                          <td className="p-3 text-center w-[14.28%]">
//            <div className="flex justify-center">
//              <button
//                className={`relative w-9 h-3 flex items-center rounded-full transition ${
//                  location.status ? "bg-orange-500" : "bg-gray-300"
//                }`}
//                onClick={() => toggleStatus(location.id)}
//              >
//                <span
//                  className={`absolute left-1 w-2 h-2 bg-white rounded-full transition-transform ${
//                    location.status ? "translate-x-5" : "translate-x-0"
//                  }`}
//                ></span>
//              </button>
//            </div>
//          </td>
         
         
//                          {/* <td className="p-3 text-[10px] font-semibold">{location.paid}</td> */}
             
              
//                     {/* Actions Column  */}
//                     <td className="p-3 text-[10px] font-semibold items-end">
//                       <div className="flex justify-center space-x-3">
//                         <button>
//                           <img src={edit} className="h-4 w-4" alt="" />
//                         </button>
//                         <button>
//                           <img src={deleteButton} className="h-4 w-4" alt="" />
//                         </button>
//                       </div>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </div>

//             {/* Right: Toggle & Menu */}
//             <div className="items-center">

//                  {/* More Options */}
//               <MoreHorizontal size={14} className="text-gray-500 cursor-pointer ml-2  mb-8" />
//               {/* Toggle Switch */}
//               <label className="relative inline-flex items-center cursor-pointer">
//                 <input
//                   type="checkbox"
//                   className="sr-only peer"
//                   checked={location.status}
//                   onChange={() => toggleStatus(location.id)}
//                 />
//            <button
//       className={`relative w-9 h-4 flex items-center rounded-full transition ${
//         location.status ? "bg-orange-500" : "bg-gray-300"
//       }`}
//       onClick={() => toggleStatus(location.id)}
//     >
//       <span
//         className={`absolute left-1 w-2 h-2 bg-white rounded-full transition-transform ${
//           location.status ? "translate-x-5" : "translate-x-0"
//         }`}
//       ></span>
//     </button>
//               </label>

             
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Pagination */}
//       <div className="flex justify-between items-center mt-4 w-full">
//         <span className="text-[10px] text-gray-600">
//           Showing {indexOfFirstLocation + 1}-{indexOfLastLocation} of {locations.length}
//         </span>
//         <div className="flex space-x-2 text-sm">
//           <button
//             onClick={prevPage}
//             disabled={currentPage === 1}
//             className={`px-3 py-1 rounded-md ${currentPage === 1 ? "bg-gray-50 cursor-not-allowed" : "bg-gray-200 text-black"}`}
//           >
//             &lt;
//           </button>
//           <button
//             onClick={nextPage}
//             disabled={indexOfLastLocation >= locations.length}
//             className={`px-3 py-1 rounded-md ${indexOfLastLocation >= locations.length ? "bg-gray-50 cursor-not-allowed" : "bg-gray-200 text-black"}`}
//           >
//             &gt;
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductGrid;


import React, { useState } from "react";
import { MoreHorizontal } from "lucide-react"; // Ensure this is imported

import edit from "../../../Assets/Edit.png";
import deleteButton from "../../../Assets/Delete.png";
import filter from "../../../Assets/Filter.png";
import print from "../../../Assets/Print.png";
import download from "../../../Assets/Download.png";
import img from "../../../Assets/myImage.jpg"; 
import dollar from "../../../Assets/dollarSign.png"; 

const ProductGrid = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedRows, setSelectedRows] = useState(new Set());
  const locationsPerPage = 12;

  const [locations, setLocations] = useState(
    Array.from({ length: 50 }, (_, i) => ({
      id: i + 1,
      image: img,
      name: `Product ${i + 1}`,
      category: "Pasta",
      subCategory: "Pasta",
      price: "₦2,000",
      created: "12:05 AM",
      status: true,
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
    setSelectedRows((prevSelected) => {
      const newSelection = new Set(prevSelected);
      if (newSelection.has(id)) {
        newSelection.delete(id);
      } else {
        newSelection.add(id);
      }
      return newSelection;
    });
  };

  // Toggle Status Function
  const toggleStatus = (id) => {
    setLocations((prevLocations) =>
      prevLocations.map((location) =>
        location.id === id ? { ...location, status: !location.status } : location
      )
    );
  };

  return (
    <div className="">
      {/* Selection Bar */}
      {selectedRows.size > 0 && (
        <div className="w-full text-orange-500 bg-white px-4 rounded-lg flex justify-between items-center shadow-md z-50 mt-4">
          {/* Left: Selection Count & Cancel */}
          <div className="flex space-x-6 p-6">
            <span className="font-medium text-xs">{selectedRows.size} Selected</span>
            <button onClick={() => setSelectedRows(new Set())} className="text-orange-500 font-medium text-xs">
              Cancel
            </button>
          </div>

          {/* Right: Edit & Delete Icons */}
          <div className="flex space-x-3 p-6">
            <button>
              <img src={deleteButton} className="h-4 w-4" alt="Delete" />
            </button>
            <button>
              <img src={filter} className="h-4 w-4" alt="Filter" />
            </button>
            <button>
              <img src={print} className="h-5 w-5" alt="Print" />
            </button>
            <button>
              <img src={download} className="h-4 w-4" alt="Download" />
            </button>
          </div>
        </div>
      )}

      {/* Table Container */}
      <div className="mt-3">
        {currentLocations.map((location) => (
          <div
            key={location.id}
            className="flex items-center justify-between bg-white shadow-sm rounded-lg p-4 mb-3"
          >
            {/* Left: Image & Checkbox */}
            <div className="flex items-center space-x-4">
              {/* Left: Image with selection */}
<div className="relative">
  <img
    src={location.image}
    alt={location.name}
    className="w-16 h-16 rounded-lg object-cover cursor-pointer"
    onClick={() => toggleRowSelection(location.id)}
  />
  {selectedRows.has(location.id) && (
    <div className="absolute top-1 left-1 w-4 h-4 bg-orange-500 rounded-full flex items-center justify-center">
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
    </div>
  )}
</div>


<div>
  <h3 className="font-semibold text-sm mb-2">
    #{location.id} {location.name}
  </h3>
  <p className="text-gray-300 text-[10px] flex justify-between space-x-2 mb-2">
    Created: <span className="text-gray-600 font-medium ml-1"> {location.created}</span> 
    
    <span className="font-medium flex items-center text-[10px]  rounded-full px-1 border ">
      <img src={dollar} alt="dollar" className="h-2 w-2 mr-1" />
     <span className="text-[10px] text-gray-600"> {location.price}</span>
    </span>
  </p>
  <p className="text-gray-300 text-[10px]">
    Category - <span className="text-gray-600 font-medium">{location.category}</span> 
    <span className="text-gray-300"> • Sub -</span> 
    <span className="text-gray-600 font-medium">{location.subCategory}</span>
  </p>
</div>

            </div>

            {/* Right: Toggle & Menu */}
            <div className="items-center">
              {/* More Options */}
              <MoreHorizontal size={14} className="text-gray-500 cursor-pointer ml-2 mb-8" />
              
              {/* Toggle Switch */}
              <button
                className={`relative w-9 h-4 flex items-center rounded-full transition ${
                  location.status ? "bg-orange-500" : "bg-gray-300"
                }`}
                onClick={() => toggleStatus(location.id)}
              >
                <span
                  className={`absolute left-1 w-2 h-2 bg-white rounded-full transition-transform ${
                    location.status ? "translate-x-5" : "translate-x-0"
                  }`}
                ></span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4 w-full">
        <span className="text-[10px] text-gray-600">
          Showing {indexOfFirstLocation + 1}-{indexOfLastLocation} of {locations.length}
        </span>
        <div className="flex space-x-2 text-sm">
          <button
            onClick={prevPage}
            disabled={currentPage === 1}
            className={`px-3 py-1 rounded-md ${currentPage === 1 ? "bg-gray-50 cursor-not-allowed" : "bg-gray-200 text-black"}`}
          >
            &lt;
          </button>
          <button
            onClick={nextPage}
            disabled={indexOfLastLocation >= locations.length}
            className={`px-3 py-1 rounded-md ${indexOfLastLocation >= locations.length ? "bg-gray-50 cursor-not-allowed" : "bg-gray-200 text-black"}`}
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;
