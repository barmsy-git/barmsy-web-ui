import React, { useState } from "react";
import { HiArrowLeft } from "react-icons/hi";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FiUpload, FiTrash2 } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import logo from "../../../public/iconoir_organic-food.svg";

const CreateBusinessProfile = () => {
  const navigate = useNavigate();
  const [businessName, setBusinessName] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  // Button is disabled if category, description, or image is empty
  const isDisabled =  !description  || !businessName;

  // Handle file upload
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setImage(URL.createObjectURL(file)); // Preview uploaded image
    }
  };

  // Remove uploaded image
  const handleRemoveImage = () => {
    setImage(null);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full bg-white px-6 pb-20">
      {/* Logo Section */}
      <div className="flex justify-center space-x-1 pt-7">
        <img src={logo} alt="Barmsy Logo" className="h-10" />
        <h1 className="text-3xl font-semibold text-orange-500 ml-5">Barmsy</h1>
      </div>

      {/* Navigation & Progress Bar */}
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
                className={`border-t ${
                  step ? "border-orange-500" : "border-gray-300"
                } w-full`}
              ></div>
            ))}
          </div>
        </div>
      </div>

      {/* Location Text */}
      <div className="flex items-center space-x-2 text-gray-400 text-xs pt-7">
        <FaMapMarkerAlt />
        <p>No.23, Gilbon Street</p>
      </div>

      {/* Title and Subtitle */}
      <h2 className="text-lg font-bold mt-2">Let’s create your business profile</h2>
      <p className="text-gray-500 text-xs text-center max-w-sm">
        Ut eros et fames vitae venenatis risus auctor ullamcorper fringilla. Ut faucibus eu ipsum faucibus.
      </p>

      {/* Upload Section */}
      <div className="relative flex justify-center items-center mt-4">
        {/* Image Preview */}
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
          // Upload Button
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

      {/* Form Section */}
      <div className="w-full max-w-2xl mt-6">
        {/* Business Name */}
        <label className="text-xs text-black">Business Profile Name <span className="text-red-600">*</span></label>
        <input
          type="text"
        //   value={businessName}
        //   disabled
        placeholder="CITISTRO"
        onChange={(e) => setBusinessName(e.target.value)}
          className="w-full border rounded-full px-4 py-2  text-xs bg-white text-black  mt-1"

        />
        {/* cursor-not-allowed */}

        {/* Category Dropdown */}
        <label className="text-xs w-full m-w- text-black  mt-4 block">For <span className="text-red-600">*</span></label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full border rounded-full text-xs px-3 py-2 mt-1"
        >
          <option value="bar">Bar</option>
          <option value="restaurant">Restaurant</option>
          <option value="cafe">Food</option>
          
        </select>


{/* For checkBox */}
        {/* <div className="w-full mt-1">
  {["Bar", "Restaurant", "Cafe"].map((option) => (
    <label key={option} className="flex items-center space-x-2 text-xs">
      <input
        type="checkbox"
        value={option.toLowerCase()}
        checked={category.includes(option.toLowerCase())}
        onChange={(e) => {
          if (e.target.checked) {
            setCategory([...category, e.target.value]);
          } else {
            setCategory(category.filter((cat) => cat !== e.target.value));
          }
        }}
        className="rounded text-orange-500"
      />
      <span>{option}</span>
    </label>
  ))}
</div> */}


        {/* Description */}
        <label className="text-xs text-black mt-4 block">Description <span className="text-red-600">*</span></label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full border outline-none  rounded-3xl px-4 text-xs py-3 mt-1 h-28 resize-none"
          placeholder="Enter a short business description..."
        ></textarea>

        {/* Continue Button */}
        <button
          className={`mt-6 px-6 py-3 rounded-full w-full text-white text-sm font-medium transition-all ${
            isDisabled ? "bg-gray-300 cursor-not-allowed" : "bg-orange-500 hover:bg-orange-600"
          }`}
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
