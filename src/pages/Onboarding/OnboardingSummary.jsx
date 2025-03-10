import React from "react";
import logo from "../../../public/iconoir_organic-food.svg";

const OnboardingSummary = () => {
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

        {/* Summary Sections */}
        <div className="mt-6 space-y-3">
          {/* Business Name */}
          <SummaryCard title="Sochima Onah" subtitle="Your Business Name" />

          {/* About Business */}
          <SummaryCard
            title="About your business"
            content={["Restaurant", "Bar", "Lounge"]}
          />

          {/* Payment Plan */}
          <SummaryCard title="Payment plan" subtitle="Enterprise; ₦2,000" />

          {/* Business Locations */}
          <SummaryCard
            title="Business location(s)"
            content={[
              {
                address: "23, Alien Way, Mars Station",
                profiles: ["Bar", "Food", "Restaurant"],
              },
              {
                address: "23, Alien Way, Mars Station",
                profiles: ["Bar", "Food"],
              },
              {
                address: "23, Alien Way, Mars Station",
                profiles: ["Restaurant"],
              },
            ]}
            isLocation
          />

          {/* Billing Details */}
          <SummaryCard
            title="Billing Details"
            content={[
              { label: "Address", value: "23, Alien Way, Mars Station" },
              {
                label: "Card Info",
                value: "Charles • 23355667899978, • 2/12",
              },
            ]}
            isBilling
          />
        </div>

        {/* Continue Button */}
        <button className="w-full bg-orange-500 text-white font-medium py-2 text-xs rounded-full mt-6">
          Continue
        </button>
      </div>
    </div>
  );
};

const SummaryCard = ({ title, subtitle, content, isLocation, isBilling }) => {
  return (
    <div className="bg-white p-4 border border-gray-300 rounded-lg cursor-pointer hover:shadow-md transition">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-xs font-semibold">{title}</h3>
          {subtitle && <p className="text-[10px] text-gray-500">{subtitle}</p>}
        </div>
        <span className="text-orange-500 text-4xl">→</span>
      </div>

      {/* Content Rendering */}
      {content && (
        <div className=" text-[10px] text-gray-600 ">
          {Array.isArray(content) ? (
            content.map((item, index) =>
              isLocation ? (
                <div key={index} className="mt-1 ml-3">
                  <p className="font-medium -ml-2">  <span className="text-black">•</span> {item.address}</p>
                  <p className="text-[10px] text-gray-500 mt-1">Business Profiles</p>
                  <ul className="text-xs">
                    {item.profiles.map((profile, i) => (
                      <li key={i} className="flex items-center gap-1 text-gray-600 text-[10px]">
                        <span className="text-black">•</span> Profile one {profile}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : isBilling ? (
                <div key={index} className="flex items-center gap-2 text-[10px]">
                  <span className="font-bold text-black">  <span className="text-black">•</span> {item.label}:</span> {item.value}
                </div>
              ) : (
                <li key={index} className="list-disc ml-4">
                  {item}
                </li>
              )
            )
          ) : (
            <p>{content}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default OnboardingSummary;
