import { useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, PointElement, Tooltip, Legend, CategoryScale, LinearScale } from "chart.js";
import { FaChevronDown } from "react-icons/fa";

ChartJS.register(LineElement, PointElement, Tooltip, Legend, CategoryScale, LinearScale);

const RevenueChart = ({ merchant }) => {
  const [selectedFilter, setSelectedFilter] = useState("Monthly");
  const [selectedDataset, setSelectedDataset] = useState("All");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const allDatasets = {
    Monthly: [
      { label: "Total Revenue", data: [12_345_678, 22_567_890, 45_678_912, 34_567_890, 28_901_234, 22_567_890, 45_678_912], borderColor: "#FFA500", backgroundColor: "transparent", borderWidth: 1, pointRadius: 3, tension: 0.4 },
      { label: "Total Customers", data: [6_123_456, 18_987_654, 38_456_123, 27_654_321, 16_543_210, 22_567_890, 45_678_912], borderColor: "#4169E1", backgroundColor: "transparent", borderWidth: 1, pointRadius: 3, tension: 0.4 },
      { label: "ADV", data: [4_321_000, 11_678_234, 32_456_789, 22_567_123, 14_890_678, 19_234_567, 40_567_890], borderColor: "#008000", backgroundColor: "transparent", borderWidth: 1, pointRadius: 3, tension: 0.4 },
      { label: "Net Profit Margin", data: [3_210_000, 9_876_543, 27_654_987, 19_345_678, 12_678_901, 12_345_678, 28_901_234], borderColor: "#800080", backgroundColor: "transparent", borderWidth: 1, pointRadius: 3, tension: 0.4 },
    ],
    Weekly: [
      { label: "Total Revenue", data: [9_876_543, 19_234_567, 40_567_890, 31_789_456, 23_456_789, 9_876_543, 27_654_987], borderColor: "#FFA500", backgroundColor: "transparent", borderWidth: 1, pointRadius: 3, tension: 0.4 },
      { label: "Total Customers", data: [4_789_123, 14_678_901, 35_123_456, 23_567_890, 14_345_678, 7_432_109, 24_678_901], borderColor: "#4169E1", backgroundColor: "transparent", borderWidth: 1, pointRadius: 3, tension: 0.4 },
      { label: "ADV", data: [2_678_912, 9_345_678, 29_567_123, 18_901_234, 10_876_543, 19_234_567, 40_567_890], borderColor: "#008000", backgroundColor: "transparent", borderWidth: 1, pointRadius: 3, tension: 0.4 },
      { label: "Net Profit Margin", data: [1_567_890, 7_432_109, 24_678_901, 16_543_210, 9_234_567, 14_678_901, 35_123_456], borderColor: "#800080", backgroundColor: "transparent", borderWidth: 1, pointRadius: 3, tension: 0.4 },
    ],
    Today: [
      { label: "Total Revenue", data: [5_678_901, 12_345_678, 28_901_234, 19_876_543, 15_678_901, 29_567_123, 18_901_234], borderColor: "#FFA500", backgroundColor: "transparent", borderWidth: 1, pointRadius: 3, tension: 0.4 },
      { label: "Total Customers", data: [3_456_789, 10_987_654, 25_678_901, 16_789_012, 9_876_543, 29_567_123, 18_901_234], borderColor: "#4169E1", backgroundColor: "transparent", borderWidth: 1, pointRadius: 3, tension: 0.4 },
      { label: "ADV", data: [1_987_654, 7_654_321, 20_456_789, 13_567_890, 7_234_567, 19_234_567, 40_567_890], borderColor: "#008000", backgroundColor: "transparent", borderWidth: 1, pointRadius: 3, tension: 0.4 },
      { label: "Net Profit Margin", data: [987_654, 5_678_901, 15_345_678, 10_123_456, 5_678_901, 19_234_567, 40_567_890], borderColor: "#800080", backgroundColor: "transparent", borderWidth: 1, pointRadius: 3, tension: 0.4 },
    ],
  };


  const data = {

    labels: ["Mon", "Tue", "Wed", "Thurs", "Fri", "Sat", "Mon"],
    datasets: selectedDataset === "All" ? allDatasets[selectedFilter] : allDatasets[selectedFilter].filter((d) => d.label === selectedDataset),
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false, // Hide default legend
      },
    },
    scales: {
      x: {
        grid: {
          display: false, // ❌ Hide vertical grid lines
        },
        ticks: {
          color: "rgba(0, 0, 0, 0.3)", // Light faded text for X-axis labels
        },
      },
      y: {
        grid: {
          drawBorder: false, // Remove border line
          color: "rgba(200, 200, 200, 0.3)", // ✅ Light grid lines
          borderDash: [5, 5], // ✅ Shorter dashes (try changing to [8, 4] for different effects)
          tickBorderDash: [5, 5], // Ensures tick marks follow the dashed style
        },
        ticks: {
          color: "rgba(0, 0, 0, 0.3)", // Light faded Y-axis labels
        },
      },
    },
  };



  const formatNumber = (num) => {
    if (num >= 1_000_000_000) return (num / 1_000_000_000).toFixed(1) + " Billion"; // Convert to Billions
    if (num >= 1_000_000) return (num / 1_000_000).toFixed(1) + " Million"; // Convert to Millions
    if (num >= 1_000) return (num / 1_000).toFixed(1) + ""; // Convert to Thousands
    return num; // Return as is if below 1K
  };

  return (
    <div className="bg-white w-full">
      {/* KPI Title and Timeframe Selection in the Same Row */}
      {merchant ?
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xs
      font-semibold text-gray-800">Key Performance Indicator</h3>

            {/* Timeframe Selection and Dropdown Together */}
            <div className="flex items-center space-x-2 text-[10px]">
              {/* Dropdown for KPI Selection (Now Integrated with Timeframe) */}
              <div className="relative">
                <button
                  className="flex items-center bg-gray-100 px-4 py-2 rounded-full
             text-gray-700"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                  {selectedDataset} <FaChevronDown className="ml-2" />
                </button>

                {dropdownOpen && (
                  <div className="absolute left-0 mt-2 bg-white shadow-md rounded-lg w-36
            z-10">
                    {["All", "Total Revenue", "Total Customers", "ADV", "Net Profit Margin"].map((item) => (
                      <button
                        key={item}
                        className={`block px-4 py-2 w-full text-left hover:bg-gray-200 ${selectedDataset === item ? "bg-gray-300" : ""
                          }`}
                        onClick={() => {
                          setSelectedDataset(item);
                          setDropdownOpen(false);
                        }}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Timeframe Selection Buttons */}
              <div className="shadow-md bg-gray-100 rounded-full p-1
       ">
                {["Monthly", "Weekly", "Today"].map((filter) => (
                  <button
                    key={filter}
                    className={`px-2 py-1 rounded-full pl-3 pr-3
                 ${selectedFilter === filter ? "bg-white text-black" : " text-gray-700"
                      }`}
                    onClick={() => setSelectedFilter(filter)}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Chart */}
          <div className="h-64">
            <Line data={data} options={options} />
          </div>

          {/* Legends Below Chart */}
          <div className="mt-4 flex justify-start space-x-6 pl-16 
    ">
            {(selectedDataset === "All" ? allDatasets[selectedFilter] : allDatasets[selectedFilter].filter(d => d.label === selectedDataset))
              .map((dataset, index) => {
                const totalValue = dataset.data.reduce((a, b) => a + b, 0);

                return (
                  <div key={index} className="flex flex-col items-center text-center">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: dataset.borderColor }}></div>
                      <span className="text-[10px] text-gray-300">{dataset.label}</span>
                    </div>
                    <span className="text-[10px]
              font-bold text-gray-600">
                      {formatNumber(totalValue)}
                    </span>
                  </div>
                );
              })}
          </div>
        </div> :
        <div className="">
          <div>No Data Yet</div>
        </div>}
    </div>

  );

};

export default RevenueChart;
