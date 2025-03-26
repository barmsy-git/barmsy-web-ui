import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Tooltip, Legend);

const TrendingItems = () => {
  const data = {
    labels: ["01", "02", "03", "04", "05", "06"],
    datasets: [
      {
        label: "Last 6 days",
        data: [2.2, 2.5, 2.1, 2.6, 2.3, 2.8],
        borderColor: "#f97316",
        backgroundColor: "rgba(249, 115, 22, 0.2)",
        borderWidth: 2,
        pointRadius: 3,
        tension: 0, // ❌ No curves, straight lines
      },
      {
        label: "Last Week",
        data: [2.4, 2.6, 2.2, 2.7, 2.5, 2.9],
        borderColor: "#D1D5DB",
        backgroundColor: "rgba(209, 213, 219, 0.2)",
        borderWidth: 2,
        pointRadius: 3,
        tension: 0, // ❌ No curves, straight lines
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: {
      x: { grid: { display: false }, ticks: { font: { size: 10 } } },
      y: { grid: { display: false }, ticks: { display: false } },
    },
  };

  return (
    <div className="w-full">
      {/* Header */}
      <div className="flex justify-between items-center mb-3">
        <div>
          <h3 className="text-gray-500 text-[10px] font-semibold">Order</h3>
          <h2 className="text-lg font-semibold">2.568</h2>
          <p className="text-red-500 text-[10px] font-medium mt-1">
            🔻 2.1% <span className="text-gray-400 text-[10px]">vs last week</span>
          </p>
          <h2 className="text-gray-200 text-[8px] mt-2">Sales from 1-6 Dec, 2020</h2>
        </div>
        <button className="text-orange-500 font-semibold bg-orange-50 px-3 py-1 mb-16 text-[10px] rounded-sm hover:bg-orange-100">
          View Report
        </button>
      </div>

      {/* Line Chart */}
      <div className="w-full h-32">
        <Line data={data} options={options} />
      </div>

      {/* Legend */}
      <div className="flex justify-start mt-2 space-x-4 text-xs">
        <span className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span> Last 6 days
        </span>
        <span className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-gray-300"></span> Last Week
        </span>
      </div>
    </div>
  );
};

export default TrendingItems;
