import React, { useRef, useState, useEffect } from "react";
import { FiEdit } from "react-icons/fi";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import logo from "../../../public/iconoir_organic-food.svg";
import myImage from "../../Assets/myImage.jpg"
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoClose } from "react-icons/io5";




const plans = [
  { name: "Basic", category: "Bar", description: "For small businesses" },
  { name: "Enterprise", category: "Food", description: "For large businesses" },
  { name: "Business", category: "Restaurant & Bar", description: "For all sizes" },
  { name: "Premium", category: "Cafe", description: "Best for cafes" },
  { name: "Elite", category: "Fast Food", description: "For franchises" },
];


const StepEight = () => {
  const [showArrows, setShowArrows] = useState(plans.length > 3);
  const [scrollLeftVisible, setScrollLeftVisible] = useState(false);
  const [scrollRightVisible, setScrollRightVisible] = useState(true);
  const scrollRef = useRef(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState(null);


  
 const navigate = useNavigate();


  useEffect(() => {
    setShowArrows(plans.length > 3); // Update if plans change
  }, [plans]);

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
      scrollRef.current.scrollBy({ left: direction === "left" ? -350 : 350, behavior: "smooth" });
    }
  };

  const openModal = (profile) => {
    setSelectedProfile(profile);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedProfile(null);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen  bg-white px-6 pb-20">
         {/* Logo Section */}
         <div className="flex justify-center space-x-1 pb-4">
           <img src={logo} alt="Barmsy Logo" className="h-10" />
           <h1 className="text-3xl font-semibold text-orange-500 ml-5">Barmsy</h1>
         </div>
   
         {/* Navigation & Progress Bar */}
         <div className="flex items-center w-full max-w-lg mb-8">
           <HiArrowLeft
             className="text-gray-900 text-3xl cursor-pointer -ml-72"
             onClick={() => navigate(-1)}
           />
           <div className="flex w-full justify-end ml-64">
             <div className="grid grid-cols-5 gap-2 w-full">
               {[true, true, true, true, true].map((step, index) => (
                 <div
                   key={index}
                   className={`border-t ${
                     step ? "border-orange-500" : "border-gray-300"
                   } w-full`}
                 ></div>
               ))}
             </div>
           </div>
         </div>

       {/* Location Text */}
      <div className="flex items-center space-x-2 font-bold text-gray-300 text-xs">
        <FaMapMarkerAlt />
        <p>No.23, Gilbon Street</p>
      </div>
      <h2 className="text-xl font-bold text-gray-900 text-center pt-1">
        Your business profile(s)
      </h2>
      <p className="text-gray-500 text-xs text-center mt-2 max-w-2xl">
        You can add more locations to create more business profiles in each of these locations.
      </p>

      {/* Scrollable Cards Container */}
      <div className="relative w-full max-w-4xl mt-6">
        {showArrows && scrollLeftVisible && (
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-200 p-2 rounded-full shadow-md z-10"
          >
            <HiArrowLeft size={15} />
          </button>
        )}

        {/* Cards Section (Scrollable Without Visible Scrollbar) */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className={`flex space-x-7 ${
            showArrows ? "overflow-x-auto scroll-smooth no-scrollbar" : "justify-center"
          }`}
          style={{ width: "900px" }} // Only 3 cards show before scrolling
        >
          {plans.map((plan, index) => (
            <div
              key={index}
               className="flex flex-col items-center bg-white border border-gray-200 rounded-xl p-6 min-w-[280px] max-w-[280px] shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="h-16 w-16 bg-gray-300 rounded-full">
                <img
                    src={myImage}
                    alt="Business Logo"
                    className="rounded-full flex-shrink-0 h-16 w-16 "
                />
              </div>
              <h3 className="text-sm font-semibold mt-1">{plan.name}</h3>
              <p className="text-xs text-gray-300">{plan.category}</p>

              
              <p className="text-xs text-gray-500 text-center mt-2">{plan.description}</p>
              
              <div className="flex justify-between items-center w-full mt-4">
                <button className="flex items-center bg-gray-50 text-gray-700 text-xs font-medium py-2 px-4 rounded-full"
                 onClick={() => openModal(plan.name)}
                 >
                 <MdDelete className="text-xs mr-1" /> Delete
                </button>

                <button className="text-orange-500">
                 <FiEdit className="text-sm" />
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

      <div className="flex justify-between items-center w-full max-w-4xl mt-6 mx-auto">
      <button className="mt-6 text-orange-500 font-semibold text-sm hover:underline"
      onClick={() => navigate("/business-setup6")}>
        + Add another profile
      </button>

      <button className="mt-8 bg-orange-500 text-white text-xs font-semibold py-2 px-10 rounded-full "
      onClick={() => navigate("/business-setup9")}>
        Skip
      </button>



      {/* Delete Confirmation Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center">
          <div className="bg-white rounded-xl p-6 w-96 shadow-lg items-center ">
            {/* Close Button */}
            <div className="flex justify-end mb-7 -mt-2 -mr-2 ">
              <button onClick={closeModal} className="text-gray-400 hover:text-gray-600">
                <IoClose size={20} />
              </button>
            </div>

            {/* Modal Content */}
            <h3 className="text-sm font-medium  text-gray-900 text-center ">
              Are you sure you want to delete{" "}
              <span className="font-bold">{selectedProfile}</span>?
            </h3>

            {/* Modal Actions */}
            <div className="flex justify-between mt-10">
              <button
                onClick={closeModal}
                className="bg-gray-50 text-gray-700 text-xs font-medium py-2 px-6 rounded-full"
              >
                Yes, delete
              </button>

              <button
                onClick={closeModal}
                className="bg-orange-500 text-white text-xs w-32 font-medium py-2 px-6 rounded-full"
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
      </div>
    </div>
  );
};

export default StepEight;
