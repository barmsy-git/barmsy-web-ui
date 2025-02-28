import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const OrderTime = () => {
  const data = {
    labels: ["Afternoon", "Evening", "Morning"],
    datasets: [
      {
        data: [40, 32, 28], // Order percentages
        backgroundColor: ["#FF7F50", "#FFA07A", "#FFCC80"], // Figma colors
        hoverBackgroundColor: ["#FF5722", "#FF7043", "#FFB74D"],
        borderWidth: 0, // No border for smooth look
      },
    ],
  };

  const options = {
    responsive: true,
    cutout: "70%", // Inner radius for donut effect
    plugins: {
      legend: { display: false }, // Hide default legend
      tooltip: {
        callbacks: {
          label: (tooltipItem) => {
            return `${tooltipItem.label}: ${tooltipItem.raw}%`;
          },
        },
      },
    },
  };

  return (
   
        <div className="bg-white p-5 rounded-lg shadow-md flex-1 min-w-[250px]">
      
      {/* Header */}
      <div className="flex justify-between ">
     <div className="text-[10px]">
     <h3 className="text-gray-700 font-semibold">Order Time</h3>
     <p className="text-gray-400 pt-2">From 1-6 Dec, 2024</p>
     </div>

      <button className="bg-orange-50 text-orange-500 font-semibold text-[10px] px-3 py-2 rounded-md hover:bg-orange-600">
          View Report
        </button>
      </div>

      {/* Donut Chart */}
      <div className="flex justify-center">
        <div className="w-24 h-24 -mb-5">
          <Doughnut data={data} options={options} />
        </div>
      </div>

      {/* Labels */}
      <div className="text-[10px] text-gray-600 space-y-1">
        <p>
          <span className="inline-block w-1 h-1 bg-[#FF7F50] mr-2"></span> Afternoon 40%
        </p>
        <p>
          <span className="inline-block w-1 h-1 bg-[#FFA07A] mr-2"></span> Evening 32%
        </p>
        <p>
          <span className="inline-block w-1 h-1 bg-[#FFCC80] mr-2"></span> Morning 28%
        </p>
      </div>

      {/* View Report Button */}
      <div className="mt-4">
        
      </div>
    </div>
  );
};

export default OrderTime;
