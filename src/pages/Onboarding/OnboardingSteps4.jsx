// import React, { useState } from "react";
// import { HiArrowLeft } from "react-icons/hi";
// import { FaMapMarkerAlt } from "react-icons/fa";
// import logo from "../../../public/iconoir_organic-food.svg"
// import { useNavigate } from "react-router-dom";

// const BusinessLocation = ({ step1, step2, step3, step4, step5 }) => {
//   const navigate = useNavigate();
  
//   // List of available locations
//   const locations = [
//     "Lagos, Nigeria", "Abuja, Nigeria", "Port Harcourt, Nigeria", "Kano, Nigeria",
//     "Lagos, Nigeria", "Abuja, Nigeria", "Port Harcourt, Nigeria", "Kano, Nigeria",
//     "Lagos, Nigeria", "Abuja, Nigeria", "Port Harcourt, Nigeria", "Kano, Nigeria",
//     "Lagos, Nigeria", "Abuja, Nigeria", "Port Harcourt, Nigeria", "Kano, Nigeria",
//     "Lagos, Nigeria", "Abuja, Nigeria", "Port Harcourt, Nigeria", "Kano, Nigeria",
//     "Lagos, Nigeria", "Abuja, Nigeria", "Port Harcourt, Nigeria", "Kano, Nigeria",
//    "Nigeria", "Kano, Nigeria",
//     "Ibadan, Nigeria", "Enugu, Nigeria", "Benin City, Nigeria", "Kaduna, Nigeria",
//     "Jos, Nigeria", "Warri, Nigeria", "Abeokuta, Nigeria", "Owerri, Nigeria"
//   ];
  
//   const [inputValue, setInputValue] = useState("");
//   const [filteredLocations, setFilteredLocations] = useState([]);
//   const [selectedLocation, setSelectedLocation] = useState("");

//   // Handle user typing in the input field
// const handleInputChange = (e) => {
//     const value = e.target.value;
//     setInputValue(value);
  
//     if (value.trim() === "") {
//       setFilteredLocations([]);
//       setSelectedLocation(""); // Reset selected location when input is empty
//     } else {
//       setFilteredLocations(
//         locations.filter((location) =>
//           location.toLowerCase().includes(value.toLowerCase())
//         )
//       );
//     }
//   };

//   // Handle location selection from the list
//   const handleSelectLocation = (location) => {
//     setInputValue(location);
//     setSelectedLocation(location);
//     setFilteredLocations([]); // Hide dropdown after selection
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen w-full bg-white px-6 pb-20">
//     {/* Ensure body is also white */}
//     {/* <style>{`body { background-color: white; }`}</style> */}
  
    // {/* Logo Section */}
    // <div className="fixed top-5 flex justify-center space-x-1 mb-32">
    //   <img src={logo} alt="Barmsy Logo" className="h-10" />
    //   <h1 className="text-3xl font-semibold text-orange-500 ml-5">Barmsy</h1>
    // </div>
  
    // {/* Navigation & Progress Bar */}
    // <div className="flex  items-center w-full max-w-lg  mb-44">
    //   <HiArrowLeft className="text-gray-900 text-3xl cursor-pointer -ml-72" onClick={() => navigate(-1)} />
    //   <div className="flex w-full justify-end ml-64">
    //     <div className="grid grid-cols-5 gap-2 w-full">
    //       {[step1, step2, step3, step4, step5].map((step, index) => (
    //         <div key={index} className={`border-t ${step ? "border-orange-500" : "border-gray-300"} w-full`}></div>
    //       ))}
    //     </div>
    //   </div>
    // </div>
  
//     {/* Step 4 - Add Business Location */}
//     <div className="text-center mt-10">
//       <h2 className="text-base font-medium ">Add a Business Location</h2>
//       <p className="text-gray-500 text-xs  mt-2">Enter your business address to help customers find you.</p>
//     </div>
  
//     {/* Location Input Field */}
// <div className="w-full max-w-lg">
//   <div className="flex items-center border border-gray-300 rounded-full text-xs px-4 py-2 bg-white">
//     <FaMapMarkerAlt className="text-gray-400 mr-2" />
//     <input
//       type="text"
//       className="w-full outline-none bg-white"
//       placeholder="Ex. Lagos, Nigeria"
//       value={inputValue}
//       onChange={handleInputChange}
//     />
//   </div>

//   {filteredLocations.length > 0 && (
//   <ul className="w-full bg-white border border-gray-300 mt-1 rounded-lg shadow-md z-10">
//     {filteredLocations.map((location, index) => (
//       <li 
//         key={index} 
//         className="flex items-center px-4 py-2 cursor-pointer text-xs border-t hover:bg-gray-100" 
//         onClick={() => handleSelectLocation(location)}
//       >
//         <FaMapMarkerAlt className="text-gray-400 mr-2" /> {/* Icon on the left */}
//         <span>{location}</span>
//       </li>
//     ))}
//   </ul>
// )}

 

  
// </div>
  
//   {/* Continue Button */}
// <button
//   className={`mt-6 px-4 py-2 rounded-full max-w-lg w-full text-white text-sm font-medium transition-all ${
//     selectedLocation ? "bg-orange-500 hover:bg-orange-600" : "bg-gray-300 cursor-not-allowed"
//   }`}
//   onClick={() => navigate("/business-setup5")}
//   disabled={!selectedLocation}
// >
//   Continue
// </button>
// </div>
  
//   );
// };

// export default BusinessLocation;

import React, { useState } from "react";
import { HiArrowLeft } from "react-icons/hi";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io"; // Added arrow icon
import logo from "../../../public/iconoir_organic-food.svg";
import { useNavigate } from "react-router-dom";

const CustomDropdown = ({ options, selected, setSelected, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
  };

  return (
    <div className="relative w-full">
      <div
        className="w-full border border-gray-300 rounded-full px-3 py-3 mt-1 outline-none text-gray-700 text-xs cursor-pointer bg-white flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{selected ? selected : placeholder}</span>
        <IoIosArrowDown className={`text-gray-500 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </div>

      {isOpen && (
        <div className="absolute w-full bg-white border border-gray-300 rounded-lg shadow-md mt-1 z-10">
          {options.map((option, index) => (
            <div
              key={index}
              className="px-6 py-3 text-sm text-gray-700 cursor-pointer hover:bg-gray-200"
              onClick={() => handleSelect(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const BusinessLocation = ({ step1, step2, step3, step4, step5 }) => {
  const navigate = useNavigate();

  const locations = [
    "Lagos, Nigeria", "Abuja, Nigeria", "Port Harcourt, Nigeria", "Kano, Nigeria",
    "Ibadan, Nigeria", "Enugu, Nigeria", "Benin City, Nigeria", "Kaduna, Nigeria",
    "Jos, Nigeria", "Warri, Nigeria", "Abeokuta, Nigeria", "Owerri, Nigeria"
  ];

  const [inputValue, setInputValue] = useState("");
  const [filteredLocations, setFilteredLocations] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [houseNo, setHouseNo] = useState("");
  const [postalZip, setPostalZip] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    if (value.trim() === "") {
      setFilteredLocations([]);
      setSelectedLocation("");
    } else {
      setFilteredLocations(
        locations.filter((location) =>
          location.toLowerCase().includes(value.toLowerCase())
        )
      );
    }
  };

  const handleSelectLocation = (location) => {
    setInputValue(location);
    setSelectedLocation(location);
    setFilteredLocations([]);
  };

  const isFormFilled = inputValue && houseNo && postalZip && city && state && country;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full bg-white px-6 pb-20">
      <div className="flex justify-center space-x-1 pt-7">
        <img src={logo} alt="Barmsy Logo" className="h-10" />
        <h1 className="text-3xl font-semibold text-orange-500 ml-5">Barmsy</h1>
      </div>

      <div className="flex items-center w-full max-w-lg pt-7">
        <HiArrowLeft className="text-gray-900 text-3xl cursor-pointer -ml-72" onClick={() => navigate(-1)} />
        <div className="flex w-full justify-end ml-64">
          <div className="grid grid-cols-5 gap-2 w-full">
            {[true, true, true, true, true].map((step, index) => (
              <div key={index} className={`border-t ${step ? "border-orange-500" : "border-gray-300"} w-full`}></div>
            ))}
          </div>
        </div>
      </div>

      <div className="text-center mt-10 pb-12">
        <h2 className="text-2xl">Add a Business Location</h2>
        <p className="text-gray-500 text-xs mt-2">Enter your business address to help customers find you.</p>
      </div>

      <div className="w-full max-w-3xl">
        <label className="text-gray-700 text-xs font-medium">Street<span className="text-red-500">*</span></label>
        <div className="flex items-center border border-gray-300 rounded-full text-xs px-3 py-3 bg-white w-full">
          <FaMapMarkerAlt className="text-gray-400 mr-2" />
          <input
            type="text"
            className="w-full outline-none bg-white text-xs
            "
            placeholder="Ex. Lagos, Nigeria"
            value={inputValue}
            onChange={handleInputChange}
          />
        </div>

        {filteredLocations.length > 0 && (
          <ul className="w-full bg-white border border-gray-300 mt-1 rounded-lg shadow-md z-10">
            {filteredLocations.map((location, index) => (
              <li 
                key={index} 
                className="flex items-center px-6 py-3 cursor-pointer text-sm border-t hover:bg-gray-100" 
                onClick={() => handleSelectLocation(location)}
              >
                <FaMapMarkerAlt className="text-gray-400 mr-2" />
                <span>{location}</span>
              </li>
            ))}
          </ul>
        )}

        <div className="grid grid-cols-2 gap-8 mt-6">
          <div>
            <label className="text-gray-700 text-xs font-medium">House No.<span className="text-red-500">*</span></label>
            <input 
              type="text" 
              className="w-full border border-gray-300 rounded-full px-3 py-3 mt-1 outline-none text-gray-700 text-xs"
              placeholder="Enter House Number" 
              value={houseNo}
              onChange={(e) => setHouseNo(e.target.value)}
            />
          </div>
          <div>
            <label className="text-gray-700 text-xs font-medium">Postal/Zip<span className="text-red-500">*</span></label>
            <input 
              type="text" 
              className="w-full border border-gray-300 rounded-full px-3 py-3 mt-1 outline-none text-gray-700 text-xs"
              placeholder="Enter Postal/Zip Code" 
              value={postalZip}
              onChange={(e) => setPostalZip(e.target.value)}
            />
          </div>
        </div>

        <div className="mt-6">
          <label className="text-gray-700 text-xs font-medium">City<span className="text-red-500">*</span></label>
          <input 
            type="text" 
            className="w-full border border-gray-300 rounded-full px-3 py-3 mt-1 outline-none text-gray-700 text-xs"
            placeholder="Enter City" 
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>

       

        <div className="grid grid-cols-2 gap-8 mt-6">
  <div>
    <label className="text-gray-700 text-xs font-medium">
      State/Province<span className="text-red-500">*</span>
    </label>
    <CustomDropdown
      options={["Lagos", "Abuja", "Kano"]}
      selected={state}
      setSelected={setState}
      placeholder="Select State/Province"
    />
  </div>

  <div>
    <label className="text-gray-700 text-xs font-medium">
      Country/Region<span className="text-red-500">*</span>
    </label>
    <CustomDropdown
      options={["Nigeria", "Ghana", "South Africa"]}
      selected={country}
      setSelected={setCountry}
      placeholder="Select Country"
    />
  </div>
</div>


      </div>

      <button
        className={`mt-6 px-4 py-2 rounded-full max-w-3xl w-full text-white text-sm font-medium transition-all ${
          isFormFilled ? "bg-orange-500 hover:bg-orange-600" : "bg-gray-300 cursor-not-allowed"
        }`}
        onClick={() => navigate("/business-setup5")}
        disabled={!isFormFilled}
      >
        Continue
      </button>
    </div>
  );
};

export default BusinessLocation;
