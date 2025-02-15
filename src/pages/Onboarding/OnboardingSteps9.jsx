import React, { useRef, useState, useEffect } from "react";
import { FiEdit } from "react-icons/fi";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import logo from "../../../public/iconoir_organic-food.svg";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { FaMapMarkerAlt } from "react-icons/fa";

const locations = [
  { address: "No.23, Ofulonu Street", profile: "1 profile" },
  {  address: "No.45, Independence", profile: "2 profiles"  },
  {  address: "No.12, Taoffek street", profile: "3 profiles" },
  { address: "No.89, Gbagada", profile: "4 profiles" },
  { address: "No.7, Ikeja", profile: "5 profiles"  },
];



const StepEight = () => {
  const [showArrows, setShowArrows] = useState(locations.length > 3);
  const [scrollLeftVisible, setScrollLeftVisible] = useState(false);
  const [scrollRightVisible, setScrollRightVisible] = useState(true);
  const scrollRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    setShowArrows(locations.length > 3); // Show arrows if more than 3 locations
  }, [locations]);

  const handleScroll = () => {
    if (scrollRef.current) {
      setScrollLeftVisible(scrollRef.current.scrollLeft > 0);
      setScrollRightVisible(
        scrollRef.current.scrollLeft < scrollRef.current.scrollWidth - scrollRef.current.clientWidth
      );
    }
  };

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: direction === "left" ? -250 : 250, behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-6 pb-24">
      {/* Logo Section */}
      <div className="flex justify-center space-x-1 pb-4">
        <img src={logo} alt="Barmsy Logo" className="h-10 filter invert brightness-0 " />
        <h1 className="text-3xl font-semibold text-orange-500 ml-5">Barmsy</h1>
      </div>

      {/* Navigation & Progress Bar */}
      <div className="flex items-center w-full max-w-lg mb-8">
        <HiArrowLeft className="text-gray-900 text-3xl cursor-pointer -ml-72" onClick={() => navigate(-1)} />
        <div className="flex w-full justify-end ml-64">
          <div className="grid grid-cols-5 gap-2 w-full">
            {[true, true, true, true, true].map((step, index) => (
              <div key={index} className={`border-t ${step ? "border-orange-500" : "border-gray-300"} w-full`}></div>
            ))}
          </div>
        </div>
      </div>

      {/* Location Header */}
      <div className="flex items-center space-x-2 font-bold text-gray-300 text-xs">
      <FaMapMarkerAlt />
             <p>No.23, Gilbon Street</p>
           </div>
           <h2 className="text-sm font-extrabold text-gray-900 text-center pt-1">
             Welcome! Lets set up your business
           </h2>
           <p className="text-gray-500 text-xs text-center mt-2 max-w-2xl">
             You can add more locations to create more business profiles in each of these locations.
           </p>

      {/* Scrollable Location Cards */}
      <div className="relative w-full max-w-4xl mt-6 flex justify-center">
        {showArrows && scrollLeftVisible && (
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-200 p-2 rounded-full shadow-md z-10"
          >
            <HiArrowLeft size={15} />
          </button>
        )}

        {/* Location Cards Section */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className={`flex space-x-4 ${showArrows ? "overflow-x-auto scroll-smooth no-scrollbar" : "justify-center"}`}
          style={{ width: "750px" }} // Ensures 3 cards show fully before scrolling
        >
          {locations.map((location, index) => (
            <div
              key={index}
              className="flex flex-col items-start bg-white border border-gray-200 rounded-lg p-4 min-w-[235px] max-w-[235px] shadow-md hover:shadow-lg transition-shadow duration-300"
            >
             
        <div className="flex">
        <FaMapMarkerAlt size={15} className="text-gray-400 mr-1" />
        <p className="text-sm text-gray-500 font-semibold text-center">{location.address}</p>
        </div>
              <h3 className="text-xs text-gray-400 mt-3 ">{location.profile}</h3>

              <div className="flex  w-full mt-6">
                 <button className="bg-orange-500 text-white text-[10px] font-semibold py-[2px] px-3 rounded-full">
                  Edit
                 </button>
               </div>
             </div>
          ))}
        </div>

        {showArrows && scrollRightVisible && (
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-200 p-2 rounded-full shadow-md z-10"
          >
            <HiArrowRight size={15} />
          </button>
        )}
      </div>

      {/* Footer Actions */}
      <div className="flex justify-between items-center w-full max-w-3xl mt-8 mx-auto">
        <button className="mt-6 text-orange-500 font-semibold text-sm ml-3 hover:underline" onClick={() => navigate("/business-setup4")}>
          + Add another location
        </button>

        <button className="mt-8 bg-orange-500 text-white text-xs font-semibold py-2 mr-6 px-10 rounded-full" onClick={() => navigate("/billing")}>
          Skip
        </button>
      </div>
    </div>
  );
};

export default StepEight;
