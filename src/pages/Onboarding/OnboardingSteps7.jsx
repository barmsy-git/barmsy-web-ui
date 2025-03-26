import React, { useContext } from "react";
import { HiArrowLeft } from "react-icons/hi";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FiTrash2, FiEdit2, FiEdit } from "react-icons/fi";
import logo from "../../../public/iconoir_organic-food.svg";
import myImage from "../../Assets/myImage.jpg";
import { useNavigate } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { GlobalStateContext } from "../../context/globalContext";

const BusinessProfile = ({ setPrevState, setCurrentState }) => {
  const { onboardingDetails, setOnboardingDetails } = useContext(GlobalStateContext);
  const navigate = useNavigate();

  console.log(onboardingDetails)

  return (
    <div>


      {/* Location Text */}
      <div className="flex items-center space-x-2 font-bold text-gray-300 text-xs">
        <FaMapMarkerAlt />
        <p>{onboardingDetails?.businessAddress}</p>
      </div>

      {/* Title and Description */}
      <h2 className="text-sm font-bold mt-2">Your business profile(s)</h2>
      <div style={{display:'flex',justifyContent:'center', alignItems:'center'}}>
      <p className="text-gray-500 text-xs mt-1 max-w-xs text-center">
        You can add more locations to create more business profiles in each of these locations.
      </p>
      </div>
   
      <br />

      {/* Business Profile Card */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        
        <div className="bg-white shadow-lg rounded-2xl p-6 text-center w-72 mt-6">
          <div className="flex flex-col items-center">


            {/* Placeholder for Profile Icon */}
            <br />
            <div className="h-14 w-14  rounded-full mb-3">
              <img
                src={onboardingDetails?.businessLogoView}
                alt="Business Logo"
                className="rounded-full flex-shrink-0 h-16 w-16 "
              />
            </div>
            <h3 className="text-base font-semibold mt-2">{onboardingDetails?.businessName}</h3>
            <p className="text-gray-500 text-xs">{onboardingDetails?.businessApplies.join(", ")}</p>
            <p className="text-gray-500 text-xs mt-3">
              {onboardingDetails?.businessDescr}
            </p>

            {/* <div className="flex justify-between items-center w-full px-4 mt-4">
            <button className="text-gray-600 bg-gray-200 text-xs px-4 py-2 rounded-full flex items-center">
              <MdDelete className="text-sm mr-1" /> Delete
            </button>

            <button className="text-orange-500">
              <FiEdit className="text-lg" />
            </button>
          </div> */}
          </div>
        </div>
      </div>


      {/* Bottom Section */}
      <div className="flex justify-end w-full max-w-lg mt-9">
        {/* <button className="text-orange-500 text-sm  font-semibold flex items-center"
          onClick={() => navigate("/business-setup6")}>
          + Add another profile
        </button> */}
        <button
          className="bg-orange-500 text-white text-xs py-2 px-6 rounded-full w-[20%]"
          onClick={() => {
            setCurrentState('billing')
            setPrevState("six")
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default BusinessProfile;
