import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const data = [
  { name: "Afternoon", value: 40, color: "#f97316", orders: 1890, time: "1pm - 4pm" },
  { name: "Evening", value: 32, color: "#fb923c", orders: 1520, time: "5pm - 9pm" },
  { name: "Morning", value: 28, color: "#fdba74", orders: 1320, time: "7am - 11am" },
];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const { name, orders, time } = payload[0].payload;
    return (
      <div className="bg-gray-800 text-white p-2 rounded-md shadow-md text-sm">
        <p className="font-semibold">{name}</p>
        <p className="text-xs">{time}</p>
        <p className="font-bold">{orders.toLocaleString()} orders</p>
      </div>
    );
  }
  return null;
};

const OrderTimeChart = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-gray-500 text-sm">Order Time</h3>
          <p className="text-gray-400 text-xs">From 1-6 Dec, 2024</p>
        </div>
        <button className="bg-orange-100 text-orange-500 text-xs px-3 py-1 rounded-md">View Report</button>
      </div>

      {/* Pie Chart */}
      <div className="flex justify-center mt-4 relative">
        <PieChart width={200} height={200}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={55}
            outerRadius={70}
            dataKey="value"
            stroke="none"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
        </PieChart>
      </div>

      {/* Legend */}
      <div className="mt-2 flex justify-center gap-4 text-xs text-gray-600">
        {data.map((item, index) => (
          <div key={index} className="flex items-center">
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }}></span>
            <span className="ml-1">{item.name}</span>
            <span className="ml-2 text-gray-400">{item.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderTimeChart;
