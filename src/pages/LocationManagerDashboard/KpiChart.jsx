import { useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const Revenue = () => {
  const [data] = useState({
    labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"],
    datasets: [
      {
        label: "Last 6 days",
        data: [500, 700, 550, 800, 750, 900, 650, 720, 810, 870, 920, 980],
        backgroundColor: "#f97316",
        borderRadius: 1,
        barThickness: 6, // Thinner bars
      },
      {
        label: "Last Week",
        data: [450, 680, 510, 750, 710, 850, 600, 690, 780, 820, 880, 940],
        backgroundColor: "#E5E7EB",
        borderRadius: 1,
        barThickness: 6, // Thinner bars
      },
    ],
  });

  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-4">
        <div>
          <h3 className="text-gray-500 text-xs">Revenue</h3>
          <h2 className="text-xl font-medium">N2 Trillion</h2>
          <p className="text-red-500 text-[10px] font-medium mt-1">
            🔻 2.1% <span className="text-gray-400 text-[10px">vs last week</span>
          </p>
        </div>
        <button className="text-orange-500 bg-orange-50 border font-semibold px-3 py-1 rounded-sm text-[10px] hover:bg-orange-100">
          View Report
        </button>
      </div>

      {/* Bar Chart */}
      <div className="flex-1 min-w-0 h-40">

      <Bar
  data={data}
  options={{
    responsive: true,
    maintainAspectRatio: false, // Ensures it resizes properly
    animation: { duration: 0 }, // Prevents lag during resizing
    resize: true, // Forces resizing when the parent container changes
    plugins: { legend: { display: false } },
    scales: {
      x: { grid: { display: false }, ticks: { font: { size: 12 } } },
      y: { grid: { display: false }, ticks: { display: false } },
    },
  }}
/>

      </div>

    <div className="flex justify-start mt-2">
    <span className="flex items-center gap-2 text-[10px]">
          <span className="w-2 h-2 rounded-full bg-orange-500 "></span> Last 6 days
        </span>
    <span className="flex items-center gap-2 text-[10px]">
          <span className="w-2 h-2 rounded-full bg-gray-200 ml-6"></span> Last Week
        </span>
    </div>
    </div>
  );
};

export default Revenue;
