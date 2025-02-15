import React from "react";
import { HiArrowLeft } from "react-icons/hi";
import { FaMapMarkerAlt } from "react-icons/fa";
import logo from "../../../public/iconoir_organic-food.svg";
import { useNavigate } from "react-router-dom";

const BusinessLocation = ({ step1, step2, step3, step4, step5 }) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full bg-white px-6 pb-60">
      {/* Logo Section */}
      <div className="flex justify-center space-x-1 pb-8">
        <img src={logo} alt="Barmsy Logo" className="h-10" />
        <h1 className="text-3xl font-semibold text-orange-500 ml-5">Barmsy</h1>
      </div>

      {/* Navigation & Progress Bar */}
      <div className="flex items-center w-full max-w-lg mb-24">
        <HiArrowLeft
          className="text-gray-900 text-3xl cursor-pointer -ml-72"
          onClick={() => navigate(-1)}
        />
        <div className="flex w-full justify-end ml-64">
          <div className="grid grid-cols-5 gap-2 w-full">
            {[step1, step2, step3, step4, step5].map((step, index) => (
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
{/* Business Location Card - Adjusted Left */}
<div className="bg-white shadow-lg rounded-2xl p-6 w-80 items-center ml-10">
  <div className="flex items-center space-x-2">
    <FaMapMarkerAlt className="text-black text-lg" />
    <h2 className="text-base font-semibold">No.23, Gilbon Street</h2>
  </div>
  <p className="text-gray-500 text-xs mt-2">
    Enter your business address to help customers find you.
  </p>
  
  {/* Left-Aligned Button */}
  <button
    className="bg-orange-500 text-white text-xs py-2 px-4 rounded-full mt-4 self-start"
    onClick={() => navigate("/business-setup6")}
  >
    Create Business Profile
  </button>
</div>
</div>
  );
};

export default BusinessLocation;
