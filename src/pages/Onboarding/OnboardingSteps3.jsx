
import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { HiArrowLeft, HiChevronDown } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import tick from "../../Assets/tick.png"
import vector from "../../Assets/Vector.png"
import logo from "../../../public/iconoir_organic-food.svg"
import { useNavigate } from "react-router-dom";

const plans = [
  {
    name: "Basic",
    price: 0,
    description: "Best for personal use.",
    features: ["Employee directory", "Task management", "File storage", "Reporting and analytics"],
  },
  {
    name: "Enterprise",
    price: 2000,
    description: "For large teams & corporations.",
    features: ["Employee directory", "Task management", "File storage", "Reporting and analytics"],
  },
  {
    name: "Business",
    price: 5000,
    description: "Best for Business use.",
    features: ["Employee directory", "Task management", "File storage", "Reporting and analytics"],
  },
];

const PlanModal = ({ isOpen, closeModal, plan }) => {
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
  <h2 className="text-2xl font-bold text-black relative -top-1">N{plan.price}</h2>
  <span className="text-xs italic text-gray-500">/ per month</span>
</div>

</div>

</div>

        <h4 className="text-xs font-semibold mt-4 text-gray-900">Features</h4>
        <ul className="mt-2 space-y-4 text-xs text-gray-700">
  {plan.features.map((feature, index) => (
    <li key={index} className="flex items-center space-x-2">
      <FaCheckCircle size={10}/>
      <span>{feature}</span>
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

const StepThree = ({step1, step2, step3, step4, step5}) => {
  const navigate = useNavigate();
  const [selectedPlan, setSelectedPlan] = useState("Enterprise");
  const [billingCycle, setBillingCycle] = useState("per month");
  const [expandedPlans, setExpandedPlans] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalPlan, setModalPlan] = useState(null);

  const openModal = (plan) => {
    setModalPlan(plan);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-6 pb-20 pt-8">
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
      
      
        <div className="flex w-full justify-end ml-64 ">
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
     

      {/* Title & Description */}
      <h2 className="text-2xl font-bold text-gray-900 text-center pt-6">Choose your plan</h2>
      <p className="text-gray-500 text-xs text-center mt-2 max-w-2xl">
        Select from the best plan, ensuring a perfect match. Need more or less? Customize for a seamless fit!
      </p>

      {/* Billing Cycle  */}
      <div className="flex space-x-6 shadow-md bg-white rounded-3xl p-3 mt-6">
        <button
          className={`px-8 py-3 text-xs rounded-2xl font-semibold ${
            billingCycle === "monthly" ? "bg-orange-500 text-white" : "text-gray-700"
          }`}
          onClick={() => setBillingCycle("monthly")}
        >
          Monthly
        </button>
        <button
          className={`px-8 py-3 text-xs rounded-full font-semibold ${
            billingCycle === "annually" ? "bg-orange-500 text-white" : "text-gray-700"
          }`}
          onClick={() => setBillingCycle("annually")}
        >
          Annually
        </button>
      </div>

      {/* Plan Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 max-w-6xl">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`border rounded-2xl p-8 shadow-lg cursor-pointer w-80 h-auto transition-all duration-300 ${
              selectedPlan === plan.name ? "bg-orange-500 text-white scale-105" : "bg-white border-gray-300"
            }`}
            onClick={() => setSelectedPlan(plan.name)}
          >
            <h3 className="text-xl font-semibold">{plan.name}</h3>
            <p className="text-xs">{plan.description}</p>
            <h2 className="text-3xl font-semibold mt-6">
  N{billingCycle === "annually" ? plan.price * 12 : plan.price}
  <span 
    className={`text-xs ${
      selectedPlan === plan.name ? "text-white" : "text-black"
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
      className={`flex items-center space-x-2 ${
        selectedPlan === plan.name ? "text-white" : "text-black"
      }`}
    >
      {/* Black by default, White when selected */}
      <FaCheckCircle 
      size={10}
        className={`${
          selectedPlan === plan.name ? "text-white" : "text-black"
        }`}
      />

      <span>{feature}</span>
    </li>
  ))}
</ul>


            {/* More button to show additional features */}
            {expandedPlans[plan.name] && (
              <ul className="mt-3 text-lg">
                {plan.features.slice(3).map((feature) => (
                  <li key={feature} className="flex items-center space-x-2">
                     {/* <img src={tick} alt="" /> <span>{feature}</span> */}
                     <FaCheckCircle size={10}/>
                  </li>
                ))}
              </ul>
            )}
            
          <button
              onClick={() => openModal(plan)}
              className="mt-4 bg-white flex justify-center text-black text-sm  px-24 py-2 rounded-full shadow-md"
            >
              More <HiChevronDown size={22}  />
            </button>
          </div>
          
        ))}
             <PlanModal isOpen={isModalOpen} closeModal={closeModal} plan={modalPlan} />
      </div>

      {/* Bottom Navigation (See Full Pricing + Continue) */}
      <div className="w-full flex justify-between items-center mt-8 px-8 max-w-6xl">
        {/* See Full Pricing - Left-Aligned */}
        <a href="/pricing" className="text-orange-500 font-semibold text-sm hover:underline inline-flex items-center">
  See full Pricing 
  <img src={vector} alt="" className="h-4 w-4 ml-2 hover:underline" />
</a>


        {/* Continue Button - Right-Aligned */}
        <button
          className="bg-orange-500 text-white text-xs font-semibold py-4 px-10 rounded-full shadow-lg hover:bg-orange-600"
          onClick={() => navigate("/business-setup4")}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default StepThree;
