// import React, { useState } from "react";


// import edit from "../../../Assets/Edit.png"
// import deleteButton from "../../../Assets/Delete.png"
// import filter from "../../../Assets/Filter.png"
// import print from "../../../Assets/Print.png"
// import download from "../../../Assets/Download.png"
// import paid from "../../../Assets/paid.png";
// import notPaid from "../../../Assets/notPaid.png";

// import img from "../../../Assets/myImage.jpg"; 

// const CategorySection = ({ selectedTab, ordersData }) => {
//     // const filteredOrders =
//     //   selectedTab === "All"
//     //     ? ordersData
//     //     : ordersData.filter((order) => order.status === selectedTab);
//      const [currentPage, setCurrentPage] = useState(1);
//       const [showModal, setShowModal] = useState(false);
//       const [selectedProduct, setSelectedProduct] = useState(null);
//       const [selectedRows, setSelectedRows] = useState(new Set()); // Track selected checkboxes
//       const [expandedRows, setExpandedRows] = useState(new Set()); // Track expanded rows

//       const locationsPerPage = 12;
//       const [locations, setLocations] = useState(
//         Array.from({ length: 1253 }, (_, i) => ({
//           id: i + 1,
//           Name: "Sochima Onah",
//           Product: "Pasta",
         
          
//           created: "12:05 AM",
          
//           status: true,
       
//         }))
//       );
      
    
//       const indexOfLastLocation = currentPage * locationsPerPage;
//       const indexOfFirstLocation = indexOfLastLocation - locationsPerPage;
//       const currentLocations = locations.slice(indexOfFirstLocation, indexOfLastLocation);
    
//       const nextPage = () => {
//         if (indexOfLastLocation < locations.length) setCurrentPage(currentPage + 1);
//       };
    
//       const prevPage = () => {
//         if (currentPage > 1) setCurrentPage(currentPage - 1);
//       };
    
//       // Handle checkbox selection
//       const toggleRowSelection = (id) => {
//         const updatedSelection = new Set(selectedRows);
//         if (updatedSelection.has(id)) {
//           updatedSelection.delete(id);
//         } else {
//           updatedSelection.add(id);
//         }
//         setSelectedRows(updatedSelection);
//       };
    
//       // Handle "Select All" checkbox
//       const toggleSelectAll = () => {
//         if (selectedRows.size === currentLocations.length) {
//           setSelectedRows(new Set());
//         } else {
//           setSelectedRows(new Set(currentLocations.map((loc) => loc.id)));
//         }
//       };

//       const toggleStatus = (id) => {
//         setLocations((prevLocations) =>
//           prevLocations.map((location) =>
//             location.id === id ? { ...location, status: !location.status } : location
//           )
//         );
//       };

//       const handleDeleteClick = (product) => {
//         setSelectedProduct(product);
//         setShowModal(true);
//       };
    
//       const confirmDelete = () => {
//         setLocations(locations.filter((item) => item.id !== selectedProduct.id));
//         setShowModal(false);
//         setSelectedProduct(null);
//       };

  
//       const toggleRowExpand = (id) => {
//         const updatedRows = new Set(expandedRows);
//         updatedRows.has(id) ? updatedRows.delete(id) : updatedRows.add(id);
//         setExpandedRows(updatedRows);
//       };

//   return (
//     <div className="">
//          {/* Selection Bar (Appears Above Table Headers) */}
//            <div className="bg-white shadow-md rounded-lg mt-1 w-full">
//            {selectedRows.size > 0 && (
//              <div className="w-full  text-orange-500 px-4 py-2 rounded-t-lg flex justify-between items-center shadow-md z-50 mt-6">
//                {/* Left Side: Selection Count & Cancel */}
//                <div className="flex space-x-6 p-6 ">
//                  <span className="font-medium text-xs">{selectedRows.size} Selected</span>
//                  <button onClick={() => setSelectedRows(new Set())} className="text-orange-500 font-medium text-xs">
//                    Cancel
//                  </button>
//                </div>
     
//                {/* Right Side: Edit & Delete Icons */}
//                <div className="flex space-x-3  p-6">
//                <button onClick={() => handleDeleteClick(location)}>
//                  <img src={deleteButton} className="h-4 w-4" alt="" />
//                  </button>
//                  <button >
//                  <img src={filter} className="h-4 w-4" alt="" />
//                  </button>
//                  <button >
//                  <img src={print} className="h-5 w-5" alt="" />
//                  </button>
//                  <button >
//                  <img src={download} className="h-4 w-4" alt="" />
//                  </button>
               
//                </div>
//              </div>
//            )}
     
//            {/* Table Container */}
//            <table className="w-full text-xs text-left text-gray-600">
//   <thead className="bg-gray-50 border-b">
//     <tr>
//       {/* "Select All" Checkbox in Header */}
//       <th className="p-2 text-center w-[5%]">
//         <label className="cursor-pointer flex items-center justify-center">
//           <input
//             type="checkbox"
//             className="peer hidden"
//             onChange={toggleSelectAll} // Function to toggle all checkboxes
//             checked={selectedRows.size === currentLocations.length}
//           />
//           <div className="w-3 h-3 border border-gray-400 flex items-center justify-center ml-24  peer-checked:bg-orange-500 peer-checked:border-orange-500">
//             {selectedRows.size === currentLocations.length && (
//               <svg
//                 className="w-3 h-3 text-white"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="3"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               >
//                 <polyline points="20 6 9 17 4 12" />
//               </svg>
//             )}
//           </div>
//         </label>
//       </th>

//       <th className="p-3 text-center w-[20%] pr-36">Name</th>
//       <th className="p-3 text-center w-[20%]">Product</th>
//       <th className="p-3 text-center w-[15%]">Created</th>
//       <th className="p-3 text-center w-[15%]">Status</th>
//       <th className="p-3 text-center w-[15%]">Actions</th>
//     </tr>
//   </thead>

//   <tbody>
//     {currentLocations.map((location) => (
//       <tr key={location.id} className="cursor-pointer">
//         <td colSpan="100%" className="p-2">
//           <div className="border border-dashed rounded-full p-2 flex items-center justify-between w-full">
//             {/* Expand/Collapse Button (No Text in Header) */}
//             <button
//               onClick={() => toggleRowExpand(location.id)}
//               className="text-xs focus:outline-none w-[5%] flex justify-center"
//             >
//               {expandedRows.has(location.id) ? "▲" : "▼"}
//             </button>

//             {/* Checkbox (Now Closer to Name) */}
//             <label className="cursor-pointer flex items-center justify-center w-[5%]">
//               <input
//                 type="checkbox"
//                 className="peer hidden"
//                 checked={selectedRows.has(location.id)}
//                 onChange={() => toggleRowSelection(location.id)}
//               />
//               <div className="w-3 h-3 border border-gray-400 flex items-center justify-center peer-checked:bg-orange-500 peer-checked:border-orange-500">
//                 {selectedRows.has(location.id) && (
//                   <svg
//                     className="w-3 h-3 text-white"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="3"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   >
//                     <polyline points="20 6 9 17 4 12" />
//                   </svg>
//                 )}
//               </div>
//             </label>

//             {/* Name (Even Closer to Checkbox) */}
//             <span className="text-[10px] font-semibold text-left w-[20%] pl-2">
//               {location.Name}
//             </span>

//             {/* Product */}
//             <span className="text-[10px] font-semibold text-center w-[20%]">
//               {location.Product}
//             </span>

//             {/* Created */}
//             <span className="text-[10px] font-semibold text-center w-[15%]">
//               {location.created}
//             </span>

//             {/* Status Toggle */}
//             <div className="flex justify-center w-[15%]">
//               <button
//                 className={`relative w-9 h-3 flex items-center rounded-full transition ${
//                   location.status ? "bg-orange-500" : "bg-gray-300"
//                 }`}
//                 onClick={() => toggleStatus(location.id)}
//               >
//                 <span
//                   className={`absolute left-1 w-2 h-2 bg-white rounded-full transition-transform ${
//                     location.status ? "translate-x-5" : "translate-x-0"
//                   }`}
//                 ></span>
//               </button>
//             </div>

//             {/* Actions */}
//             <div className="flex justify-center space-x-3 w-[15%]">
//               <button>
//                 <img src={edit} className="h-4 w-4" alt="Edit" />
//               </button>
//               <button onClick={() => handleDeleteClick(location)}>
//                 <img src={deleteButton} className="h-4 w-4" alt="Delete" />
//               </button>
//             </div>
//           </div>
//         </td>
//       </tr>
//     ))}
//   </tbody>
// </table>




     
     
//            </div>

//     {/* Delete Confirmation Modal */}
// {showModal && (
//   <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//     <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
//       {/* Close Button */}
//       <button
//         onClick={() => setShowModal(false)}
//         className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
//       >
//         ✖
//       </button>

//       <h2 className="text-sm font-semibold mt-16 text-gray-800">
//         Are you sure you want to delete{" "}
//         <span className="font-bold">{selectedProduct?.category}</span>?
//       </h2>

//       <div className="flex justify-between space-x-3 mt-11">
//         <button
//           onClick={confirmDelete}
//           className="px-10 py-2 bg-gray-200 text-black rounded-full text-[10px]"
//         >
//           Yes, delete
//         </button>
//         <button
//           onClick={() => setShowModal(false)}
//           className="px-14 py-2  bg-orange-500 text-white rounded-full text-[10px]"
//         >
//           No
//         </button>
//       </div>
//     </div>
//   </div>
// )}

     
//            {/* Pagination */}
//            <div className="flex justify-between items-center mt-4 w-full">
//              <span className="text-[10px] text-gray-600">
//                Showing {indexOfFirstLocation + 1}-{indexOfLastLocation} of {locations.length}
//              </span>
//              <div className="flex space-x-2 text-sm border-">
//                <button onClick={prevPage} disabled={currentPage === 1} className={`px-3 py-1 rounded-md ${currentPage === 1 ? "bg-gray-50 cursor-not-allowed" : "bg-gray-200 text-black"}`}>
//                  &lt;
//                </button>
//                <button onClick={nextPage} disabled={indexOfLastLocation >= locations.length} className={`px-3 py-1 rounded-md ${indexOfLastLocation >= locations.length ? "bg-gray-50 cursor-not-allowed" : "bg-gray-200 text-black"}`}>
//                  &gt;
//                </button>
//              </div>
//            </div>
//     </div>
//   );
// }

// export default CategorySection;



import React, { useState } from "react";


import edit from "../../../Assets/Edit.png"
import deleteButton from "../../../Assets/Delete.png"
import filter from "../../../Assets/Filter.png"
import print from "../../../Assets/Print.png"
import download from "../../../Assets/Download.png"
import paid from "../../../Assets/paid.png";
import notPaid from "../../../Assets/notPaid.png";

import img from "../../../Assets/myImage.jpg"; 

const CategorySection = ({ selectedTab, ordersData }) => {
    // const filteredOrders =
    //   selectedTab === "All"
    //     ? ordersData
    //     : ordersData.filter((order) => order.status === selectedTab);
     const [currentPage, setCurrentPage] = useState(1);
      const [showModal, setShowModal] = useState(false);
      const [selectedProduct, setSelectedProduct] = useState(null);
      const [selectedRows, setSelectedRows] = useState(new Set()); // Track selected checkboxes
      const [expandedRows, setExpandedRows] = useState(new Set()); // Track expanded rows

      const locationsPerPage = 12;
      const [locations, setLocations] = useState(
        Array.from({ length: 1253 }, (_, i) => ({
          id: i + 1,
          Name: "Sochima Onah",
          Product: "Pasta",
         
          
          created: "12:05 AM",
          
          status: true,
          subcategories: []
       
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

      const toggleStatus = (id) => {
        setLocations((prevLocations) =>
          prevLocations.map((location) =>
            location.id === id ? { ...location, status: !location.status } : location
          )
        );
      };

      const handleDeleteClick = (product) => {
        setSelectedProduct(product);
        setShowModal(true);
      };
    
      const confirmDelete = () => {
        setLocations(locations.filter((item) => item.id !== selectedProduct.id));
        setShowModal(false);
        setSelectedProduct(null);
      };

      const toggleRowExpand = (id) => {
        setExpandedRows((prevExpandedRows) => {
          const updatedRows = new Set(prevExpandedRows);
          if (updatedRows.has(id)) {
            updatedRows.delete(id);
          } else {
            updatedRows.add(id);
          }
          return updatedRows;
        });
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
               <button onClick={() => handleDeleteClick(location)}>
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
      {/* "Select All" Checkbox in Header */}
      <th className="p-2 text-center w-[5%]">
        <label className="cursor-pointer flex items-center justify-center">
          <input
            type="checkbox"
            className="peer hidden"
            onChange={toggleSelectAll} // Function to toggle all checkboxes
            checked={selectedRows.size === currentLocations.length}
          />
          <div className="w-3 h-3 border border-gray-400 flex items-center justify-center ml-24  peer-checked:bg-orange-500 peer-checked:border-orange-500">
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

      <th className="p-3 text-center w-[20%] pr-36">Name</th>
      <th className="p-3 text-center w-[20%]">Product</th>
      <th className="p-3 text-center w-[15%]">Created</th>
      <th className="p-3 text-center w-[15%]">Status</th>
      <th className="p-3 text-center w-[15%]">Actions</th>
    </tr>
  </thead>

  <tbody>
  {currentLocations.map((location) => (
    <React.Fragment key={location.id}>
      {/* Main Row */}
      <tr className={`tr-row ${expandedRows.has(location.id) ? "expanded" : ""}`}>

        <td colSpan="100%" className="p-2">
        <div
  className={`border border-dashed p-2 flex flex-col w-full transition-all ${
    expandedRows.has(location.id) ? "rounded-md border-solid" : "rounded-full"
  }`}
          >
            <div className="flex items-center justify-between">
           {/* Expand/Collapse Button */}
<button
  onClick={() => toggleRowExpand(location.id)}
  className="text-xs focus:outline-none w-[5%] flex justify-center"
>
  <svg
    className={`w-4 h-4 transition-transform ${
      expandedRows.has(location.id) ? "rotate-180" : "rotate-0"
    }`}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
</button>




              {/* Checkbox (Closer to Name) */}
              <label className="cursor-pointer flex items-center justify-center w-[5%]">
                <input
                  type="checkbox"
                  className="peer hidden"
                  checked={selectedRows.has(location.id)}
                  onChange={() => toggleRowSelection(location.id)}
                />
                <div className="w-4 h-4 border border-gray-400 flex items-center justify-center peer-checked:bg-orange-500 peer-checked:border-orange-500">
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

              {/* Name */}
              <span className="text-[10px] font-semibold text-left w-[20%] pl-2">
                {location.Name}
              </span>

              {/* Product */}
              <span className="text-[10px] font-semibold text-center w-[20%]">
                {location.Product}
              </span>

              {/* Created */}
              <span className="text-[10px] font-semibold text-center w-[15%]">
                {location.created}
              </span>

              {/* Status Toggle */}
              <div className="flex justify-center w-[15%]">
                <button
                  className={`relative w-9 h-3 flex items-center rounded-full transition ${
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

              {/* Actions */}
              <div className="flex justify-center space-x-3 w-[15%]">
                <button>
                  <img src={edit} className="h-4 w-4" alt="Edit" />
                </button>
                <button onClick={() => handleDeleteClick(location)}>
                  <img src={deleteButton} className="h-4 w-4" alt="Delete" />
                </button>
              </div>
            </div>

            {expandedRows.has(location.id) && (
  <div
    className={`mt-2 p-2 border border-dashed flex flex-col space-y-2 transition-all ${
      expandedRows.has(location.id) ? "rounded-full border-solid" : "rounded-md"
    }`}
  >
    {/* Subcategory Row (Mirrors Parent Row) */}
    <div className="flex items-center justify-between">
      {/* Expand/Collapse Arrow */}
      <button
        className="w-[5%] flex justify-center items-center cursor-pointer"
        onClick={() => toggleRowExpansion(location.id)}
      >
        <svg
          className={`w-4 h-4 transition-transform ${
            expandedRows.has(location.id) ? "rotate-180" : "rotate-0"
          }`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {/* Subcategory Name (Aligned with Name Column) */}
      <span className="text-[10px] font-semibold text-left w-[20%] pl-2">
        {location.Name}
      </span>

      {/* Subcategory Product (Aligned with Product Column) */}
      <span className="text-[10px] font-semibold text-center w-[20%]">
        {location.Product}
      </span>

      {/* Created (Aligned with Created Column) */}
      <span className="text-[10px] font-semibold text-center w-[15%]">
        {location.created}
      </span>

      {/* Status Toggle (Aligned with Status Column) */}
      <div className="flex justify-center w-[15%]">
        <button
          className={`relative w-9 h-3 flex items-center rounded-full transition ${
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

      {/* Actions (Aligned with Actions Column) */}
      <div className="flex justify-center space-x-3 w-[15%]">
        <button>
          <img src={edit} className="h-4 w-4" alt="Edit" />
        </button>
        <button onClick={() => handleDeleteClick(location)}>
          <img src={deleteButton} className="h-4 w-4" alt="Delete" />
        </button>
      </div>
    </div>
  </div>
)}




          </div>
        </td>
      </tr>
    </React.Fragment>
  ))}
</tbody>

</table>




     
     
           </div>

    {/* Delete Confirmation Modal */}
{showModal && (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
    <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
      {/* Close Button */}
      <button
        onClick={() => setShowModal(false)}
        className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
      >
        ✖
      </button>

      <h2 className="text-sm font-semibold mt-16 text-gray-800">
        Are you sure you want to delete{" "}
        <span className="font-bold">{selectedProduct?.category}</span>?
      </h2>

      <div className="flex justify-between space-x-3 mt-11">
        <button
          onClick={confirmDelete}
          className="px-10 py-2 bg-gray-200 text-black rounded-full text-[10px]"
        >
          Yes, delete
        </button>
        <button
          onClick={() => setShowModal(false)}
          className="px-14 py-2  bg-orange-500 text-white rounded-full text-[10px]"
        >
          No
        </button>
      </div>
    </div>
  </div>
)}

     
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

export default CategorySection;