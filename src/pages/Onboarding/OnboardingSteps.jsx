import React, { useState } from "react";
import { HiArrowLeft } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import logo from "../../../public/iconoir_organic-food.svg"

const OnboardingSteps = ({step1, step2, step3, step4, step5}) => {
  const [businessName, setBusinessName] = useState("");
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-6 pb-24 pt-8">
      {/* Logo */}
           <div className="flex justify-center  space-x-1 ">
        
               <img src={logo} alt="Barmsy Logo" className="h-10 text-orange-500" />
               <h1 className="text-3xl font-semibold  text-orange-500  ml-5">Barmsy</h1>
             </div>

  {/* Navigation & Progress Bar */}
      <div className="flex items-center w-full max-w-lg pt-12">
  
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

  <h2 className="text-2xl font-extrabold text-gray-900 text-center pt-24">
        Welcome! Let's set up your business
      </h2>

      <p className="text-gray-500 text-sm text-center mt-2 max-w-lg">
        Ut cras ut fames vitae venenatis risus auctor ullamcorper fringilla. Ut
        faucibus eu ipsum faucibus ipsum amet a mi cursus.
      </p>

      {/* Business Name Input */}
      <div className="text-left w-full max-w-2xl mt-16">
        <label className="block text-2xl text-center font-semibold text-gray-900 mb-2">
          What's your business name?
        </label>
        <div className="relative flex items-center border border-gray-300 rounded-full px-6 py-3 shadow-sm mt-8 w-full max-w-4xl">
  <span className="text-gray-500 text-xs">🏢</span>
  <input
    type="text"
    placeholder="Ex. CHARLES"
    className="w-full bg-transparent text-sm outline-none pl-4 text-gray-700"
    value={businessName}
    onChange={(e) => setBusinessName(e.target.value)}
  />
</div>


      </div>

      {/* Continue Button */}
      <button
        className="w-full max-w-2xl mt-6 bg-orange-500 text-white text-sm font-semibold py-3 rounded-full shadow-md hover:bg-orange-600 "
        onClick={() => navigate("/business-setup2")}
      >
        Continue
      </button>
    </div>
  );
};

export default OnboardingSteps;
