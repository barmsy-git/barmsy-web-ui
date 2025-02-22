import React, { useState, useRef, useEffect } from "react";
import { HiArrowLeft } from "react-icons/hi";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FiUpload, FiTrash2 } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import logo from "../../../public/iconoir_organic-food.svg";

const CreateBusinessProfile = () => {
  const navigate = useNavigate();
  const [businessName, setBusinessName] = useState("");
  const [category, setCategory] = useState([]);
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
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

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleRemoveImage = () => {
    setImage(null);
  };

  const handleCategoryChange = (option) => {
    setCategory((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    );
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full bg-white px-6 pb-20">
      <div className="flex justify-center space-x-1 pt-7">
        <img src={logo} alt="Barmsy Logo" className="h-10" />
        <h1 className="text-3xl font-semibold text-orange-500 ml-5">Barmsy</h1>
      </div>

      <div className="flex items-center w-full max-w-lg pt-7">
        <HiArrowLeft
          className="text-gray-900 text-3xl cursor-pointer -ml-72"
          onClick={() => navigate(-1)}
        />
        <div className="flex w-full justify-end ml-64">
          <div className="grid grid-cols-5 gap-2 w-full">
            {[true, true, true, true, true].map((step, index) => (
              <div
                key={index}
                className={`border-t ${step ? "border-orange-500" : "border-gray-300"} w-full`}
              ></div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex items-center space-x-2 text-gray-400 text-xs pt-7">
        <FaMapMarkerAlt />
        <p>No.23, Gilbon Street</p>
      </div>

      <h2 className="text-lg font-bold mt-2">Let’s create your business profile</h2>
      <p className="text-gray-500 text-xs text-center max-w-sm">
        Ut eros et fames vitae venenatis risus auctor ullamcorper fringilla. Ut faucibus eu ipsum faucibus.
      </p>

      <div className="relative flex justify-center items-center mt-4">
        {image ? (
          <div className="relative">
            <img src={image} alt="Preview" className="h-16 w-16 rounded-full object-cover" />
            <button
              className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1"
              onClick={handleRemoveImage}
            >
              <FiTrash2 size={12} />
            </button>
          </div>
        ) : (
          <label className="cursor-pointer flex justify-center items-center bg-white border border-gray-300 rounded-full h-20 w-20">
            <FiUpload className="text-orange-500 text-3xl" />
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleFileChange}
            />
          </label>
        )}
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
          onClick={() => navigate("/business-setup7")}
          disabled={isDisabled}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default CreateBusinessProfile;
