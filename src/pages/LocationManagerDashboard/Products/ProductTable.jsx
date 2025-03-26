import React, { useState } from "react";


import edit from "../../../Assets/Edit.png"
import deleteButton from "../../../Assets/Delete.png"
import filter from "../../../Assets/Filter.png"
import print from "../../../Assets/Print.png"
import download from "../../../Assets/Download.png"
import paid from "../../../Assets/paid.png";
import notPaid from "../../../Assets/notPaid.png";

import img from "../../../Assets/myImage.jpg"; 

const ProductTable = ({ selectedTab, ordersData }) => {
    // const filteredOrders =
    //   selectedTab === "All"
    //     ? ordersData
    //     : ordersData.filter((order) => order.status === selectedTab);
     const [currentPage, setCurrentPage] = useState(1);
      const [showModal, setShowModal] = useState(false);
      const [selectedProduct, setSelectedProduct] = useState(null);
      const [selectedRows, setSelectedRows] = useState(new Set()); // Track selected checkboxes
    
      const locationsPerPage = 12;
      const [locations, setLocations] = useState(
        Array.from({ length: 1253 }, (_, i) => ({
          id: i + 1,
          Image: img,
          category: "Pasta",
          subcategory: "Pasta",
          price: "2,000",
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
     
         
         <th className="p-3 text-center w-[14.28%]">Image</th>
      <th className="p-3 text-center w-[14.28%]">Category</th>
      <th className="p-3 text-center w-[14.28%]">Subcategory</th>
      <th className="p-3 text-center w-[14.28%]">Price</th>
      <th className="p-3 text-center w-[14.28%]">Created</th>
      <th className="p-3 text-center w-[14.28%]">Status</th>
      <th className="p-3 text-center w-[14.28%]">Actions</th>
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
     
         
          
        
           <td className="p-3 text-center w-[14.28%]">
          <img src={location.Image} alt="Customer" className="w-6 h-6 rounded-md mx-auto" />
        </td>
        <td className="p-3 text-[10px] font-semibold text-center w-[14.28%]">{location.category}</td>
        <td className="p-3 text-[10px] font-semibold text-center w-[14.28%]">{location.subcategory}</td>
        <td className="p-3 text-[10px] font-semibold text-center w-[14.28%]">{location.price}</td>
        <td className="p-3 text-[10px] font-semibold text-center w-[14.28%]">{location.created}</td>

                {/* <td className="p-3 text-[10px] font-semibold">{location.status}</td> */}
                <td className="p-3 text-center w-[14.28%]">
  <div className="flex justify-center">
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
</td>


                {/* <td className="p-3 text-[10px] font-semibold">{location.paid}</td> */}
    
     
           {/* Actions Column  */}
           <td className="p-3 text-[10px] font-semibold items-end">
             <div className="flex justify-center space-x-3">
               <button>
                 <img src={edit} className="h-4 w-4" alt="" />
               </button>
               <button onClick={() => handleDeleteClick(location)}>
                 <img src={deleteButton} className="h-4 w-4" alt="" />
               </button>
             </div>
           </td>
         </tr>
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

export default ProductTable;