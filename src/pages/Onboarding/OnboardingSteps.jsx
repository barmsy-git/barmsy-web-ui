import React, { useState, useContext, useEffect } from "react";
import { HiArrowLeft } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { GlobalStateContext } from "../../context/globalContext";
import onboardingService from "../../services/merchant-onboarding"
import { ThreeDots } from "react-loader-spinner";
import showMessage from "../../utils/toast";
const OnboardingSteps = ({ setCurrentScreen, setPrevState,submittedDetails,getUserOnboardingStatus, updateMenuColorById,currentStep }) => {
  const { onboardingDetails, setOnboardingDetails } = useContext(GlobalStateContext);
  const [load, setLoad] = useState(false)
  const navigate = useNavigate();
  const saveData = async () => {
    updateMenuColorById()
    if(!onboardingDetails?.businessName){
      showMessage({
        type: 'error',
        message: "Field is required"
      })
      return;
    }
    setLoad(true)
    const data = {
      "businessName": onboardingDetails?.businessName,
      "businessCategories": null,
      "businessLocations": [
        {
          "streetName": null,
          "houseNumber": null,
          "postalCode": null,
          "city": null,
          "stateOrProvince": null,
          "country": null,
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
      const result = await onboardingService.saveOnboarding(data, "PENDING_BUSINESS_CATEGORY_CHOICE");
      if (result) {
        setLoad(false)
        getUserOnboardingStatus()

      }

    } catch (err) {
      setLoad(false)
    }
  }



  useEffect(() => {
    if(submittedDetails?.businessName){
      setOnboardingDetails((prevState) => ({
        ...prevState,
        businessName: submittedDetails?.businessName,
      }));
    }
  },[submittedDetails])

  const steps = [
    "Business Name",
    "Business Categories",
    "Business Location",
    "Business Profile",
    "Subscription Plan",
    "Billing Details",
    "Summary",
  ];

  return (
    <div>
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
            value={onboardingDetails?.businessName}
            onChange={(e) => {
              setOnboardingDetails((prevState) => ({
                ...prevState,
                businessName: e.target.value,
              }));
            }}
          />
        </div>


      </div>

      {/* Continue Button */}
      <button
        className="w-full max-w-2xl mt-6 bg-orange-500 text-white text-center text-sm font-semibold py-3 rounded-full shadow-md hover:bg-orange-600 "
        onClick={() => {
          saveData()

        }
        }
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

export default OnboardingSteps;
