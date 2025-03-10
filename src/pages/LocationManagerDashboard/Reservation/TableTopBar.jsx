// import { IoFastFoodOutline } from "react-icons/io5"; // Example for "Dine in"
// import { MdOutlineTableRestaurant } from "react-icons/md"; // Example for "All Tables"
// import { FaRegClock } from "react-icons/fa"; // Example for "Available Soon"
// import { HiArrowRight } from "react-icons/hi";

// const Header = ({isCollapsed}) => {
    
//   return (
//     <>

// <div className="flex justify-between mt-16">
//   <h2 className="font-semibold text-xl">Table</h2>
//   <h2 className="flex justify-between text-white  bg-orange-500 rounded-full px-4  py-2 text-xs gap-2 cursor-pointer">Food Menu <span className="pt-1 "> <HiArrowRight size={8}/></span></h2> 
// </div>
//     <div className={` mt-3 flex items-center text-xs text-gray-900 w-full transition-all duration-300 
//   ${isCollapsed ? "justify-start space-x-4" : "justify-between space-x-6"}`}>
    
//    {/* All Tables */}
//    <div className="flex px-2 py-2 items-center space-x-6 -ml-2">
// <div className="flex items-center space-x-2 rounded-full border border-gray-300 bg-white px-2 py-1">
//   {/* Icon */}
//   <MdOutlineTableRestaurant className="text-gray-900 text-sm" />

//   {/* Label + Badge (in a row) */}
//   <span className="text-[10px] text-gray-900">All Tables</span>

//   {/* Badge */}
//   <span className="bg-orange-500 text-white text-[8px] w-4 h-4 flex items-center justify-center rounded-full">
//     20
//   </span>
//   </div>
//   <div className="flex items-center space-x-1">
//           <IoFastFoodOutline className="text-gray-500" />
//           <span>Dine In</span>
//           <span className="bg-orange-500 text-white text-[8px] w-4 h-4 flex items-center justify-center rounded-full">
//     2
//   </span>
//         </div>
//         <div className="flex items-center space-x-1">
//           <MdOutlineTableRestaurant className="text-gray-500" />
//           <span>Reservation</span>
//           <span className="bg-orange-500 text-white text-[8px] w-4 h-4 flex items-center justify-center rounded-full">
//     2
//   </span>
//         </div>
// </div>


//       {/* Other Filters */}
//       <div className="flex items-center space-x-6 text-xs text-gray-900 flex-nowrap overflow-hidden">
       


//         <div className="flex justify-between space-x-6 pl-10">
//         <div className="flex items-center space-x-1">
//           <span className="w-3 h-3 rounded-full bg-green-500"></span>
//           <span>Occupied</span>
//         </div>
//         <div className="flex items-center space-x-1">
//           <span className="w-3 h-3 rounded-full bg-pink-500"></span>
//           <span>Open Order</span>
//         </div>
//         <div className="flex items-center space-x-1">
//         <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
//           <span>Available Soon</span>
//         </div>
//         <div className="flex items-center space-x-1">
//           <span className="w-3 h-3 rounded-full bg-gray-400"></span>
//           <span>Not Occupied</span>
//         </div>
//         <div className="flex items-center space-x-1">
//           <FaRegClock className="text-gray-500" />
          
//         </div>
//         </div>
//       </div>
   
//     </div>
//     <hr />
//     </>
    
//   );
// };

// export default Header;


import { useState, useRef, useEffect } from "react";
import { IoFastFoodOutline } from "react-icons/io5";
import { MdOutlineTableRestaurant } from "react-icons/md";
import { FaRegClock } from "react-icons/fa";
import { HiArrowDown, HiArrowLeft, HiArrowRight, HiX } from "react-icons/hi";
import rightArrow from "../../../Assets/rightArrow.png"
import leftArrow from "../../../Assets/leftArrow.png"
import downArrow from "../../../Assets/downArrow.png"
import whiteRightArrow from "../../../Assets/whiteRightArrow.png"

const Header = ({ isCollapsed }) => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const formRef = useRef(null);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const reservations = [
    { name: "Onah Sochim", amount: "N2,000", persons: "2 Persons" },
    { name: "John Doe", amount: "N3,500", persons: "3 Persons" },
    { name: "Jane Smith", amount: "N5,000", persons: "4 Persons" },
    { name: "Onah Sochim", amount: "N2,000", persons: "2 Persons" },
    { name: "John Doe", amount: "N3,500", persons: "3 Persons" },
    { name: "Jane Smith", amount: "N5,000", persons: "4 Persons" },
    { name: "Onah Sochim", amount: "N2,000", persons: "2 Persons" },
    { name: "John Doe", amount: "N3,500", persons: "3 Persons" },
  
  ];

  // Close form if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (formRef.current && !formRef.current.contains(event.target)) {
        setIsFormOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <div className="flex justify-between mt-16 relative">
        <h2 className="font-semibold text-xl">Table</h2>

        {/* Food Menu Button */}
        <div className="relative">
          <h2
            className="flex justify-between text-white bg-orange-500 rounded-full px-4 py-2 text-xs gap-2 cursor-pointer"
            onClick={() => setIsFormOpen(!isFormOpen)}
          >
            Food Menu
            <span className=" text-white">
              {/* <HiArrowRight size={8} /> */}
              <img src={whiteRightArrow} alt="" className="text-white h-3 w-4 pt-1" />
            </span>
          </h2>
        </div>
        
      </div>
      <hr className="mt-2" />

      <div
        className={`mt-3 flex items-center text-xs text-gray-900 w-full transition-all duration-300 ${
          isCollapsed ? "justify-start space-x-4" : "justify-between space-x-6 border-b"
        }`}
      >
       
        {/* All Tables */}
        <div className="flex px-2 py-2 items-center space-x-6 -ml-2 -mt-2  ">
          <div className="flex items-center space-x-2 rounded-full border border-gray-300 bg-white px-2 py-1">
            <MdOutlineTableRestaurant className="text-gray-900 text-sm" />
            <span className="text-[10px] text-gray-900">All Tables</span>
            <span className="bg-orange-500 text-white text-[8px] w-4 h-4 flex items-center justify-center rounded-full">
              20
            </span>
          </div>
          <div className="flex items-center space-x-1">
            <IoFastFoodOutline className="text-gray-500" />
            <span className="text-[10px] text-gray-900">Dine In</span>
            <span className="bg-orange-500 text-white text-[8px] w-4 h-4 flex items-center justify-center rounded-full">
              2
            </span>
          </div>
          <div className="flex items-center space-x-1">
            <MdOutlineTableRestaurant className="text-gray-500" />
            <span className="text-[10px] text-gray-900">Reservation</span>
            <span className="bg-orange-500 text-white text-[8px] w-4 h-4 flex items-center justify-center rounded-full">
              2
            </span>
          </div>
        </div>

        {/* Other Filters - Adjust left when form is open */}
        <div
          className={`flex items-center space-x-6 text-xs text-gray-900 flex-nowrap overflow-hidden transition-all duration-300 ${
            isFormOpen ? "translate-x-[-200px]" : "translate-x-0"
          }`}
        >
          <div className="flex justify-between space-x-6 pl-10">
            <div className="flex items-center space-x-1">
              <span className="w-3 h-3 rounded-full bg-green-500"></span>
              <span>Occupied</span>
            </div>
            <div className="flex items-center space-x-1">
              <span className="w-3 h-3 rounded-full bg-pink-500"></span>
              <span>Open Order</span>
            </div>
            <div className="flex items-center space-x-1">
              <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
              <span>Available Soon</span>
            </div>
            <div className="flex items-center space-x-1">
              <span className="w-3 h-3 rounded-full bg-gray-400"></span>
              <span>Not Occupied</span>
            </div>
            <div className="flex items-center space-x-1">
              <FaRegClock className="text-gray-500" />
            </div>
          </div>
         
        </div>

        
      </div>
      

      {/* Inline Dropdown Form */}
      {isFormOpen && (
        <div
        ref={formRef}
        className="absolute right-0 -mt-12 w-60 max-h-screen bg-white shadow-lg rounded-2xl p-3 z-40 transition-all duration-300 flex flex-col"
      >
      
          {/* Close Button */}
          <div className="flex justify-between items-center  pb-2">
            <button> <img src={rightArrow} alt="" className="text-black h-2 w-2"/></button>
           <div className="flex flex-col">
           <h2 className="flex justify-center text-xs font-bold gap-1">Today <span className="text-orange-500 "><img src={downArrow} alt="" className="h-3 w-3" /></span></h2>
           <div className="text-[6px] text-gray-500">8th March 2025</div>
           </div>
            <button onClick={() => setIsFormOpen(false)}>
            <button> <img src={leftArrow} alt="" className="text-black h-2 w-2 mb-1"/></button>
            </button>
          </div>

          {/* Search Bar */}
          <div className="mb-1">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-2 pr-3 border rounded-full text-xs bg-gray-100"
            />
            <h2 className="text-[8px] font-semibold">10:30AM</h2>
          </div>


          {/* Reservations List */}
          <div className="flex-1  space-y-1">
      {reservations.map((reservation, index) => (
        <div
          key={index}
          className={`flex justify-between items-center p-3 rounded-xl cursor-pointer transition-all duration-200 ${
            selectedIndex === index ? "bg-gray-50" : "bg-transparent"
          }`}
          onClick={() => setSelectedIndex(index)}
        >
          <div>
            <p className="text-xs font-semibold">{reservation.name}</p>
            <p className="text-[10px] mt-1 text-gray-500">{reservation.amount}</p>
          </div>
          <span className="text-[10px] text-gray-700">{reservation.persons}</span>
        </div>
      ))}
    </div>


          {/* Close Button */}
          <button
            className="w-full bg-orange-500 rounded-full  text-white py-2 text-xs"
            onClick={() => setIsFormOpen(false)}
          >
            Close
          </button>
        </div>
      )}

    
    </>
  );
};

export default Header;



// // import { IoFastFoodOutline } from "react-icons/io5"; // Example for "Dine in"
// // import { MdOutlineTableRestaurant } from "react-icons/md"; // Example for "All Tables"
// // import { FaRegClock } from "react-icons/fa"; // Example for "Available Soon"

// // const Header = () => {
// //   return (
// //     <>
// //     <header className="mb-2 relative z-10 pt-20 flex items-center space-x-6  px-6 py-2 ">
// //    {/* All Tables */}
// // <div className="flex items-center space-x-2 rounded-full border border-gray-300 bg-white px-2 py-2">
// //   {/* Icon */}
// //   <MdOutlineTableRestaurant className="text-gray-900 text-sm" />

// //   {/* Label + Badge (in a row) */}
// //   <span className="text-[10px] font-semibold text-gray-900">All Tables</span>

// //   {/* Badge */}
// //   <span className="bg-orange-500 text-white text-[8px] font-semibold w-4 h-4 flex items-center justify-center rounded-full">
// //     20
// //   </span>
// // </div>


// //       {/* Other Filters */}
// //       <div className="flex items-center space-x-6 text-xs font-semibold text-gray-900 flex-nowrap overflow-hidden">
// //         <div className="flex items-center space-x-1">
// //           <IoFastFoodOutline className="text-gray-500" />
// //           <span>Dine In</span>
// //         </div>
// //         <div className="flex items-center space-x-1">
// //           <MdOutlineTableRestaurant className="text-gray-500" />
// //           <span>Reservation</span>
// //         </div>

//         // <div className="flex justify-between space-x-8 pl-64">
            
// //         <div className="flex items-center space-x-1">
// //           <span className="w-3 h-3 rounded-full bg-green-500"></span>
// //           <span>Occupied</span>
// //         </div>
//         // <div className="flex items-center space-x-1">
//         //   <span className="w-3 h-3 rounded-full bg-pink-500"></span>
//         //   <span>Open Order</span>
//         // </div>
//         // <div className="flex items-center space-x-1">
//         // <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
//         //   <span>Available Soon</span>
//         // </div>
// //         <div className="flex items-center space-x-1">
// //           <span className="w-3 h-3 rounded-full bg-gray-400"></span>
// //           <span>Not Occupied</span>
// //         </div>
//         // <div className="flex items-center space-x-1">
//         //   <FaRegClock className="text-gray-500" />
          
//         // </div>
// //         </div>
// //       </div>
   
// //     </header>
// //     <hr />
// //     </>
    
// //   );
// // };

// // export default Header;
