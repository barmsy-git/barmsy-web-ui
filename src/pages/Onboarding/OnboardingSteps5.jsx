import React, {useContext} from "react";
import { HiArrowLeft } from "react-icons/hi";
import { FaMapMarkerAlt } from "react-icons/fa";
import logo from "../../../public/iconoir_organic-food.svg";
import { useNavigate } from "react-router-dom";
import { GlobalStateContext } from "../../context/globalContext";

const BusinessLocation = ({ setCurrentScreen, setPrevState }) => {
  const { onboardingDetails, setOnboardingDetails } = useContext(GlobalStateContext);
  const navigate = useNavigate();

  return (
    <div>
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
          onClick={() => {
            setCurrentScreen("six")
            setPrevState("five")
          }}
        >
          Create Business Profile
        </button>
      </div>
    </div>
  );
};

export default BusinessLocation;
