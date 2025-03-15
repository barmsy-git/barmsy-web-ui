import React, { useState } from "react";
import downArrow from "../../../Assets/downArrow.png";
import OrdersPage from "./Order";

const TableView = () => {
  return (
    <div className="pt-16 w-full h-screen bg-gray-100 flex items-center justify-center">
      <h1 className="text-2xl font-semibold">Table View Coming Soon...</h1>
    </div>
  );
};

const OrdersContainer = () => {
  const [selectedView, setSelectedView] = useState("Board");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div>
      <div className="flex justify-between items-center mb-4 px-4">
        <h1 className="text-xl font-bold">Orders</h1>
        <div className="relative">
          <button
            className="flex items-center gap-2 text-black font-semibold px-4 pl-8 pr-8 text-xs py-2 border rounded-full"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            {selectedView} <img src={downArrow} alt="" className="w-3 h-3" />
          </button>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-32 bg-white border rounded-md shadow-lg z-10">
              <button
                className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                onClick={() => {
                  setSelectedView("Board");
                  setIsDropdownOpen(false);
                }}
              >
                Board
              </button>
              <button
                className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                onClick={() => {
                  setSelectedView("Table");
                  setIsDropdownOpen(false);
                }}
              >
                Table
              </button>
            </div>
          )}
        </div>
        <button className="bg-orange-500 text-white px-5 py-2 text-xs rounded-full">New Order</button>
      </div>
      <hr className="-mt-2" />

      {/* Render View Based on Selection */}
      {selectedView === "Board" ? <OrdersPage /> : <TableView />}
    </div>
  );
};

export default OrdersContainer;
