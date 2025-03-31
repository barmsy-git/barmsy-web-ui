import React, { useState } from "react";
import logo from "../../../public/iconoir_organic-food.svg";
import onboardingService from "../../services/merchant-onboarding"
import { ThreeDots } from "react-loader-spinner";
const OnboardingSummary = ({ info, submittedDetails, setCurrentScreen }) => {
  const [load, setLoad] = useState(false)
  const saveData = async () => {

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
         
        }
      ]
    }

    try {
      const result = await onboardingService.saveOnboarding(data, "PENDING_VERIFICATION");
      if (result) {
        setLoad(false)
        Cookie.set('barmsyUsertype', "PENDING")
        window.location.href = "/dashboard"


      }

    } catch (err) {
      setLoad(false)
    }
  }
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white w-[700px] p-8 rounded-lg shadow-lg">
        {/* Logo */}
        <div className="flex justify-center space-x-1 mb-8">

          <img src={logo} alt="Barmsy Logo" className="h-7" />
          <h1 className="text-xl font-semibold text-orange-500 ml-5 ">Barmsy</h1>

        </div>
        {/* Heading */}
        <h2 className="text-xl font-bold text-center mt-4">
          This is all you have set up
        </h2>
        <p className="text-gray-500 text-center text-[10px]">
          You can click on any one to cross-check your inputs
        </p>

        <div className="mt-6 space-y-3">
          <SummaryCard title={info?.businessName} subtitle="Your Business Name" info={info} />
          <SummaryCard title={info?.businessCategories} subtitle="Your Business Categories" info={info} />
          {info?.businessLocations[0]?.businessProfiles?.length > 0 &&
            <SummaryCard
              title="About your business"
              content={info?.businessLocations[0]?.businessProfiles[0]?.description}
              info={info}
              about={info}
            />}

          {info?.businessLocations[0]?.businessProfiles?.length > 0 &&

            <SummaryCard title="Payment plan" subtitle={info?.businessLocations[0]?.businessProfiles[0]?.selectedSubscription} info={info}
            />

          }
          <SummaryCard
            title="Address Details"
            content={info}
            address={info}
            info={info}
            isBilling
          />
          {info?.businessLocations[0]?.businessProfiles?.length > 0 &&

            <SummaryCard
              title="Business Profile"
              profile={info}
              info={info}
              isBilling
            />}
        </div>

        {/* Continue Button */}
        <button className="w-full bg-orange-500 text-white font-medium py-2 text-xs rounded-full mt-6" onClick={saveData}>
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
    </div>
  );
};

const SummaryCard = ({ title, subtitle, info, isLocation, isBilling, content, profile, address, about }) => {
  return (
    <div className="bg-white p-4 border border-gray-300 rounded-lg cursor-pointer hover:shadow-md transition">
      <div className="flex justify-between items-center" >
        <div>
          <h3 className="text-xs font-semibold">{title}</h3>
          {subtitle && <p className="text-[10px] text-gray-500">{subtitle}</p>}
        </div>
        <div onClick={() => {
          setCurrentScreen("PENDING_BUSINESS_NAME")
        }}>
          <span className="text-orange-500 "><i className="fa fa-edit"></i></span>
        </div>
      </div>

      <div className=" text-[10px] text-gray-600 ">

        <div className="mt-1 ml-3">
          <div className="flex justify-between items-center" >
            {about && <p className="font-medium -ml-2">  {info?.businessLocations[0]?.businessProfiles[0]?.description}</p>}

            <div onClick={() => {
              setCurrentScreen("PENDING_ADD_BUSINESS_PROFILES")
            }}>
            </div>
          </div>
          <div className="flex justify-between items-center" >
            {address &&
              <p className="font-medium -ml-2">  {info?.businessLocations[0]?.streetName}</p>}

          </div>

          {profile && info?.businessLocations[0]?.businessProfiles?.length > 0 &&

            <div className="flex justify-between items-center" >
              <ul className="text-xjs">
                <li className="flex items-center gap-1 text-gray-600 text-[10px]">
                  <div>Profile Name:</div>
                  {info?.businessLocations[0]?.businessProfiles[0]?.profileName}
                </li>
                <li className="flex items-center gap-1 text-gray-600 text-[10px]">
                  <div>Category</div>
                  {info?.businessLocations[0]?.businessProfiles[0]?.category}
                </li>


              </ul>
              <div>
                <span className="text-orange-500 text-4xl" onClick={() => {
                  setCurrentScreen("PENDING_ADD_BUSINESS_PROFILES")
                }}>→</span>
              </div>
            </div>}
        </div>



      </div>

    </div>
  );
};

export default OnboardingSummary;

