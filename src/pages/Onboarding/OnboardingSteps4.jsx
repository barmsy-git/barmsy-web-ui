import React, { useState } from "react";
import { HiArrowLeft } from "react-icons/hi";
import { FaMapMarkerAlt } from "react-icons/fa";
import logo from "../../../public/iconoir_organic-food.svg"
import { useNavigate } from "react-router-dom";

const BusinessLocation = ({ step1, step2, step3, step4, step5 }) => {
  const navigate = useNavigate();
  
  // List of available locations
  const locations = [
    "Lagos, Nigeria", "Abuja, Nigeria", "Port Harcourt, Nigeria", "Kano, Nigeria",
    "Lagos, Nigeria", "Abuja, Nigeria", "Port Harcourt, Nigeria", "Kano, Nigeria",
    "Lagos, Nigeria", "Abuja, Nigeria", "Port Harcourt, Nigeria", "Kano, Nigeria",
    "Lagos, Nigeria", "Abuja, Nigeria", "Port Harcourt, Nigeria", "Kano, Nigeria",
    "Lagos, Nigeria", "Abuja, Nigeria", "Port Harcourt, Nigeria", "Kano, Nigeria",
    "Lagos, Nigeria", "Abuja, Nigeria", "Port Harcourt, Nigeria", "Kano, Nigeria",
   "Nigeria", "Kano, Nigeria",
    "Ibadan, Nigeria", "Enugu, Nigeria", "Benin City, Nigeria", "Kaduna, Nigeria",
    "Jos, Nigeria", "Warri, Nigeria", "Abeokuta, Nigeria", "Owerri, Nigeria"
  ];
  
  const [inputValue, setInputValue] = useState("");
  const [filteredLocations, setFilteredLocations] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState("");

  // Handle user typing in the input field
const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
  
    if (value.trim() === "") {
      setFilteredLocations([]);
      setSelectedLocation(""); // Reset selected location when input is empty
    } else {
      setFilteredLocations(
        locations.filter((location) =>
          location.toLowerCase().includes(value.toLowerCase())
        )
      );
    }
  };

  // Handle location selection from the list
  const handleSelectLocation = (location) => {
    setInputValue(location);
    setSelectedLocation(location);
    setFilteredLocations([]); // Hide dropdown after selection
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full bg-white px-6 pb-20">
    {/* Ensure body is also white */}
    {/* <style>{`body { background-color: white; }`}</style> */}
  
    {/* Logo Section */}
    <div className="flex justify-center space-x-1 pb-8">
      <img src={logo} alt="Barmsy Logo" className="h-10" />
      <h1 className="text-3xl font-semibold text-orange-500 ml-5">Barmsy</h1>
    </div>
  
    {/* Navigation & Progress Bar */}
    <div className="flex items-center w-full max-w-lg mb-24">
      <HiArrowLeft className="text-gray-900 text-3xl cursor-pointer -ml-72" onClick={() => navigate(-1)} />
      <div className="flex w-full justify-end ml-64">
        <div className="grid grid-cols-5 gap-2 w-full">
          {[step1, step2, step3, step4, step5].map((step, index) => (
            <div key={index} className={`border-t ${step ? "border-orange-500" : "border-gray-300"} w-full`}></div>
          ))}
        </div>
      </div>
    </div>
  
    {/* Step 4 - Add Business Location */}
    <div className="text-center mt-10">
      <h2 className="text-base font-medium ">Add a Business Location</h2>
      <p className="text-gray-500 text-xs  mt-2">Enter your business address to help customers find you.</p>
    </div>
  
    {/* Location Input Field */}
<div className="w-full max-w-lg mt-6">
  <div className="flex items-center border border-gray-300 rounded-full text-xs px-4 py-2 bg-white">
    <FaMapMarkerAlt className="text-gray-400 mr-2" />
    <input
      type="text"
      className="w-full outline-none bg-white"
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
        className="flex items-center px-4 py-2 cursor-pointer text-xs border-t hover:bg-gray-100" 
        onClick={() => handleSelectLocation(location)}
      >
        <FaMapMarkerAlt className="text-gray-400 mr-2" /> {/* Icon on the left */}
        <span>{location}</span>
      </li>
    ))}
  </ul>
)}

 

  
</div>
  
  {/* Continue Button */}
<button
  className={`mt-6 px-4 py-2 rounded-full max-w-lg w-full text-white text-sm font-medium transition-all ${
    selectedLocation ? "bg-orange-500 hover:bg-orange-600" : "bg-gray-300 cursor-not-allowed"
  }`}
  onClick={() => navigate("/business-setup5")}
  disabled={!selectedLocation}
>
  Continue
</button>
</div>
  
  );
};

export default BusinessLocation;
