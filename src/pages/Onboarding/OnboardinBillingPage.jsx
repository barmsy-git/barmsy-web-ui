import React, { useState, useContext, useEffect } from "react";
import { HiOutlineClock } from "react-icons/hi";
import logo from "../../../public/iconoir_organic-food.svg";
import myImage from "../../Assets/myImage.jpg"
import { useNavigate } from "react-router-dom";
import { GlobalStateContext } from "../../context/globalContext";
import { ThreeDots } from "react-loader-spinner";
import { formatCurrency, formatHumanDate } from "../../utils/helper"
import Cookie from 'js-cookie'
import onboardingService from "../../services/merchant-onboarding"
const BillingPage = ({ setCurrentScreen, setPrevState, getUserOnboardingStatus, submittedDetails }) => {
  const [showBillingForm, setShowBillingForm] = useState(false);
  const { onboardingDetails, setOnboardingDetails } = useContext(GlobalStateContext);
  const [subPlans, setSubPlans] = useState([])
  const [load, setLoad] = useState(false)
  

  const navigate = useNavigate();

  const saveData = async () => {

    console.log('data')
    setLoad(true)
    const data = {
      "businessName": submittedDetails?.businessName,
      "businessCategories": submittedDetails?.businessCategories,
      "businessLocations": [
        {
          "streetName": submittedDetails?.businessLocations[0]?.streetName,
          "houseNumber": submittedDetails?.businessLocations[0]?.houseNumber,
          "postalCode": submittedDetails?.businessLocations[0]?.postalCode,
          "city": submittedDetails?.businessLocations[0]?.city,
          "stateOrProvince": submittedDetails?.businessLocations[0]?.stateOrProvince,
          "country": "NIGERIA",
          "businessProfiles": [
            {
              "profileName": submittedDetails?.businessLocations[0]?.businessProfiles[0]?.profileName,
              "description": submittedDetails?.businessLocations[0]?.businessProfiles[0]?.description,
              "category": submittedDetails?.businessLocations[0]?.businessProfiles[0]?.category,
              "logo": submittedDetails?.businessLocations[0]?.businessProfiles[0]?.logo,
              "selectedSubscription": submittedDetails?.businessLocations[0]?.businessProfiles[0]?.selectedSubscription,
              "billingDetail": {
                "billingDate": findSubscription(submittedDetails?.businessLocations[0]?.businessProfiles[0]?.selectedSubscription,)?.billingCycle,
                "billingAmount": findSubscription(submittedDetails?.businessLocations[0]?.businessProfiles[0]?.selectedSubscription,)?.amount,
                "billingCycle":  findSubscription(submittedDetails?.businessLocations[0]?.businessProfiles[0]?.selectedSubscription,)?.cycle,
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

  const findSubscription = (subName) => {
    var subscription = subPlans?.find((x) => x.name === subName);
    return subscription
  }

  const getPlans = async () => {
    try {
      const result = await merchantService.getsubscription();
      setSubPlans(result?.result)

    } catch (err) {
      setLoadPage(false)
    }
  }


  useEffect(() => {
    getPlans()
  },[])


  return (
    <div className="min-h-screen flex flex-col items-center bg-white">
      {/* Header */}
      <div className="w-full bg-orange-500 py-6 text-center">
        <div className="flex items-center justify-center space-x-2">
          <img src={logo} alt="Barmsy Logo" className="h-8 filter brightness-0 invert" />
          <h1 className="text-white text-2xl font-semibold">Barmsy</h1>
        </div>
        <p className="text-white text-sm">Billing Information</p>
      </div>

      {/* Main Content */}

      <div className="bg-white p-6 rounded-lg max-w-6xl w-full flex items-start">
        {/* Left Section (Plans) */}
        <div className="w-full max-w-xs border rounded-lg p-6 bg-white shadow">
          <div className="flex justify-between items-center">
            <h2 className="text-gray-900 font-bold text-xs">Barmsy Free Trial</h2>
            <p className="text-gray-500 text-xs">N0.00</p>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            Lorem ipsum dolor sit amet consectetur. Urna id ultrices urna fringilla scelerisque viverra felis.
          </p>

          <hr className="my-4" />

          <div className="flex justify-between items-center">
            <h2 className="text-gray-900  text-xs font-bold">Paid Plan after Trial</h2>
            <p className="text-gray-500  text-xs">{formatCurrency(onboardingDetails?.subscriptionInfo?.price, "NGN")}</p></div>
          <p className="text-xs text-gray-500 mt-2">
            Lorem ipsum dolor sit amet consectetur. Urna id ultrices urna fringilla scelerisque viverra felis.
          </p>

          <hr className="my-4" />

          {/* Select Another Plan */}
          <button className="mt-16 mb-2 text-orange-500 font-semibold text-sm flex items-center space-x-1 hover:underline "
            onClick={() => {
              setCurrentScreen("PENDING_SUBSCRIPTION_SELECTION")
            }}>
            <span>←</span>
            <span>Select a different plan</span>
          </button>
        </div>

        {/* Right Section (Billing Details) */}
        <div className="w-full max-w-7xl p-12 -mt-12 ">
          <h2 className="text-gray-900 text-sm font-semibold w-full max-w-3xl">Confirm your payment details</h2>

          {/* Due Today Box */}
          <div className="mt-4 bg-orange-50 p-4 max-w-3xl px-9 pl-7 rounded-lg flex justify-between items-center">
            <span className="text-gray-900 text-sm font-medium">Due Today</span>
            <span className="text-gray-900 font-semibold">{formatCurrency(onboardingDetails?.subscriptionInfo?.price, "NGN")}</span>
          </div>



          {/* Payment Details */}
          <div className="mt-4 space-y-3">
            <div className="flex items-start space-x-2 text-gray-500 text-xs">
              <HiOutlineClock size={15} className="mt-1 text-gray-400" />
              <p>Lorem ipsum dolor sit amet consectetur. Urna id ultrices urna fringilla scelerisque viverra felis.</p>
            </div>
            <div className="flex items-start space-x-2 text-gray-500 text-xs">
              <HiOutlineClock size={15} className="mt-1 text-gray-400" />
              <p>You will be billed {formatCurrency(onboardingDetails?.subscriptionInfo?.price, "NGN")} per month starting from {formatHumanDate(onboardingDetails?.subscriptionInfo?.billingDate)}</p>
            </div>
          </div>
          {/* Bottom Navigation (See Full Pricing + Continue) */}
          <div className="w-full flex justify-between items-center mt-8 px-8 max-w-6xl">
            {/* See Full Pricing - Left-Aligned */}




            <button
              className={`w-full max-w-lg mt-6 text-white text-sm font-semibold py-3 rounded-full shadow-md 
           bg-orange-500 hover:bg-orange-600
        `}
              onClick={() => {
                saveData()
              }}>
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



          <hr className="my-4 mt-8" />
          {/* Show "Add Billing Information" Button if the form is not visible */}
          {/* {!showBillingForm && (
            <div className="mt-12">
              <button
                onClick={() => setShowBillingForm(true)}
                className="bg-orange-500 text-white py-2 text-xs px-4 pl-6 rounded-full font-semibold"
              >
                Add Billing Information
              </button>
            </div>
          )} */}

          {/* Billing Form */}
          {showBillingForm && (
            <>
              <h2 className="text-gray-900 text-sm font-semibold mt-4">Billing Information</h2>
              <div className="mt-3 flex items-center space-x-2">
                <div className="w-8 h-8 rounded-md">
                  <img src={myImage} alt="" className="rounded-md" />
                </div>
                <div className="flex flex-col">
                  <p className="text-gray-700 text-sm font-semibold">Sochima</p>
                  <span className="text-gray-500 text-xs">Business Account</span>
                </div>
              </div>

              {/* Billing Form */}
              <div className="mt-4 grid grid-cols-2 gap-4 text-xs">



                {/* First Name */}
                <div className="flex flex-col w-full">
                  <label className="text-xs font-medium text-black mb-1">
                    First name <span className="text-red-600">*</span>
                  </label>
                  <input type="text" placeholder="Charles" className="border p-2 rounded-full w-full text-xs" />
                </div>

                {/* Last Name */}
                <div className="flex flex-col w-full">
                  <label className="text-xs font-medium text-black mb-1">
                    Last name <span className="text-red-600">*</span>
                  </label>
                  <input type="text" placeholder="Okechukwu" className="border p-2 rounded-full w-full text-xs" />
                </div>

                {/* Address (Street, P.O. Box) */}
                <div className="flex flex-col w-full col-span-2">
                  <label className="text-xs font-medium text-black mb-1">
                    Address (Street, P.O. box) <span className="text-red-600">*</span>
                  </label>
                  <input type="text" placeholder="123 Main Street" className="border p-2 rounded-full w-full text-xs" />
                </div>

                {/* Address Line 2 (Optional) */}
                <div className="flex flex-col w-full col-span-2">
                  <label className="text-xs font-medium text-black mb-1">
                    Address Line 2 (Apartment, Suite, Unit)
                  </label>
                  <input type="text" placeholder="Apt 4B" className="border p-2 rounded-full w-full text-xs" />
                </div>

                {/* City */}
                <div className="flex flex-col w-full">
                  <label className="text-xs font-medium text-black mb-1">
                    City <span className="text-red-600">*</span>
                  </label>
                  <input type="text" placeholder="Lagos" className="border p-2 rounded-full w-full text-xs" />
                </div>

                {/* Country/Region */}
                <div className="flex flex-col w-full">
                  <label className="text-xs font-medium text-black mb-1">
                    Country/Region <span className="text-red-600">*</span>
                  </label>
                  <input type="text" placeholder="Nigeria" className="border p-2 rounded-full w-full text-xs" />
                </div>

                {/* State/Province */}
                <div className="flex flex-col w-full">
                  <label className="text-xs font-medium text-black mb-1">
                    State/Province <span className="text-red-600">*</span>
                  </label>
                  <input type="text" placeholder="Lagos State" className="border p-2 rounded-full w-full text-xs" />
                </div>

                {/* Postal/Zip Code */}
                <div className="flex flex-col w-full">
                  <label className="text-xs font-medium text-black mb-1">
                    Postal/Zip Code <span className="text-red-600">*</span>
                  </label>
                  <input type="text" placeholder="100001" className="border p-2 rounded-full w-full text-xs" />
                </div>
              </div>

              <hr className="my-6" />

              {/* Card Information */}
              <h2 className="text-gray-900 text-sm font-semibold mt-4">Card Information</h2>

              <div className="mt-4 grid grid-cols-2 gap-4 text-xs">

                {/* Name on Card */}
                <div className="flex flex-col w-full col-span-2">
                  <label className="text-xs font-medium text-black mb-1">
                    Name on Card <span className="text-red-600">*</span>
                  </label>
                  <input type="text" placeholder="Charles Okechukwu" className="border p-2 rounded-full w-full text-xs" />
                </div>

                {/* Card Number */}
                <div className="flex flex-col w-full col-span-2">
                  <label className="text-xs font-medium text-black mb-1">
                    Card Number <span className="text-red-600">*</span>
                  </label>
                  <input type="text" placeholder="**** **** **** ****" className="border p-2 rounded-full w-full text-xs" />
                </div>

                {/* CVV */}
                <div className="flex flex-col w-full">
                  <label className="text-xs font-medium text-black mb-1">
                    CVV <span className="text-red-600">*</span>
                  </label>
                  <input type="text" placeholder="123" className="border p-2 rounded-full w-full text-xs" />
                </div>

                {/* Expiration Date */}
                <div className="flex flex-col w-full">
                  <label className="text-xs font-medium text-black mb-1">
                    Expiration Date <span className="text-red-600">*</span>
                  </label>
                  <input type="text" placeholder="MM/YY" className="border p-2 rounded-full w-full text-xs" />
                </div>

              </div>


              {/* Save & Continue Button */}
              <div className="mt-8">
                <button
                  onClick={() => console.log("Proceeding with payment")}
                  className="bg-orange-500 text-xs text-white py-2 px-6 rounded-full font-semibold w-full"
                >
                  Save & Continue
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default BillingPage;