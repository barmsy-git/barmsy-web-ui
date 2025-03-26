// import React, { useState } from "react";
// import { X, ArrowLeft } from "lucide-react";
// import MaterialSymbols from "../../../Assets/material-symbols_category-outline-rounded.png";

// const AddProductModal = ({ onClose }) => {
//   const [name, setName] = useState("");
 
//   const [subCategories, setSubCategories] = useState([]);
//   const [showSubCategoryInput, setShowSubCategoryInput] = useState(false);
//   const [newSubCategory, setNewSubCategory] = useState("");

//   const handleAddSubCategory = () => {
//     if (newSubCategory.trim() !== "") {
//       setSubCategories((prev) => [...prev, newSubCategory]); // Ensure state updates correctly
//       setNewSubCategory(""); // Reset input field
//       setShowSubCategoryInput(false); // Hide input field after adding
//     }
//   };
//    const valid = name.trim() !== "" && subCategories.length > 0;

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-[1000]">
//       <div className="bg-orange-50 p-6 rounded-lg w-[400px] shadow-lg relative">
//         {/* Close Button */}
//         <button
//           onClick={onClose}
//           className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
//         >
//           <X size={20} />
//         </button>

//         {/* Title and Subtitle */}
//         <div className="flex items-center">
//           <div>
//             <div className="flex justify-start space-x-1">
//               <img src={MaterialSymbols} alt="" className="h-5 w-5" />
//               <h2 className="text-sm font-bold">Create a Category</h2>
//             </div>
//             <p className="text-gray-500 text-[10px]">Add a new Category</p>
//           </div>
//         </div>

//         {/* Category Name & Description */}
//         <div className="mt-5 space-y-4">
//           <div className="bg-white p-4 rounded-lg">
//             <div>
//               <label className="text-[11px] font-semibold">
//                 Category Name <span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="text"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 className="w-full text-xs mt-1 p-2 py-2 border rounded-full"
//                 placeholder="Enter category name"
//               />
//             </div>

          

//             {/* Add a Sub Category */}
//             <div className="mt-2">
//               {subCategories.map((sub, index) => (
//                 <div key={index} className="text-xs bg-gray-100 p-2 rounded-lg mt-1">
//                   {sub}
//                 </div>
//               ))}

//               {showSubCategoryInput ? (
//                 <div className="mt-2 ">
//                        <label className="text-[11px] font-semibold">
//                 Subcategory Name <span className="text-red-500">*</span>
//               </label>
//                   <input
//                     type="text"
//                     value={newSubCategory}
//                     onChange={(e) => setNewSubCategory(e.target.value)}
//                     className="w-full text-xs p-2 border rounded-full"
//                     placeholder="Sochima"
//                   />
                 
//                 </div>
//               ) : (
//                 <button
//                   onClick={() => setShowSubCategoryInput(true)}
                  
//                   className="text-orange-500 text-[10px] w-full mt-1  p-2 border border-dashed rounded-2xl py-3"
//                 >
//                   + Add a Sub Category
//                 </button>
//               )}
//             </div>
//           </div>
//         </div>

//         {/* Create Button */}
//         <button
//                   disabled={!valid}
//           className={`w-full mb-40 mt-2 py-2 rounded-full text-[12px] font-medium ${
//             valid
//               ? "bg-orange-500 text-white cursor-pointer"
//               : "bg-gray-300 text-gray-500 cursor-not-allowed"
//           }`}
//         >
//           Create
//         </button>
//       </div>
//     </div>
//   );
// };

// export default AddProductModal;

import React, { useState } from "react";
import { X } from "lucide-react";
import MaterialSymbols from "../../../Assets/material-symbols_category-outline-rounded.png";

const AddProductModal = ({ onClose }) => {
  const [name, setName] = useState("");
  const [subCategories, setSubCategories] = useState([]);
  const [showSubCategoryInput, setShowSubCategoryInput] = useState(false);
  const [newSubCategory, setNewSubCategory] = useState("");

  const handleAddSubCategory = () => {
    if (newSubCategory.trim() !== "") {
      setSubCategories((prev) => [...prev, newSubCategory]); // Ensure state updates correctly
      setNewSubCategory(""); // Reset input field
      setShowSubCategoryInput(false); // Hide input field after adding
    }
  };

  const handleCreate = () => {
    // Perform create action here (e.g., API call, state update, etc.)
    console.log("Category Created:", { name, subCategories });

    // Reset subcategory input visibility so it doesn't show again
    setShowSubCategoryInput(false);
  };

  // Validate: Ensure category name is filled & either a subcategory exists or user is typing
  const valid =
    name.trim() !== "" &&
    (subCategories.length > 0 || (showSubCategoryInput && newSubCategory.trim() !== ""));

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-[1000]">
      <div className="bg-orange-50 p-6 rounded-lg w-[400px] shadow-lg relative">
        {/* Close Button */}
        <button onClick={onClose} className="absolute top-3 right-3 text-gray-500 hover:text-gray-700">
          <X size={20} />
        </button>

        {/* Title and Subtitle */}
        <div className="flex items-center">
          <div>
            <div className="flex justify-start space-x-1">
              <img src={MaterialSymbols} alt="" className="h-5 w-5" />
              <h2 className="text-sm font-bold">Create a Category</h2>
            </div>
            <p className="text-gray-500 text-[10px]">Add a new Category</p>
          </div>
        </div>

        {/* Category Name & Description */}
        <div className="mt-5 space-y-4">
          <div className="bg-white p-4 rounded-lg">
            <div>
              <label className="text-[11px] font-semibold">
                Category Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full text-xs mt-1 p-2 py-2 border rounded-full"
                placeholder="Enter category name"
              />
            </div>

            {/* Add a Sub Category */}
            <div className="mt-2">
              {subCategories.map((sub, index) => (
                <div key={index} className="text-xs bg-gray-100 p-2 rounded-lg mt-1">
                  {sub}
                </div>
              ))}

              {showSubCategoryInput ? (
                <div className="mt-2">
                  <label className="text-[11px] font-semibold">
                    Subcategory Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={newSubCategory}
                    onChange={(e) => setNewSubCategory(e.target.value)}
                    onBlur={handleAddSubCategory} // Add subcategory when input loses focus
                    className="w-full text-xs p-2 border rounded-full"
                    placeholder="Enter subcategory name"
                  />
                </div>
              ) : (
                subCategories.length === 0 && ( // Ensure this button only appears when no subcategories exist
                  <button
                    onClick={() => setShowSubCategoryInput(true)}
                    className="text-orange-500 text-[10px] w-full mt-1 p-2 border border-dashed rounded-2xl py-3"
                  >
                    + Add a Sub Category
                  </button>
                )
              )}
            </div>
          </div>
        </div>

        {/* Create Button */}
        <button
          disabled={!valid}
          onClick={handleCreate}
          className={`w-full mb-40 mt-2 py-2 rounded-full text-[12px] font-medium ${
            valid ? "bg-orange-500 text-white cursor-pointer" : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
        >
          Create
        </button>
      </div>
    </div>
  );
};

export default AddProductModal;
