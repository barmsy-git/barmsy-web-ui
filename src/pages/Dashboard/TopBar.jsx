import { useState } from "react";

import { IoNotificationsOutline, IoSearch } from "react-icons/io5";
import image from "../../Assets/myImage.jpg";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";



const Topbar = ({isCollapsed, setIsCollapsed}) => {
   
  return (
    <div className={`fixed top-0 right-0 h-[80px] z-50 bg-white shadow-sm p-4 flex justify-between items-center transition-all duration-300 ${
        isCollapsed ? "w-[calc(100%-4rem)] ml-16" : "w-[calc(100%-15rem)] ml-60"
      }`}>
      
      {/* Search Bar */}
      <div className="relative max-w-md w-full">

        <input 
          type="text" 
          placeholder="Search..." 
          className="w-full p-2 pl-10 border border-gray-300 rounded-full bg-gray-50 text-sm"/>
        <IoSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500" />

        <button
        className="absolute top-0 -left-8 bg-white p-2 rounded-full shadow-md border border-gray-300 hover:bg-gray-200 transition"
        onClick={() => setIsCollapsed(!isCollapsed)}
        >
          {isCollapsed ? <FaChevronRight size={8}/> : <FaChevronLeft size={8}/>}
        
      </button>
      </div>

     

      {/* Profile & Notifications */}
      <div className="flex items-center space-x-6">

        <div className="shadow-sm rounded-full flex items-center pl-2 pr-3 py-1 border border-gray-300
        ">
        <IoNotificationsOutline className="text-sm
         text-gray-600 cursor-pointer" />
        </div>
      
        <div className="flex items-center space-x-3 shadow-md rounded-full pl-2 pr-6 py-1 border border-gray-300
        ">
          <img src={image} alt="Profile" className="w-7 h-7 object-cover rounded-full" />
        
          <div>
            <h4 className="text-[10px] font-bold">Derek Alvarado</h4> 
            <p className="text-[8px]
            text-gray-500">Admin</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
