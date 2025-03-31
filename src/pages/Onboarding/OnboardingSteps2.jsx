import React, { useState, useContext, useEffect, useRef } from "react";
import { HiArrowLeft } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { GlobalStateContext } from "../../context/globalContext";
import onboardingService from "../../services/merchant-onboarding"
import showMessage from "../../utils/toast";
import { ThreeDots } from "react-loader-spinner";
const OnboardingSteps2 = ({ setCurrentScreen, setPrevState,submittedDetails,getUserOnboardingStatus,updateMenuColorById}) => {
  const navigate = useNavigate();
  const { onboardingDetails, setOnboardingDetails } = useContext(GlobalStateContext);
  const [load, setLoad] = useState(false)
  const options = ["Restaurant", "Bar", "Lounge", "Club"];
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const dropdownRef =  useRef(null)

  const handleCheckboxChange = (option) => {
    setSelectedOptions((prev) => {
      if (option === "All") {
        return prev.includes("All") ? [] : options;
      } else {
        const newSelected = prev.includes(option)
          ? prev.filter((item) => item !== option)
          : [...prev, option];
        
        if (newSelected.includes("All")) {
          return newSelected.filter(item => item !== "All");
        }
        
        return newSelected.length === options.length - 1 ? ["All", ...newSelected] : newSelected;
      }
    });
  
  };

  useEffect(() => {
    setOnboardingDetails((prevState) => ({
      ...prevState,
      businessApplies: selectedOptions,
    }));
  },[selectedOptions])

  const saveData = async () => {
    updateMenuColorById()
    if (onboardingDetails?.businessApplies?.length === 0) {
      showMessage({
        type: 'error',
        message: "Field is required"
      })
      return;
    }
    setLoad(true)
    const data = {
      "businessName": submittedDetails?.businessName,
      "businessCategories": onboardingDetails?.businessApplies?.join(","),
      "businessLocations": [
        {
          "streetName": null,
          "houseNumber": null,
          "postalCode": null,
          "city": null,
          "stateOrProvince": null,
          "country": null,
         
        }
      ]
    }

    try {
      const result = await onboardingService.saveOnboarding(data, "PENDING_ADD_BUSINESS_LOCATIONS");
      if (result) {
        setLoad(false)
        getUserOnboardingStatus()

      }

    } catch (err) {
      setLoad(false)
    }
  }



  // useEffect(() => {
  //   if(submittedDetails?.businessCategories){
  //     setOnboardingDetails((prevState) => ({
  //       ...prevState,
  //       businessApplies: submittedDetails?.businessCategories,
  //     }));
  //   }
  // },[submittedDetails])

  return (
    <div >
  

      <h2 className="text-2xl font-semibold text-gray-900 text-center mt-24">What is your business about?</h2>
      <p className="text-gray-500 text-xs text-center mt-2 max-w-md">If all apply, you can select multiple checkboxes.</p>

      <div className="relative w-full max-w-lg mt-6" ref={dropdownRef}>
        <button
          className="w-full border rounded-full text-xs px-3 py-2 text-left"
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          {selectedOptions.length > 0 ? selectedOptions.filter(option => option !== "All").join(", ") : "Select Categories"}
        </button>
        {dropdownOpen && (
          <div className="absolute w-full border mt-1 bg-white shadow-lg rounded-lg p-2 text-xs">
            {options.map((option) => (
              <label key={option} className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={selectedOptions.includes(option)}
                  onChange={() => handleCheckboxChange(option)}
                  className="hidden peer"
                />
                <div className="w-3 h-3 border border-gray-400 flex items-center justify-center peer-checked:bg-orange-500 peer-checked:border-orange-500">
                  {selectedOptions.includes(option) && (
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
                <span className="text-sm text-gray-700">{option}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      <button
        className={`w-full max-w-lg mt-6 text-white text-sm font-semibold py-3 rounded-full shadow-md 
          ${onboardingDetails?.businessApplies.length === 0 ? "bg-orange-200" : "bg-orange-500 hover:bg-orange-600"}
        `}
        disabled={onboardingDetails?.businessApplies.length === 0}
        onClick={() => {
          saveData()
        }}
      >
        {load ?
          <div style={{ display: 'flex', justifyContent: 'center', alignContent: 'center' }}>
            <ThreeDots
              visible={load}
              height="20"
              width="40"
              color="#fff"
              radius="9"
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              wrapperClass=""
            />
          </div>
          :
          <>
            Continue
          </>}
      </button>
    </div>
  );
};

export default OnboardingSteps2;
