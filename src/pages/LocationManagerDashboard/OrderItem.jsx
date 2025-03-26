import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const OrderTime = () => {
  const data = {
    labels: ["Afternoon", "Evening", "Morning"],
    datasets: [
      {
        data: [40, 32, 28],
        backgroundColor: ["#FF8C00", "#FFA500", "#FFD580"],
        hoverOffset: 4,
      },
    ],
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-11">
        <div>
          <h3 className="text-gray-700 text-[10px]">Order Time</h3>
          <p className="text-[10px] text-gray-400 pt-2">From 1-6 Dec, 2024</p>
        </div>
        <button className="text-orange-500 border bg-orange-50 px-3 py-1 rounded-sm text-[10px] font-semibold hover:bg-orange-100">
          View Report
        </button>
      </div>

      {/* Doughnut Chart */}
      <div className="flex items-center justify-center w-full h-28">
        <Doughnut
          data={data}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: { display: false },
            },
            cutout: "70%", // Creates a ring effect
          }}
        />
      </div>

     {/* Labels */}
     <div className="flex justify-between text-xs text-gray-600 mt-9">
        <div className="flex flex-col justify-start text-[10px]">
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-orange-500"></span> Afternoon
          </span>
          <span className="text-gray-500">40%</span>
        </div>
        <div className="flex flex-col justify-start text-[10px]">
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-orange-400"></span> Evening
          </span>
          <span className="text-gray-500">32%</span>
        </div>
        <div className="flex flex-col justify-start text-[10px]">
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-orange-300"></span> Morning
          </span>
          <span className="text-gray-500">28%</span>
        </div>
      </div>


    </div>
  );
};

export default OrderTime;
