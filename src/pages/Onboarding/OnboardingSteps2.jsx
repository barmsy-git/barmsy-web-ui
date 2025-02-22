// import React, { useState } from "react";
// import { HiArrowLeft } from "react-icons/hi";
// import { useNavigate } from "react-router-dom";
// import logo from "../../../public/iconoir_organic-food.svg";

// const OnboardingSteps2 = ({ step1, step2, step3, step4, step5 }) => {
//   const navigate = useNavigate();
//   const [selectedOptions, setSelectedOptions] = useState([]);

//   const options = [
//     { label: "Restaurant", position: "left" },
//     { label: "All", position: "left" },
//     { label: "Bar", position: "left" },
//     { label: "Lounge", position: "left" },
//     { label: "Club", position: "right" },
//     { label: "Hotel", position: "left" },
//   ];

//   const handleCheckboxChange = (option) => {
//     if (option === "All") {
//       setSelectedOptions((prev) =>
//         prev.includes("All") ? [] : options.map((opt) => opt.label)
//       );
//     } else {
//       setSelectedOptions((prev) =>
//         prev.includes(option)
//           ? prev.filter((item) => item !== option && item !== "All")
//           : [...prev.filter((item) => item !== "All"), option]
//       );
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-start min-h-screen bg-white px-5 p-7 pt-2">
//       <div className="flex justify-center space-x-1 pt-1">
//         <img src={logo} alt="Barmsy Logo" className="h-10 text-orange-500" />
//         <h1 className="text-3xl font-semibold text-orange-500 ml-5">Barmsy</h1>
//       </div>

//       {/* Navigation & Progress Bar */}
//       <div className="flex items-center w-full max-w-lg pt-6">
//         <HiArrowLeft className="text-gray-900 text-3xl cursor-pointer -ml-72" onClick={() => navigate(-1)} />
//         <div className="flex w-full justify-end ml-64">
//           <div className="grid grid-cols-5 gap-2 w-full">
//             {[step1, step2, step3, step4, step5].map((step, index) => (
//               <div
//                 key={index}
//                 className={`border-t ${step ? "border-orange-500" : "border-gray-300"} w-full`}
//               ></div>
//             ))}
//           </div>
//         </div>
//       </div>

//       <h2 className="text-2xl font-semibold text-gray-900 text-center mt-24
//       ">What is your business about?</h2>
//       <p className="text-gray-500 text-xs text-center mt-2 max-w-md">If all apply, you can select multiple checkboxes.</p>

//       {/* Checkbox Selection */}
//       <div className="w-full max-w-lg mt-6 grid grid-cols-3 gap-4">
//         {options.map(({ label, position }) => (
//           <label key={label} className={`flex items-center space-x-3 my-2 cursor-pointer ${position === "middle" ? "justify-center" : ""}`}>
//             <input
//               type="checkbox"
//               checked={selectedOptions.includes(label)}
//               onChange={() => handleCheckboxChange(label)}
//               className="hidden peer"
//             />
//             <div className="w-3 h-3 border border-gray-400 flex items-center justify-center peer-checked:bg-orange-500 peer-checked:border-orange-500">
//               {selectedOptions.includes(label) && (
//                 <svg
//                   className="w-3 h-3 text-white font-bold"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="4"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 >
//                   <polyline points="20 6 9 17 4 12" />
//                 </svg>
//               )}
//             </div>
//             <span className="text-sm text-gray-700">{label}</span>
//           </label>
//         ))}
//       </div>

//       {/* Continue Button */}
//       <button
//         className={`w-full max-w-lg mt-6 text-white text-sm font-semibold py-3 rounded-full shadow-md 
//           ${selectedOptions.length === 0 ? "bg-orange-200" : "bg-orange-500 hover:bg-orange-600"}
//         `}
//         disabled={selectedOptions.length === 0}
//         onClick={() => navigate("/business-setup3")}
//       >
//         Continue
//       </button>
//     </div>
//   );
// };

// export default OnboardingSteps2;

import React, { useState, useRef, useEffect } from "react";
import { HiArrowLeft } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import logo from "../../../public/iconoir_organic-food.svg";

const OnboardingSteps2 = ({ step1, step2, step3, step4, step5 }) => {
  const navigate = useNavigate();
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const options = ["All", "Restaurant", "Lounge", "Bar", "Club", "Hotel"];

  const handleCheckboxChange = (option) => {
    setSelectedOptions((prev) => {
      if (option === "All") {
        return prev.includes("All") ? [] : options;
      } else {
        const newSelected = prev.includes(option)
          ? prev.filter((item) => item !== option)
          : [...prev, option];
        
        if (newSelected.includes("All")) {
          return newSelected.filter(item => item !== "All");
        }
        
        return newSelected.length === options.length - 1 ? ["All", ...newSelected] : newSelected;
      }
    });
  };

  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-white px-5 p-7 pt-2">
      <div className="flex justify-center space-x-1 pt-1">
        <img src={logo} alt="Barmsy Logo" className="h-10 text-orange-500" />
        <h1 className="text-3xl font-semibold text-orange-500 ml-5">Barmsy</h1>
      </div>

      <div className="flex items-center w-full max-w-lg pt-6">
        <HiArrowLeft className="text-gray-900 text-3xl cursor-pointer -ml-72" onClick={() => navigate(-1)} />
        <div className="flex w-full justify-end ml-64">
          <div className="grid grid-cols-5 gap-2 w-full">
            {[step1, step2, step3, step4, step5].map((step, index) => (
              <div key={index} className={`border-t ${step ? "border-orange-500" : "border-gray-300"} w-full`}></div>
            ))}
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 text-center mt-24">What is your business about?</h2>
      <p className="text-gray-500 text-xs text-center mt-2 max-w-md">If all apply, you can select multiple checkboxes.</p>

      <div className="relative w-full max-w-lg mt-6" ref={dropdownRef}>
        <button
          className="w-full border rounded-full text-xs px-3 py-2 text-left"
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          {selectedOptions.length > 0 ? selectedOptions.filter(option => option !== "All").join(", ") : "Select Categories"}
        </button>
        {dropdownOpen && (
          <div className="absolute w-full border mt-1 bg-white shadow-lg rounded-lg p-2 text-xs">
            {options.map((option) => (
              <label key={option} className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={selectedOptions.includes(option)}
                  onChange={() => handleCheckboxChange(option)}
                  className="hidden peer"
                />
                <div className="w-3 h-3 border border-gray-400 flex items-center justify-center peer-checked:bg-orange-500 peer-checked:border-orange-500">
                  {selectedOptions.includes(option) && (
                    <svg
                      className="w-3 h-3 text-white font-bold"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  )}
                </div>
                <span className="text-sm text-gray-700">{option}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      <button
        className={`w-full max-w-lg mt-6 text-white text-sm font-semibold py-3 rounded-full shadow-md ${selectedOptions.length === 0 ? "bg-orange-200" : "bg-orange-500 hover:bg-orange-600"}`}
        disabled={selectedOptions.length === 0}
        onClick={() => navigate("/business-setup3")}
      >
        Continue
      </button>
    </div>
  );
};

export default OnboardingSteps2;
