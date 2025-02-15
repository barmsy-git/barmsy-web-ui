import React from "react";
import { HiArrowLeft } from "react-icons/hi";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FiTrash2, FiEdit2, FiEdit } from "react-icons/fi";
import logo from "../../../public/iconoir_organic-food.svg";
import myImage from "../../Assets/myImage.jpg";
import { useNavigate } from "react-router-dom";
import { MdDelete } from "react-icons/md";

const BusinessProfile = () => {
    
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen  bg-white px-6 pb-18">
      {/* Logo Section */}
      <div className="flex justify-center space-x-1 pb-4">
        <img src={logo} alt="Barmsy Logo" className="h-10" />
        <h1 className="text-3xl font-semibold text-orange-500 ml-5">Barmsy</h1>
      </div>

      {/* Navigation & Progress Bar */}
      <div className="flex items-center w-full max-w-lg mb-8">
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
      <div className="flex items-center space-x-2 font-bold text-gray-300 text-xs">
        <FaMapMarkerAlt />
        <p>No.23, Gilbon Street</p>
      </div>

      {/* Title and Description */}
      <h2 className="text-sm font-bold mt-2">Your business profile(s)</h2>
      <p className="text-gray-500 text-xs mt-1 max-w-xs text-center">
        You can add more locations to create more business profiles in each of these locations.
      </p>

      {/* Business Profile Card */}
      <div className="bg-white shadow-lg rounded-2xl p-6 text-center w-72 mt-6">
        <div className="flex flex-col items-center">
          
        
          {/* Placeholder for Profile Icon */}
          
          <div className="h-14 w-14  rounded-full mb-3">
          <img
              src={myImage}
              alt="Business Logo"
              className="rounded-full flex-shrink-0 h-16 w-16 "
            />
          </div>
          <h3 className="text-base font-semibold mt-2">CITISTRO</h3>
          <p className="text-gray-500 text-xs">Bar</p>
          <p className="text-gray-500 text-xs mt-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          
          <div className="flex justify-between items-center w-full px-4 mt-4">
  {/* Delete Button - Left */}
  <button className="text-gray-600 bg-gray-200 text-xs px-4 py-2 rounded-full flex items-center">
    <MdDelete className="text-sm mr-1" /> Delete
  </button>

  {/* Edit Button - Right */}
  <button className="text-orange-500">
    <FiEdit className="text-lg" />
  </button>
</div>
</div>
      </div>

      {/* Bottom Section */}
      <div className="flex justify-between w-full max-w-lg mt-9">
        <button className="text-orange-500 text-sm  font-semibold flex items-center"
        onClick={() => navigate("/business-setup6")}>
          + Add another profile
        </button>
        <button
          className="bg-orange-500 text-white text-xs py-2 px-6 rounded-full w-[20%]"
          onClick={() => navigate("/business-setup8")}
        >
          Skip
        </button>
      </div>
    </div>
  );
};

export default BusinessProfile;
