import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { IoChevronDown } from "react-icons/io5";
import Calendar from "react-calendar"; // Import React Calendar
import "react-calendar/dist/Calendar.css"; // Default styles (we'll override them with Tailwind)

const locations = {
  "Location One": [40, 60, 20, 80, 50, 70, 90, 30, 60, 40, 80],
  "Location Two": [50, 40, 60, 20, 70, 50, 30, 80, 40, 70, 90],
  "Location Three": [30, 50, 40, 90, 20, 80, 60, 40, 70, 50, 30],
  "Location Four": [60, 30, 70, 50, 80, 40, 90, 20, 50, 80, 40],
};

const OrderVolume = ({merchantInfo}) => {
  const [selectedLocation, setSelectedLocation] = useState("All Locations");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dateRange, setDateRange] = useState(new Date());
  const [dateDropdownOpen, setDateDropdownOpen] = useState(false);
  const [chartData, setChartData] = useState(locations);


  const data = {
    labels: ["Mon", "Tue", "Wed", "Thurs", "Fri", "Sat", "Sun", "Mon", "Tue", "Wed", "Thurs"],
    datasets:
      selectedLocation === "All Locations"
        ? Object.keys(chartData).map((location, index) => ({
            label: location,
            data: chartData[location],
            borderColor: ["#5476DA", "#FDB44B", "#5DD39E", "#7A6FF0"][index],
            backgroundColor: "transparent",
            tension: 0.4,
            pointRadius: 3, // Smaller points
            borderWidth: 1, // Very thin line
            pointBackgroundColor: ["#5476DA", "#FDB44B", "#5DD39E", "#7A6FF0"][index],
          }))
        : [
            {
              label: selectedLocation,
              data: chartData[selectedLocation],
              borderColor: "#5476DA",
              backgroundColor: "transparent",
              tension: 0.4,
              pointRadius: 3, // Smaller points
              borderWidth: 1, // Very thin line
              pointBackgroundColor: "#5476DA",
            },
          ],
  };
  
  

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "right",
        labels: {
          font: {
            size: 8,
          },
          usePointStyle: true,
        },
      },
    },
    scales: {
      x: {
        grid: {
          color: "#EAEAEA", // Light gray color
          borderDash: [5, 5], // Dashed horizontal lines
          lineWidth: 0.5, // Thin lines
        },
      },
      y: {
        grid: {
          color: "#EAEAEA", // Light gray color
          borderDash: [5, 5], // Dashed vertical lines
          lineWidth: 0.5, // Thin lines
        },
      },
    },
  };
  

  const updateChartData = (selectedDate) => {
    console.log("Selected Date:", selectedDate);
  
    // Simulating new data for the selected date (replace with API )
    const updatedData = Object.keys(locations).reduce((acc, location) => {
      acc[location] = locations[location].map(value => value * (Math.random() * 0.5 + 0.75)); // Random variation
      return acc;
    }, {});
  
    // Update state
    setChartData(updatedData);
  };
  
  

  return (
    <div className="bg-white p-4 rounded-lg shadow-md w-full h-[300px]">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-gray-700 text-xs">Order Volume</h3>
        <div className="flex space-x-4 relative">

{/* Location Dropdown */}

<div className="relative -mr-3">
  <button
    onClick={() => {
      setDropdownOpen(!dropdownOpen);
      setDateDropdownOpen(false); // Close date dropdown when location dropdown is opened
    }}
    className="flex items-center text-gray-600 text-[10px] border border-gray-300 px-3 py-1 rounded-full"
  >
    {selectedLocation} <IoChevronDown className="ml-2 text-[10px] text-orange-500" />
  </button>
  {dropdownOpen && (
    <div className="absolute bg-white shadow-md rounded-lg mt-2 w-[130px]">
      {["All Locations", ...Object.keys(locations)].map((location) => (
        <button
          key={location}
          onClick={() => {
            setSelectedLocation(location);
            setDropdownOpen(false);
          }}
          className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-xs"
        >
          {location}
        </button>
      ))}
    </div>
  )}
</div>

{/* Calendar Dropdown */}
<div className="relative">
  <button
    onClick={() => {
      setDateDropdownOpen(!dateDropdownOpen);
      setDropdownOpen(false); // Close location dropdown when date dropdown is opened
    }}
    className="flex items-center text-gray-600 text-[10px] border border-gray-300 px-2 py-1 rounded-full"
  >
    {dateRange.toDateString()} <IoChevronDown className="ml-1 text-[10px] text-orange-500" />
  </button>

  {dateDropdownOpen && (
    <div className="absolute top-full mt-1 right-0 bg-white shadow-md rounded-md p-[2px] w-[120px] z-50">
      {/* Calendar Component */}
      <Calendar
        onChange={(date) => {
          setDateRange(date);
          setDateDropdownOpen(false);
          updateChartData(date);
        }}
        value={dateRange}
        className="w-full text-[8px] leading-tight"
        tileClassName="text-[2px] p-[0.5px] text-center leading-tight"
      />
    </div>
  )}
</div>


 </div>
      </div>

   {/* Chart */}
      <div className="h-[180px] w-[575px]
      ">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default OrderVolume; 