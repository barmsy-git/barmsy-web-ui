import { useState } from "react";
import { FaFire } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import image from "../../Assets/myImage.jpg"

const trendingData = [
  { id: 1, name: "Jollof Rice", price: "N2,000", orders: 250, change: 9.6, positive: true },
  { id: 2, name: "Jollof Rice", price: "N2,000", orders: 250, change: 9.6, positive: true },
  { id: 3, name: "Jollof Rice", price: "N2,000", orders: 250, change: 9.6, positive: true },
  { id: 4, name: "Jollof Rice", price: "N2,000", orders: 250, change: 9.6, positive: true },
  { id: 5, name: "Jollof Rice", price: "N2,000", orders: 250, change: -9.6, positive: false },
  { id: 6, name: "Jollof Rice", price: "N2,000", orders: 250, change: -9.6, positive: false },
];

const TrendingItems = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("Today");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handlePeriodChange = (period) => {
    setSelectedPeriod(period);
    setDropdownOpen(false);
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <h3 className="text-gray-700 font-semibold flex items-center text-xs
        ">
          <FaFire className="text-orange-500 mr-2" /> Trending Items
        </h3>

     
       

        {/* Dropdown */}
        <div className="relative">
          <button
            className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-[10px]
            flex items-center"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            {selectedPeriod} <IoIosArrowDown className="ml-1 text-orange-500
            " />
          </button>

          {dropdownOpen && (
            <ul className="absolute right-0 mt-2 bg-white shadow-lg rounded-md text-[10px]
             overflow-hidden w-28">
              {["Today", "Weekly", "Monthly"].map((period) => (
                <li
                  key={period}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handlePeriodChange(period)}
                >
                  {period}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <hr className="my-2 w-full border-gray-200" />

      {/* Trending Items List */}
      <div className="mt-4 space-y-3">
        {trendingData.map((item, index) => (
          <div key={item.id} className="flex items-center justify-between border-b pb-2">
            <span className="text-gray-600 text-sm">#{index + 1}</span>

            <div className="flex items-center flex-1 ml-3">
              <img
                src={image}
                alt={item.name}
                className="w-10 h-10 rounded-md object-cover mr-3"
              />
              <div>
                <p className="text-gray-700 font-medium text-sm">{item.name}</p>
                <p className="text-xs text-orange-500">{item.price}</p>
              </div>
            </div>

            <span className="text-gray-700 text-sm">{item.orders} Orders</span>

            {/* Forex-Style Trend Line */}
            <div className="flex items-center">
              <svg width="50" height="20" viewBox="0 0 50 20" xmlns="http://www.w3.org/2000/svg">
                <polyline
                  points={item.positive ? "0,15 10,10 20,12 30,5 40,8 50,2" : "0,5 10,10 20,7 30,15 40,12 50,18"}
                  fill="none"
                  stroke={item.positive ? "green" : "red"}
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>

              {/* Change Percentage */}
              <span className={`text-sm font-semibold ${item.positive ? "text-green-500" : "text-red-500"}`}>
                {item.positive ? `↑ ${item.change}%` : `↓ ${Math.abs(item.change)}%`}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingItems;
