import React from 'react'
import { useState } from "react";

function Features() {
    const [active, setActive] = useState("Analytics"); // Default active button

    const buttons = ["Analytics", "Table", "Kitchen", "Locations"];
  
    return (
      <section className="relative py-12 bg-white text-center">
        
        <h2 className="text-3xl font-bold text-gray-800">
          Made for <span className="text-orange-500">Everyone</span>
        </h2>
        <div className="inline-flex bg-gray-200 p-1 rounded-full mt-6 space-x-6">
        {buttons.map((btn) => (
          <button
            key={btn}
            onClick={() => setActive(btn)}
            className={`px-5 py-2 rounded-full transition-all text-xs duration-300 ${
              active === btn ? "bg-orange-500 text-white" : "bg-gray-200 text-gray-700"
            }`}
          >
              {btn}
            </button>
          ))}
        </div>
      </section>
    );

}
export default Features