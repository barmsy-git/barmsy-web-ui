import React, { useState } from "react";

const PricingPage = () => {
  const [billingCycle, setBillingCycle] = useState("monthly");

  const pricingPlans = {
    monthly: [
      { name: "Basic", price: "0.00", features: ["Employee directory", "Task management", "File storage", "Reporting and analytics"] },
      { name: "Enterprise", price: "2,000", features: ["Employee directory", "Task management", "File storage", "Reporting and analytics"] },
      { name: "Business", price: "5,000", features: ["Employee directory", "Task management", "File storage", "Reporting and analytics"] }
    ],
    annually: [
      { name: "Basic", price: "0.00", features: ["Employee directory", "Task management", "File storage", "Reporting and analytics"] },
      { name: "Enterprise", price: "20,000", features: ["Employee directory", "Task management", "File storage", "Reporting and analytics"] },
      { name: "Business", price: "50,000", features: ["Employee directory", "Task management", "File storage", "Reporting and analytics"] }
    ]
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-white p-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">Choose Your Plan</h1>
      <p className="text-gray-500 mb-6">Select the best plan that fits your needs.</p>

      {/* Billing Toggle */}
      <div className="flex space-x-2 mb-6">
        <button 
          className={`px-4 py-2 rounded-full ${billingCycle === "monthly" ? "bg-orange-500 text-white" : "bg-gray-200 text-gray-700"}`}
          onClick={() => setBillingCycle("monthly")}
        >
          Monthly
        </button>
        <button 
          className={`px-4 py-2 rounded-full ${billingCycle === "annually" ? "bg-orange-500 text-white" : "bg-gray-200 text-gray-700"}`}
          onClick={() => setBillingCycle("annually")}
        >
          Annually
        </button>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
        {pricingPlans[billingCycle].map((plan, index) => (
          <div key={index} className="border rounded-lg p-6 shadow-md text-center">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">{plan.name}</h2>
            <p className="text-orange-500 text-3xl font-bold mb-4">N{plan.price} <span className="text-sm">/ {billingCycle}</span></p>
            <ul className="text-gray-600 mb-4">
              {plan.features.map((feature, i) => (
                <li key={i} className="mb-1">✅ {feature}</li>
              ))}
            </ul>
            <button className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600">
              Choose {plan.name}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPage;