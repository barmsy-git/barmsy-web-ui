import React, { useEffect, useRef, useState } from "react";
import { FiUpload } from "react-icons/fi"; // For upload icon
import { FaMapMarkerAlt } from "react-icons/fa"; // Location icon for input
import { IoIosArrowDown } from "react-icons/io";
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
        className="w-full border border-gray-300 rounded-full px-3 py-2 mt-1 outline-none text-gray-700 text-xs cursor-pointer bg-white flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{selected ? selected : placeholder}</span>
        <IoIosArrowDown className={`text-gray-500 transition-transform ${isOpen ? "rotate-180 text-[10px]" : ""}`} />
      </div>

      {isOpen && (
        <div className="absolute w-full bg-white border border-gray-300 rounded-lg shadow-md mt-1 z-10">
          {options.map((option, index) => (
            <div
              key={index}
              className="px-3 py-2  text-gray-700 text-xs cursor-pointer hover:bg-gray-200"
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

const AddLocationModal = ({ onClose }) => {
  const [selectedImage, setSelectedImage] = useState(null);


//   const navigate = useNavigate();
  const [businessName, setBusinessName] = useState("");
  const [category, setCategory] = useState([]);
  const [description, setDescription] = useState("");
//   const [image, setImage] = useState(null);
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

  const isDisabled = !description || !businessName;

  const locations = [
    "Lagos, Nigeria", "Abuja, Nigeria", "Port Harcourt, Nigeria", "Kano, Nigeria",
    "Ibadan, Nigeria", "Enugu, Nigeria", "Benin City, Nigeria", "Kaduna, Nigeria",
    "Jos, Nigeria", "Warri, Nigeria", "Abeokuta, Nigeria", "Owerri, Nigeria"
  ];

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

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  const handleCategoryChange = (option) => {
    setCategory((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    );
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
      <div className="bg-white p-8 rounded-xl shadow-lg w-[700px]">
        {/* Modal Header */}
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-medium text-gray-900 mx-auto mt-6">
            Create another Business Profile
          </h2>
          <button className="text-gray-300 hover:text-gray-700 text-xl fixed top-12 right-80" onClick={onClose}>
            ✖
          </button>
        </div>

        {/* Modal Description */}
        <p className="text-gray-600 mt-2 text-xs text-center">
          Ut cras ut fames vitae venenatis risus auctor ullamcorper fringilla. Ut faucibus eu ipsum faucibus ipsum amet a mi cursus.
        </p>

        {/* Upload Picture Section */}
        <div className="mt-4 flex justify-center">
          <label
            htmlFor="upload"
            className="w-14 h-14 border border-gray-300 flex items-center justify-center rounded-full cursor-pointer transition"
          >
            {selectedImage ? (
              <img src={selectedImage} alt="Preview" className="w-full h-full rounded-full object-cover" />
            ) : (
              <FiUpload className="text-orange-500 text-xl" />
            )}
          </label>
          <input id="upload" type="file" accept="image/*" className="hidden" onChange={handleImageChange} />
        </div>

        <div className="w-full max-w-2xl mt-6">
        <label className="text-xs text-black">Business Profile Name <span className="text-red-600">*</span></label>
        <input
          type="text"
          placeholder="CITISTRO"
          onChange={(e) => setBusinessName(e.target.value)}
          className="w-full border rounded-full px-4 py-2 text-xs bg-white text-black mt-1"
        />

        <label className="text-xs w-full text-black mt-4 block">For <span className="text-red-600">*</span></label>
        <div className="relative" ref={dropdownRef}>
          <button
            className="w-full border rounded-full text-xs px-3 py-2 mt-1 text-left"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            {category.length > 0 ? category.join(", ") : "Select Categories"}
          </button>
          {dropdownOpen && (
            <div className="absolute w-full border mt-1 bg-white shadow-lg rounded-lg p-2 text-xs">
              {["Bar", "Restaurant", "Food"].map((option) => (
                <label key={option} className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={category.includes(option)}
                    onChange={() => handleCategoryChange(option)}
                    className="hidden peer"
                  />
                  <div className="w-3 h-3 border border-gray-400 flex items-center justify-center peer-checked:bg-orange-500 peer-checked:border-orange-500">
                    {category.includes(option) && (
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
                  <span className="text-black">{option}</span>
                </label>
              ))}
            </div>
          )}
        </div>

        <label className="text-xs text-black mt-4 block">Description <span className="text-red-600">*</span></label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full border outline-none rounded-3xl px-4 text-xs py-3 mt-1 h-28 resize-none"
          placeholder="Enter a short business description..."
        ></textarea>

        <button
          className={`mt-6 px-6 py-3 rounded-full w-full text-white text-sm font-medium transition-all ${isDisabled ? "bg-gray-300 cursor-not-allowed" : "bg-orange-500 hover:bg-orange-600"}`}
        //   onClick={() => navigate("/business-setup7")}
          disabled={isDisabled}
        >
          Continue
        </button>
      </div>


        {/* Add Button */}
        {/* <button 
          className={`w-full py-2 mt-6 rounded-full text-sm font-semibold transition ${
            isButtonDisabled ? "bg-gray-300 cursor-not-allowed" : "bg-orange-500 text-white hover:bg-orange-600"
          }`}
          disabled={isButtonDisabled}
        >
          Add
        </button> */}
      </div>
    </div>
  );
};

export default AddLocationModal;
