import { useState } from "react";
import { FaFire } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import image from "../../Assets/myImage.jpg"

const trendingData = [
  { id: 1, name: "Jollof Rice", price: "N2,000", },
  { id: 2, name: "Jollof Rice", price: "N2,000", },
  { id: 3, name: "Jollof Rice", price: "N2,000", },
  { id: 4, name: "Jollof Rice", price: "N2,000", },

];

// const OrderedItems = () => {



//   return (
//     <div className="bg-white p-4 rounded-lg shadow-md h-96">
//       {/* Header Section */}
//       <div className="flex justify-between items-center">
//        <div>
//        <h3 className="text-gray-700 font-semibold flex items-center text-xs
//         ">
//            Most Ordered Items
//         </h3>
//         <h3 className="text-gray-300 flex items-center text-[10px] mt-3
//         ">
//            Most Ordered Items
//         </h3>
//        </div>

     
       

//         {/* Dropdown */}
//         {/* <div className="relative">
//           <button
//             className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-[10px]
//             flex items-center"
//             onClick={() => setDropdownOpen(!dropdownOpen)}
//           >
//             {selectedPeriod} <IoIosArrowDown className="ml-1 text-orange-500
//             " />
//           </button>

//           {dropdownOpen && (
//             <ul className="absolute right-0 mt-2 bg-white shadow-lg rounded-md text-[10px]
//              overflow-hidden w-28">
//               {["Today", "Weekly", "Monthly"].map((period) => (
//                 <li
//                   key={period}
//                   className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
//                   onClick={() => handlePeriodChange(period)}
//                 >
//                   {period}
//                 </li>
//               ))}
//             </ul>
//           )}
//         </div> */}


//       </div>

//       {/* <hr className="my-2 w-full border-gray-200" /> */}

//       {/* Trending Items List */}
//       <div className="mt-4 space-y-3">
//         {trendingData.map((item, index) => (
//           <div key={item.id} className="flex items-center justify-between border-b pb-2">
            

//             <div className="flex items-center ">
//               <img
//                 src={image}
//                 alt={item.name}
//                 className="w-8 h-8 rounded-full  object-cover mr-3"
//               />
//               <div>
//                 <p className="text-gray-700 font-medium text-xs">{item.name}</p>
//               </div>
//             </div>

           
//             <p className="text-xs text-black">{item.price}</p>
            
            
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default OrderedItems;


const OrderedItems = () => {
    return (
      <div className="h-full"> {/* Ensure full height */}
        {/* Header Section */}
        <div className="flex justify-between items-center">
         <div>
         <h3 className="text-gray-700 font-semibold flex items-center text-xs">
             Most Ordered Items
          </h3>
          <h3 className="text-gray-300 flex items-center text-[10px] mt-3">
             Most Ordered Items
          </h3>
         </div>
        </div>
  
        {/* Trending Items List */}
        <div className="mt-2 space-y-3">
          {trendingData.map((item, index) => (
            <div key={item.id} className="flex items-center justify-between border-b pb-2">
              <div className="flex items-center">
                <img
                  src={image}
                  alt={item.name}
                  className="w-8 h-8 rounded-full object-cover mr-3"
                />
                <div>
                  <p className="text-gray-700 font-medium text-xs">{item.name}</p>
                </div>
              </div>
              <p className="text-xs text-black">{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };

  export default OrderedItems;