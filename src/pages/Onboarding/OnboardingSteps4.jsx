import React, { useState, useContext, useEffect } from "react";
import { HiArrowLeft } from "react-icons/hi";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io"; // Added arrow icon
import logo from "../../../public/iconoir_organic-food.svg";
import { useNavigate } from "react-router-dom";
import Location from "../../components/Location/Index"
import { GlobalStateContext } from "../../context/globalContext";
import onboardingService from "../../services/merchant-onboarding"
import { ThreeDots } from "react-loader-spinner";
const BusinessLocation = ({ setCurrentScreen, setPrevState,submittedDetails,getUserOnboardingStatus, updateMenuColorById }) => {
  const [selectedLocation, setSelectedLocation] = useState("")
  const { onboardingDetails, setOnboardingDetails } = useContext(GlobalStateContext);
  const [addressObj, setAddressObj] = useState({})
  const [city, setCity] = useState("")
  const [state, setState] = useState("")
  const [postalCode, setPostalCode] = useState("")
  const [houseNumber, setHouseNumber] = useState("")
  const [load, setLoad] = useState(false)
  const navigate = useNavigate();


  const validateInputs = () => {
    if (selectedLocation && onboardingDetails?.businessHouseNumber && onboardingDetails?.businessPostalCode && onboardingDetails?.businessCity && onboardingDetails?.businessState) {
      return true
    }
    else {
      return false
    }
  }


  const saveData = async () => {
    if (!city && !state && !postalCode && !houseNumber &&  !selectedLocation) {
      showMessage({
        type: 'error',
        message: "Fields are all required"
      })
      return;
    }
    setLoad(true)
    updateMenuColorById()
    const data = {
      "businessName": submittedDetails?.businessName,
      "businessCategories":  submittedDetails?.businessCategories,
      "businessLocations": [
        {
          "streetName":selectedLocation ? selectedLocation : null,
          "houseNumber": onboardingDetails.businessHouseNumber ?  onboardingDetails.businessHouseNumber : null,
          "postalCode": onboardingDetails?.businessPostalCode ? onboardingDetails?.businessPostalCode :  null,
          "city": onboardingDetails.businessCity ? onboardingDetails.businessCity : null,
          "stateOrProvince": onboardingDetails.businessState ? onboardingDetails.businessState : null,
          "country": "NIGERIA",
          "businessProfiles": [
            {
              "profileName": null,
              "description": null,
              "category": null,
              "logo": null,
              "selectedSubscription": null,
              "billingDetail": {
                "billingDate": null,
                "billingAmount": null,
                "billingCycle": null,
                "initiatedPayment": null
              }
            }
          ]
        }
      ]
    }

    try {
      const result = await onboardingService.saveOnboarding(data, "PENDING_SUMMARY_CONFIRMATION");
      if (result) {
        setLoad(false)
        getUserOnboardingStatus()

      }

    } catch (err) {
      setLoad(false)
     
    }
  }


  useEffect(() => {
    setOnboardingDetails((prevState) => ({
      ...prevState,
      businessHouseNumber: houseNumber,
      businessCity: city,
      businessState: state,
      businessPostalCode: postalCode
    }));
    console.log(city, state, postalCode, houseNumber)

  }, [city, state, postalCode, houseNumber])

  

  useEffect(() => {
    if(submittedDetails?.businessCategories){
      setSelectedLocation(submittedDetails?.streetName)
      setOnboardingDetails((prevState) => ({
        ...prevState,
        businessHouseNumber: submittedDetails?.houseNumber,
        businessCity: submittedDetails.city,
        businessState: submittedDetails.stateOrProvince,
        businessPostalCode: submittedDetails.postalCode
      }));
    }
  },[submittedDetails])




  return (
    <div>

      {/* Step 4 - Add Business Location */}
      <div className="text-center mt-10">
        <h2 className="text-base font-medium ">Add a Business Location</h2>
        <p className="text-gray-500 text-xs  mt-2">Enter your business address to help customers find you.</p>
      </div>

      {/* Location Input Field */}
      <div className="w-full max-w-lg mt-6">
        <label className="text-xs text-black">Street Address <span className="text-red-600">*</span></label>
        <div className="flex items-center border border-gray-300 rounded-full text-xs px-4 py-1 bg-white">
          <FaMapMarkerAlt className="text-gray-400 mr-2" />
          <Location setCurrentAddress={setSelectedLocation} setCity={setCity} setState={setState} setPostalCode={setPostalCode} setHouseNumber={setHouseNumber} />
        </div>
        <div className="mt-3">
          <label className="text-xs text-black">House Number <span className="text-red-600">*</span></label>
          <input
            type="text"
            //   value={businessName}
            //   disabled
            onChange={(e) => {
              setOnboardingDetails((prevState) => ({
                ...prevState,
                businessHouseNumber: e.target.value,
              }));
            }}
            value={onboardingDetails?.businessHouseNumber}
            className="w-full border rounded-full px-4 py-2  text-xs bg-white text-black  mt-1"

          />
        </div>

        <div className="mt-3">
          <label className="text-xs text-black">Postal Code <span className="text-red-600">*</span></label>
          <input
            type="text"
            //   value={businessName}
            //   disabled
            onChange={(e) => {
              setOnboardingDetails((prevState) => ({
                ...prevState,
                businessPostalCode: e.target.value,
              }));
            }}
            value={onboardingDetails?.businessPostalCode}
            className="w-full border rounded-full px-4 py-2  text-xs bg-white text-black  mt-1"

          />
        </div>
        <div className="mt-3">
          <label className="text-xs text-black">City <span className="text-red-600">*</span></label>
          <input
            type="text"
            //   value={businessName}
            //   disabled
            onChange={(e) => {
              setOnboardingDetails((prevState) => ({
                ...prevState,
                businessCity: e.target.value,
              }));
            }}
            value={onboardingDetails?.businessCity}
            className="w-full border rounded-full px-4 py-2  text-xs bg-white text-black  mt-1"

          />
        </div>
        <div className="mt-3">
          <label className="text-xs text-black">State/Province <span className="text-red-600">*</span></label>
          <input
            type="text"
            //   value={businessName}
            //   disabled
            onChange={(e) => {
              setOnboardingDetails((prevState) => ({
                ...prevState,
                businessState: e.target.value,
              }));
            }}
            value={onboardingDetails?.businessState}
            className="w-full border rounded-full px-4 py-2  text-xs bg-white text-black  mt-1"

          />
        </div>
      </div>

      {/* Continue Button */}
      <button
        className={`mt-6 px-4 py-2 rounded-full max-w-lg w-full text-white text-sm font-medium transition-all ${validateInputs() ? "bg-orange-500 hover:bg-orange-600" : "bg-gray-300 cursor-not-allowed"
          }`}
        onClick={() => {
          saveData()

        }} disabled={!validateInputs()}
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

export default BusinessLocation;
