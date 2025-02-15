import React from "react";
import { HiArrowLeft } from "react-icons/hi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { FiTrash2, FiLock } from "react-icons/fi";

const OrderDetails = ({ setOpenOrder }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-screen z-10 overflow-hidden">
      {/* Sidebar */}
      <div className="fixed top-0 left-0 min-h-full w-[30%] bg-white flex flex-col justify-between shadow-sm overflow-y-auto">
        {/* Header */}
        <div>
          <div className="flex items-center justify-between p-4  pt-3 mb-5 border-b ">
            <div className="flex items-center gap-3">
              <HiArrowLeft
                size={15}
                className="text-gray-600 cursor-pointer"
                onClick={() => setOpenOrder(false)}
              />
              <h2 className="text-sm font-medium">Table No. 23</h2>
            </div>
            <div className="flex items-center gap-2">
              <span className="bg-gray-100 text-gray-500 px-3 mr-28 py-1 rounded-lg text-sm">
                Sochima
              </span>
              <MdOutlineKeyboardArrowDown
                size={25}
                className="cursor-pointer bg-gray-100 rounded-md"
                onClick={() => setOpenOrder(false)}
              />
            </div>
          </div>

          {/* Order Type */}
          <div className="flex flex-col gap-2 py-4  border-b mb-10">
          <div className="flex items-center justify-between gap-2 ">
            <button className=" bg-gray-100  text-gray-600 px-2 py-1 ml-3 rounded-xl text-xs  -mb-5">
              🏠 Dine in
            </button>
            <button >
             
              <FiTrash2 size={31} className="bg-gray-100 px-2  mr-3 rounded-lg" />
            </button>
            </div>
            <div className="flex items-center pt-0  justify-between gap-2">
            <button className=" bg-gray-100 text-gray-600 px-2 py-1 ml-3 rounded-xl text-xs">
              ⏰ Schedule Order  
            </button>
            <FiLock size={31} className="bg-gray-100 px-2 mr-3  text-orange-600  rounded-full" />
            </div>
          
          </div>

          {/* Food Section */}
          <div className="px-4  border-b">
            <h3 className="text-xs font-semibold text-gray-300 mb-4">FOOD</h3>
            <div className="flex justify-between items-start mb-6">
              <div>
                <p className="text-sm font-medium">Party Jollof Rice</p>
                <p className="text-xs text-gray-500">Plus: Sauce</p>
                <p className="text-xs text-gray-500">Plus: Stew</p>
              </div>
              <p className="text-sm font-medium">₦2,000</p>
              
            </div>
            
          </div>

          {/* Drinks Section */}
          <div className="px-4 border-b">
            <h3 className="text-sm font-semibold text-gray-500 mb-2">DRINKS</h3>
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium">Mocha</p>
                <p className="text-xs text-gray-500">Plus: Aot Milk</p>
              </div>
              <p className="text-sm font-medium">₦2,000</p>
            </div>
          </div>

          {/* Pricing Breakdown */}
          <div className="px-4 mt-6  pt-4">
            <div className="flex justify-between text-sm mb-2 ">
              <p className="text-gray-600">Subtotal</p>
              <p className="text-gray-600">₦2,000</p>
            </div>
            <div className="flex justify-between text-sm mb-2">
              <p className="text-gray-600">Discount</p>
              <p className="text-gray-600">₦2,000</p>
            </div>
            <div className="flex justify-between text-sm mb-2">
              <p className="text-gray-600">Including VAT</p>
              <p className="text-gray-600">₦2,000</p>
            </div>
          
          </div>
        </div>
        <div className="border-b ml-2 py-0"></div>
        

        <div className="px-4 pt-4 mb-4">
        <div className="flex justify-between text-sm font-semibold">
              <p>Total</p>
              <p>₦2,000</p>
            </div>
        </div>

        {/* Footer */}
        <div className="px-4 pb-4">
          
          <button className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600">
            Pay Now (₦9,000)
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;

