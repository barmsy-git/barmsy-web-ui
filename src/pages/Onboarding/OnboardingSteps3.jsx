
import React, { useState, useContext, useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { HiArrowLeft, HiChevronDown } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import tick from "../../Assets/tick.png"
import vector from "../../Assets/Vector.png"
import logo from "../../../public/iconoir_organic-food.svg"
import { useNavigate } from "react-router-dom";
import { GlobalStateContext } from "../../context/globalContext";
import merchantService from "../../services/merchant-service";
import { formatCurrency } from "../../utils/helper"
import onboardingService from "../../services/merchant-onboarding"
import showMessage from "../../utils/toast";
import Loader from "..//../components/Loader/Index"
import Cookie from 'js-cookie'
import { ThreeDots } from "react-loader-spinner";
const PlanModal = ({ isOpen, closeModal, plan, billingCycle }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
      <div className="bg-white rounded-xl p-6 w-full max-w-md shadow-lg">
        <div className="flex justify-end items-center mb-4">
          <button onClick={closeModal} className="text-gray-500">
            <IoClose size={24} />
          </button>
        </div>
        <div className="bg-white rounded-xl p-6 w-full max-w-lg shadow-xl">


          <div className="flex flex-col justify-between  border-b">
            <div className="flex justify-between items-center border-b pb-2">
              {/* Left side: Name & Description */}
              <div className="mb-5">
                <h3 className="text-xs font-bold text-gray-900">{plan.name}</h3>
                <p className="text-gray-700 text-xs">{plan.description}</p>
              </div>

              {/* Right side: Price */}
              <div className="flex items-end space-x-1">
                <h2 className="text-2xl font-bold text-black relative -top-1">{billingCycle === "annually" ? formatCurrency(plan.annualPrice, "NGN") : formatCurrency(plan.price, "NGN")}</h2>
                <span className="text-xs italic text-gray-500">/ per month</span>
              </div>

            </div>

          </div>

          <h4 className="text-xs font-semibold mt-4 text-gray-900">Features</h4>
          <ul className="mt-2 space-y-4 text-xs text-gray-700">
            {plan.features.map((feature, index) => (
              <li key={index} className="flex items-center space-x-2">
                <FaCheckCircle size={10} />
                <span>{feature?.name}</span>
              </li>
            ))}
          </ul>
          <button
            onClick={closeModal}
            className="bg-orange-500 text-white py-3 px-6 rounded-full text-xs w-full mt-4 hover:bg-orange-600"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

const StepThree = ({ setCurrentScreen, setPrevState,submittedDetails, getUserOnboardingStatus }) => {
  const navigate = useNavigate();
  const [selectedPlan, setSelectedPlan] = useState("Enterprise");
  const [billingCycle, setBillingCycle] = useState("monthly");
  const [expandedPlans, setExpandedPlans] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [plans, setPlans] = useState([])
  const [load, setLoad] = useState(false)
  const [loadPage, setLoadPage] = useState(true)
  const [modalPlan, setModalPlan] = useState(null);
  const [planInfo,setPlanInfo] = useState({})
  const { onboardingDetails, setOnboardingDetails } = useContext(GlobalStateContext);


  const openModal = (plan) => {
    setModalPlan(plan);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);


  const getPlans = async () => {
    try {
      const result = await merchantService.getsubscription();
      setPlans(result?.result)

    } catch (err) {
      setLoadPage(false)
    }
  }

  useEffect(() => {
    if (plans?.length > 0) {
      setLoadPage(false)
    }
  }, [plans])


  const saveDataSkip = async() => {
    if (!selectedPlan) {
      showMessage({
        type: 'error',
        message: "Fields are all required"
      })
      return;
    }
    setLoad(true)
    const data = {
      "businessName": submittedDetails?.businessName,
      "businessCategories":  submittedDetails?.businessCategories,
      "businessLocations": [
        {
        "streetName": submittedDetails?.businessLocations[0]?.streetName,
          "houseNumber": submittedDetails?.businessLocations[0]?.houseNumber,
          "postalCode": submittedDetails?.businessLocations[0]?.postalCode,
          "city":  submittedDetails?.businessLocations[0]?.city,
          "stateOrProvince": submittedDetails?.businessLocations[0]?.stateOrProvince,
          "country": "NIGERIA",
          "businessProfiles": [
            {
              "profileName": submittedDetails?.businessLocations[0]?.businessProfiles[0]?.profileName,
              "description":  submittedDetails?.businessLocations[0]?.businessProfiles[0]?.description,
              "category":  submittedDetails?.businessLocations[0]?.businessProfiles[0]?.category,
              "logo":  submittedDetails?.businessLocations[0]?.businessProfiles[0]?.logo,
              "selectedSubscription": selectedPlan === "Basic" ? "BASIC" : selectedPlan === "Standard" ? "STANDARD" : "PREMIUM",
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

  const saveData = async () => {
    if (!selectedPlan) {
      showMessage({
        type: 'error',
        message: "Fields are all required"
      })
      return;
    }
    setLoad(true)
    const data = {
      "businessName": submittedDetails?.businessName,
      "businessCategories":  submittedDetails?.businessCategories,
      "businessLocations": [
        {
        "streetName": submittedDetails?.businessLocations[0]?.streetName,
          "houseNumber": submittedDetails?.businessLocations[0]?.houseNumber,
          "postalCode": submittedDetails?.businessLocations[0]?.postalCode,
          "city":  submittedDetails?.businessLocations[0]?.city,
          "stateOrProvince": submittedDetails?.businessLocations[0]?.stateOrProvince,
          "country": "NIGERIA",
          "businessProfiles": [
            {
              "profileName": submittedDetails?.businessLocations[0]?.businessProfiles[0]?.profileName,
              "description":  submittedDetails?.businessLocations[0]?.businessProfiles[0]?.description,
              "category":  submittedDetails?.businessLocations[0]?.businessProfiles[0]?.category,
              "logo":  submittedDetails?.businessLocations[0]?.businessProfiles[0]?.logo,
              "selectedSubscription": selectedPlan === "Basic" ? "BASIC" : selectedPlan === "Standard" ? "STANDARD" : "PREMIUM",
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
      const result = await onboardingService.saveOnboarding(data, "PENDING_BILLING_INFORMATION");
      if (result) {
        setLoad(false)
        getUserOnboardingStatus()

      }

    } catch (err) {
      setLoad(false)
     
    }
  }



  useEffect(() => {
    getPlans()
  }, [])


  console.log(submittedDetails)



  return (
    <div>
      {loadPage &&
        <div className="" style={{ height: '50vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
          <Loader />
        </div>}


      {/* Title & Description */}
      {!loadPage &&
        <div>
          <h2 className="text-2xl font-bold text-gray-900 text-center pt-6">Choose your plan</h2>
          <p className="text-gray-500 text-xs text-center mt-2 max-w-2xl">
            Select from the best plan, ensuring a perfect match. Need more or less? Customize for a seamless fit!
          </p>

          {/* Billing Cycle  */}
          <div className="flex space-x-6 shadow-md bg-white rounded-3xl p-3 mt-6">
            <button
              className={`px-8 py-3 text-xs rounded-2xl font-semibold ${billingCycle === "monthly" ? "bg-orange-500 text-white" : "text-gray-700"
                }`}
              onClick={() => setBillingCycle("monthly")}
            >
              Monthly
            </button>
            <button
              className={`px-8 py-3 text-xs rounded-full font-semibold ${billingCycle === "annually" ? "bg-orange-500 text-white" : "text-gray-700"
                }`}
              onClick={() => setBillingCycle("annually")}
            >
              Annually
            </button>
          </div>

          {/* Plan Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 max-w-6xl">
            {plans?.map((plan) => (
              <div
                key={plan.name}
                className={`border rounded-2xl p-8 shadow-lg cursor-pointer w-80 h-auto transition-all duration-300 ${selectedPlan === plan.name ? "bg-orange-500 text-white scale-105" : "bg-white border-gray-300"
                  }`}
                onClick={() => {
                  setSelectedPlan(plan.name)
                  Cookie.set("plan-info",plan)
                  setPlanInfo(plan)
                  setOnboardingDetails((prevState) => ({
                    ...prevState,
                    businessPlan: plan.name,
                    subscriptionInfo:plan
                  }));
                }}
              >
                <h3 className="text-xl font-semibold">{plan.name}</h3>
                <p className="text-xs">{plan.description}</p>
                <h2 className="text-3xl font-semibold mt-6">
                  {billingCycle === "annually" ? formatCurrency(plan.annualPrice, "NGN") : formatCurrency(plan.price, "NGN")}
                  <span
                    className={`text-xs ${selectedPlan === plan.name ? "text-white" : "text-black"
                      }`}
                  >
                    / {billingCycle}
                  </span>
                </h2>


                <h4 className={`text-xs font-semibold mt-4 ${selectedPlan === plan.name ? "text-white" : "text-black"}`}>
                  Features
                </h4>

                <ul className="mt-6 text-xs space-y-3">
                  {plan.features.slice(0, 3).map((feature) => (
                    <li
                      key={feature}
                      className={`flex items-center space-x-2 ${selectedPlan === plan.name ? "text-white" : "text-black"
                        }`}
                    >
                      {/* Black by default, White when selected */}
                      <FaCheckCircle
                        size={10}
                        className={`${selectedPlan === plan.name ? "text-white" : "text-black"
                          }`}
                      />

                      <span>{feature?.name}</span>
                    </li>
                  ))}
                </ul>


                {/* More button to show additional features */}
                {expandedPlans[plan.name] && (
                  <ul className="mt-3 text-lg">
                    {plan.features.slice(3).map((feature) => (
                      <li key={feature} className="flex items-center space-x-2">
                        {/* <img src={tick} alt="" /> <span>{feature}</span> */}
                        <FaCheckCircle size={10} />
                      </li>
                    ))}
                  </ul>
                )}

                <button
                  onClick={() => openModal(plan)}
                  className="mt-4 bg-white flex justify-center text-black text-sm  px-24 py-2 rounded-full shadow-md"
                >
                  More <HiChevronDown size={22} />
                </button>
              </div>

            ))}
            <PlanModal isOpen={isModalOpen} closeModal={closeModal} plan={modalPlan} billingCycle={billingCycle} />
          </div>

          {/* Bottom Navigation (See Full Pricing + Continue) */}
          <div className="w-full flex justify-between items-center mt-8 px-8 max-w-6xl">
            {/* See Full Pricing - Left-Aligned */}



            {/* Continue Button - Right-Aligned */}
            <button
              className="bg-orange-500 text-white text-xs font-semibold py-4 px-10 rounded-full shadow-lg hover:bg-orange-600"
              onClick={() => {
                saveDataSkip()
                setOnboardingDetails((prevState) => ({
                  ...prevState,
                  businessPlan: "",
                }));
              }}
            >
              Skip
            </button>
            <button
              className="bg-orange-500 text-white text-xs py-2 px-6 rounded-full w-[20%]"
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
        </div>}
    </div>
  );
};

export default StepThree;
