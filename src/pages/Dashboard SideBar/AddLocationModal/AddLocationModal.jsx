import React, { useState } from "react";
import { FiUpload } from "react-icons/fi"; // For upload icon
import { FaMapMarkerAlt } from "react-icons/fa"; // Location icon for input
import { IoIosArrowDown } from "react-icons/io";





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
  const [inputValue, setInputValue] = useState("");
  const [filteredLocations, setFilteredLocations] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [houseNo, setHouseNo] = useState("");
  const [postalZip, setPostalZip] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");

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

  const isButtonDisabled = !selectedLocation || !city || !state || !country;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
      <div className="bg-white p-8 rounded-xl shadow-lg w-[700px]">
        {/* Modal Header */}
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-medium text-gray-900 mx-auto mt-6">
            Add a business Location
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

        {/* Form Fields */}
        <div className=" space-y-2">
          {/* Street Name with Auto-Suggestions */}
          <div className="relative">
            <label className="text-gray-700 text-xs font-medium text-[10px]">Street<span className="text-red-500">*</span></label>
            <div className="flex items-center  border border-gray-300 rounded-full text-xs px-3 py-2 bg-white w-full">
              <FaMapMarkerAlt className="text-gray-400 mr-2" />
              <input
                type="text"
                className="w-full outline-none bg-white text-xs"
                placeholder="Ex. Lagos, Nigeria"
                value={inputValue}
                onChange={handleInputChange}
              />
            </div>

            {filteredLocations.length > 0 && (
              <ul className="w-full bg-white border border-gray-300 mt-1 rounded-lg shadow-md z-10 absolute">
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
          </div>

          <div className="grid grid-cols-2 gap-8">
          <div>
            <label className="text-gray-700 text-[10px] font-medium">House No.<span className="text-red-500">*</span></label>
            <input 
              type="text" 
              className="w-full border border-gray-300 rounded-full px-3 py-2 mt-1 outline-none text-gray-700 text-xs"
              placeholder="Enter House Number" 
              value={houseNo}
              onChange={(e) => setHouseNo(e.target.value)}
            />
          </div>
          <div>
            <label className="text-gray-700 text-[10px] font-medium">Postal/Zip<span className="text-red-500">*</span></label>
            <input 
              type="text" 
              className="w-full border border-gray-300 rounded-full px-3 py-2 mt-1 outline-none text-gray-700 text-xs"
              placeholder="Enter Postal/Zip Code" 
              value={postalZip}
              onChange={(e) => setPostalZip(e.target.value)}
            />
          </div>
        </div>

          {/* City Input */}
          <div>
            <label className="text-gray-700 text-[10px] font-medium">City<span className="text-red-500">*</span></label>
            <input 
              type="text" 
              className="w-full p-3  py-2 text-xs border rounded-full text-gray-600" 
              placeholder="Enter city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-2 gap-8 mt-6">

  <div className="text-[10px] py-2">
    <label className="text-gray-700 text-[10px] font-medium">
      State/Province<span className="text-red-500">*</span>
    </label>
    <CustomDropdown
      options={["Lagos", "Abuja", "Kano"]}
      selected={state}
      setSelected={setState}
      placeholder="Select State/Province"
    />
  </div>

  <div className="text-[10px] py-2 ">
    <label className="text-gray-700 text-[10px] font-medium">
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

        {/* Add Button */}
        <button 
          className={`w-full py-2 mt-6 rounded-full text-sm font-semibold transition ${
            isButtonDisabled ? "bg-gray-300 cursor-not-allowed" : "bg-orange-500 text-white hover:bg-orange-600"
          }`}
          disabled={isButtonDisabled}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default AddLocationModal;
