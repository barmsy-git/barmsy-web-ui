import React from 'react'

const ProductStats = () => {
    const stats = [
      { icon: "∑", value: 234, label: "Total Products", color: "bg-blue-100 text-blue-500" },
      { icon: "⚖", value: 234, label: "Active", color: "bg-purple-100 text-purple-500" },
      { icon: "⬆", value: 234, label: "Top Served", color: "bg-yellow-100 text-yellow-500" },
      { icon: "⏳", value: 234, label: "Newly Added", color: "bg-green-100 text-green-500" },
    ];




      

  
    return (
      <div className="grid grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <div key={index} className="p-4 bg-white  py-4 shadow-md rounded-lg flex items-center space-x-4">
            <div className={`w-10 h-10 flex items-center justify-center rounded-full ${stat.color}`}>
              <span className="text-lg">{stat.icon}</span>
            </div>
            <div>
              <p className="text-xl font-semibold">{stat.value}</p>
              <p className="text-gray-500 text-sm">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>
    );



}


export default ProductStats