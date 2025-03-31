import React from "react";
import { HiArrowLeft } from "react-icons/hi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { FiTrash2, FiLock } from "react-icons/fi";

<<<<<<< HEAD
const OrderDetails = ({setOpenOrder}) => {
  return (
    <div className="fixed top-0 left-0 w-full h-screen z-10">
      {/* Sidebar */}
      <div className="fixed top-0 left-0 min-h-full w-[30%] bg-white flex flex-col justify-between shadow-sm">
        {/* Header */}
        <div>
          <div className="flex items-center justify-between p-4 border-b">
=======
const OrderDetails = ({ setOpenOrder }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-screen z-10 overflow-hidden">
      {/* Sidebar */}
      <div className="fixed top-0 left-0 min-h-full w-[30%] bg-white flex flex-col justify-between shadow-sm overflow-y-auto">
        {/* Header */}
        <div>
          <div className="flex items-center justify-between p-4  pt-3 mb-5 border-b ">
>>>>>>> development branch
            <div className="flex items-center gap-3">
              <HiArrowLeft
                size={15}
                className="text-gray-600 cursor-pointer"
                onClick={() => setOpenOrder(false)}
              />
              <h2 className="text-sm font-medium">Table No. 23</h2>
            </div>
            <div className="flex items-center gap-2">
<<<<<<< HEAD
              <span className="bg-gray-100 text-gray-500 px-3 ml-2 py-1 rounded-full">
=======
              <span className="bg-gray-100 text-gray-500 px-3 mr-28 py-1 rounded-lg text-sm">
>>>>>>> development branch
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
<<<<<<< HEAD
          <div className="flex gap-4 px-4 py-4">
            <button className="flex items-center gap-2 px-4 py-2 bg-orange-50 text-orange-600 rounded-lg text-sm">
              🏠 Dine in
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-600 rounded-lg text-sm">
              ⏰ Schedule Order
            </button>
<<<<<<< HEAD
=======
=======
          <div className="flex flex-col gap-2 py-4  border-b mb-10">
          <div className="flex items-center justify-between gap-2 ">
            <button className=" bg-gray-100  text-gray-600 px-2 py-1 ml-3 rounded-xl text-xs  -mb-5">
              🏠 Dine in
            </button>
            <button >
             
              <FiTrash2 size={31} className="bg-gray-100 px-2  mr-3 rounded-lg" />
            </button>
>>>>>>> development branch
            </div>
            <div className="flex items-center pt-0  justify-between gap-2">
            <button className=" bg-gray-100 text-gray-600 px-2 py-1 ml-3 rounded-xl text-xs">
              ⏰ Schedule Order  
            </button>
<<<<<<< HEAD
            <FiLock size={31} className="bg-gray-100 px-2 mr-3  text-orange-500  rounded-full" />
            </div>
          
>>>>>>> dd5137a378139c8d2201269177ff4c31e493636a
          </div>

          {/* Food Section */}
          <div className="px-4">
            <h3 className="text-sm font-semibold text-gray-500 mb-2">FOOD</h3>
            <div className="flex justify-between items-start mb-4">
=======
            <FiLock size={31} className="bg-gray-100 px-2 mr-3  text-orange-600  rounded-full" />
            </div>
          
          </div>

          {/* Food Section */}
          <div className="px-4  border-b">
            <h3 className="text-xs font-semibold text-gray-300 mb-4">FOOD</h3>
            <div className="flex justify-between items-start mb-6">
>>>>>>> development branch
              <div>
                <p className="text-sm font-medium">Party Jollof Rice</p>
                <p className="text-xs text-gray-500">Plus: Sauce</p>
                <p className="text-xs text-gray-500">Plus: Stew</p>
              </div>
              <p className="text-sm font-medium">₦2,000</p>
<<<<<<< HEAD
            </div>
          </div>

          {/* Drinks Section */}
          <div className="px-4">
=======
              
            </div>
            
          </div>

          {/* Drinks Section */}
          <div className="px-4 border-b">
>>>>>>> development branch
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
<<<<<<< HEAD
          <div className="px-4 mt-6 border-t pt-4">
            <div className="flex justify-between text-sm mb-2">
=======
          <div className="px-4 mt-6  pt-4">
            <div className="flex justify-between text-sm mb-2 ">
>>>>>>> development branch
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
<<<<<<< HEAD
            <div className="flex justify-between text-sm font-semibold">
              <p>Total</p>
              <p>₦2,000</p>
            </div>
          </div>
=======
          
          </div>
        </div>
        <div className="border-b ml-2 py-0"></div>
        

        <div className="px-4 pt-4 mb-4">
        <div className="flex justify-between text-sm font-semibold">
              <p>Total</p>
              <p>₦2,000</p>
            </div>
>>>>>>> development branch
        </div>

        {/* Footer */}
        <div className="px-4 pb-4">
<<<<<<< HEAD
          <div className="flex justify-between items-center mb-4">
            <button className="text-red-500 p-2">
              <FiTrash2 size={18} />
            </button>
            <button className="text-gray-400 p-2">
              <FiLock size={18} />
            </button>
          </div>
=======
          
>>>>>>> development branch
          <button className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600">
            Pay Now (₦9,000)
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
<<<<<<< HEAD
=======

>>>>>>> development branch
