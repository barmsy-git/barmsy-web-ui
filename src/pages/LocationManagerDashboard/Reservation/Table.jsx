// const TableCard = () => {
//     return (
//       <div className="relative flex flex-col items-center">
//         {/* Outer Seats - Top */}
//         <div className="absolute -top-3 left-[20%] w-10 h-2 bg-gray-300 rounded-t-xl"></div>
// <div className="absolute -top-3 right-[20%] w-10 h-2 bg-gray-300 rounded-t-xl"></div>

  
//         {/* Outer Seats - Bottom */}
//         <div className="absolute -bottom-3 left-[20%] w-10 h-2 bg-gray-300 rounded-b-xl"></div>
//         <div className="absolute -bottom-3 right-[20%] w-10 h-2 bg-gray-300 rounded-b-xl"></div>
  
//         {/* Outer Seats - Left */}
//         <div className="absolute -left-[7%] top-[20%] w-2 h-10 bg-gray-300 rounded-l-xl"></div>

//         {/* <div className="absolute -left-4 bottom-1/3 w-7 h-8 bg-gray-300 rounded-l-xl"></div> */}
  
//         {/* Outer Seats - Right */}
//         <div className="absolute -right-[7%] top-[20%] w-2 h-10 bg-gray-300 rounded-r-xl"></div>
//         {/* <div className="absolute -right-3 bottom-1/3 w-7 h-8 bg-gray-300 rounded-r-xl"></div> */}
  
//         {/* Table */}
//         <div className="relative w-36 h-16 bg-white rounded-xl shadow-md flex flex-col items-center justify-center border border-gray-300">
//           <div className="absolute left-0 top-0 h-full w-2 bg-yellow-400 rounded-l-lg"></div>
//           <span className="text-xs font-semibold flex items-center gap-1">
//             <span className="text-gray-700">💰</span> ₦2,000
//           </span>
//           <span className="text-gray-400 text-[10px] flex items-center gap-1 mt-1">
//             ⏳ 0:24 mins
//           </span>
//         </div>
  
//         {/* Table Number */}
//         <span className="absolute top-1 right-2 text-gray-700 text-xs font-semibold">09</span>
//       </div>
//     );
//   };
  
//   export default TableCard;
  


// import React from "react";

// const TableCard = ({ shape = "rectangle", tableNumber = "00", onClick }) => {
//   const isSquare = shape === "square";

//   // Font size adjustments
//   const textSize = isSquare ? "text-[8px]" : "text-xs"; // Smaller for square, normal for rectangle
//   const priceTextSize = isSquare ? "text-[8px]" : "text-[10px]"; // Slightly smaller for square
//   const timeTextSize = isSquare ? "text-[6px]" : "text-[8px]"; // Smaller for square

//   return (
//     <div className="relative flex flex-col items-center">
//       {/* Outer Seats - Top */}
//       <div className={`absolute -top-3 ${isSquare ? "left-[25%] w-8 h-2" : "left-[20%] w-10 h-2"}  bg-gray-300 rounded-t-xl`}></div>
//       <div className={`absolute -top-3 ${isSquare ? "" : "right-[20%] w-10 h-2"}  bg-gray-300 rounded-t-xl`}></div>

//       {/* Outer Seats - Bottom */}
//       <div className={`absolute -bottom-3 ${isSquare ? "left-[25%] w-8 h-2" : "left-[20%] w-10 h-2"}  bg-gray-300 rounded-b-xl`}></div>
//       <div className={`absolute -bottom-3 ${isSquare ? "" : "right-[20%]  w-10 h-2"} bg-gray-300 rounded-b-xl`}></div>

//       {/* Outer Seats - Left */}
//       <div className={`absolute ${isSquare ? "top-[25%] w-2 h-8 -left-[20%]" : "top-[20%] w-2 h-10 -left-[7%]"}  bg-gray-300 rounded-l-xl`}></div>

//       {/* Outer Seats - Right */}
//       <div className={`absolute ${isSquare ? "top-[25%] w-2 h-8 -right-[20%]" : "top-[20%] w-2 h-10 -right-[7%]"} w-2 h-10 bg-gray-300 rounded-r-xl`}></div>

//       {/* Table */}
//       <div className={`relative ${isSquare ? "w-16 h-14" : "w-36 h-16"} bg-white rounded-xl shadow-md flex flex-col items-center justify-center border border-gray-300`}>
//         <div className="absolute left-0 top-0 h-full w-2  rounded-l-lg"></div>
//         <span className={`font-semibold flex items-center gap-1 pt-4 ${textSize}`}>
//           <span className={`text-gray-700 ${priceTextSize}`}>💰</span> ₦2,000
//         </span>
//         <span className={`text-gray-400 flex items-center gap-1 mt-1 pr-1 pb- rounded-full bg-gray-50 border border-gray-400 px-0 py-0 ${timeTextSize}`}>
//           ⏳ 0:24 mins
//         </span>
//       </div>

//       {/* Dynamic Table Number */}
//       <span className="absolute top-1 right-2 text-gray-700 text-[10px] font-semibold">{tableNumber}</span>
//     </div>
//   );
// };

// export default TableCard;



import React from "react";

const TableCard = ({ shape = "rectangle", tableNumber = "00", onClick }) => {
  const isSquare = shape === "square";

  // Font size adjustments
  const textSize = isSquare ? "text-[8px]" : "text-xs";
  const priceTextSize = isSquare ? "text-[8px]" : "text-[10px]";
  const timeTextSize = isSquare ? "text-[6px]" : "text-[8px]";

  return (
    <div className="relative flex flex-col items-center cursor-pointer" onClick={onClick}>
      {/* Outer Seats - Top */}
      <div className={`absolute -top-3 ${isSquare ? "left-[25%] w-8 h-2" : "left-[20%] w-10 h-2"} bg-gray-300 rounded-t-xl`}></div>
      <div className={`absolute -top-3 ${isSquare ? "" : "right-[20%] w-10 h-2"} bg-gray-300 rounded-t-xl`}></div>

      {/* Outer Seats - Bottom */}
      <div className={`absolute -bottom-3 ${isSquare ? "left-[25%] w-8 h-2" : "left-[20%] w-10 h-2"} bg-gray-300 rounded-b-xl`}></div>
      <div className={`absolute -bottom-3 ${isSquare ? "" : "right-[20%] w-10 h-2"} bg-gray-300 rounded-b-xl`}></div>

      {/* Outer Seats - Left */}
      <div className={`absolute ${isSquare ? "top-[25%] w-2 h-8 -left-[20%]" : "top-[20%] w-2 h-10 -left-[7%]"} bg-gray-300 rounded-l-xl`}></div>

      {/* Outer Seats - Right */}
      <div className={`absolute ${isSquare ? "top-[25%] w-2 h-8 -right-[20%]" : "top-[20%] w-2 h-10 -right-[7%]"} bg-gray-300 rounded-r-xl`}></div>

      {/* Table */}
      <div
        className={`relative ${isSquare ? "w-16 h-14" : "w-36 h-16"} bg-white rounded-xl shadow-md flex flex-col items-center justify-center border border-gray-300 transition-transform hover:scale-100 hover:shadow-lg`}
      >
        <div className="absolute left-0 top-0 h-full w-2 rounded-l-lg"></div>
        <span className={`font-semibold flex items-center gap-1 pt-4 ${textSize}`}>
          <span className={`text-gray-700 ${priceTextSize}`}>💰</span> ₦2,000
        </span>
        <span className={`text-gray-400 flex items-center gap-1 mt-1 pr-1 pb-1 rounded-full bg-gray-50 border border-gray-400 px-1 py-0 ${timeTextSize}`}>
          ⏳ 0:24 mins
        </span>
      </div>

      {/* Dynamic Table Number */}
      <span className="absolute top-1 right-2 text-gray-700 text-[10px] font-semibold">{tableNumber}</span>
    </div>
  );
};

export default TableCard;


// const TableCard = () => {
//     return (
//       <div className="relative flex flex-col items-center">
//         {/* Outer Seats - Top */}
//         <div className="absolute -top-3 left-[20%] w-10 h-2 bg-gray-300 rounded-t-xl"></div>
// <div className="absolute -top-3 right-[20%] w-10 h-2 bg-gray-300 rounded-t-xl"></div>

  
//         {/* Outer Seats - Bottom */}
//         <div className="absolute -bottom-3 left-[20%] w-10 h-2 bg-gray-300 rounded-b-xl"></div>
//         <div className="absolute -bottom-3 right-[20%] w-10 h-2 bg-gray-300 rounded-b-xl"></div>
  
//         {/* Outer Seats - Left */}
//         <div className="absolute -left-[7%] top-[20%] w-2 h-10 bg-gray-300 rounded-l-xl"></div>

//         {/* <div className="absolute -left-4 bottom-1/3 w-7 h-8 bg-gray-300 rounded-l-xl"></div> */}
  
//         {/* Outer Seats - Right */}
//         <div className="absolute -right-[7%] top-[20%] w-2 h-10 bg-gray-300 rounded-r-xl"></div>
//         {/* <div className="absolute -right-3 bottom-1/3 w-7 h-8 bg-gray-300 rounded-r-xl"></div> */}
  
//         {/* Table */}
//         <div className="relative w-36 h-16 bg-white rounded-xl shadow-md flex flex-col items-center justify-center border border-gray-300">
//           <div className="absolute left-0 top-0 h-full w-2 bg-yellow-400 rounded-l-lg"></div>
//           <span className="text-xs font-semibold flex items-center gap-1">
//             <span className="text-gray-700">💰</span> ₦2,000
//           </span>
//           <span className="text-gray-400 text-[10px] flex items-center gap-1 mt-1">
//             ⏳ 0:24 mins
//           </span>
//         </div>
  
//         {/* Table Number */}
//         <span className="absolute top-1 right-2 text-gray-700 text-xs font-semibold">09</span>
//       </div>
//     );
//   };
  
//   export default TableCard;
  


// import React from "react";

// const TableCard = ({ shape = "rectangle" }) => {
//   const isSquare = shape === "square";

//   return (
//     <div className="relative flex flex-col items-center">
//       {/* Outer Seats - Top */}
//       <div className={`absolute -top-3 ${isSquare ? "left-[25%] w-8 h-2" : "left-[20%] w-10 h-2"}  bg-gray-300 rounded-t-xl`}></div>
//       <div className={`absolute -top-3 ${isSquare ? "" : "right-[20%] w-10 h-2"}  bg-gray-300 rounded-t-xl`}></div>

//       {/* Outer Seats - Bottom */}
//       <div className={`absolute -bottom-3 ${isSquare ? "left-[35%]" : "left-[20%]"} w-10 h-2 bg-gray-300 rounded-b-xl`}></div>
//       <div className={`absolute -bottom-3 ${isSquare ? "right-[35%]" : "right-[20%]"} w-10 h-2 bg-gray-300 rounded-b-xl`}></div>

//       {/* Outer Seats - Left */}
//       <div className={`absolute -left-[7%] ${isSquare ? "top-[35%]" : "top-[20%]"} w-2 h-10 bg-gray-300 rounded-l-xl`}></div>
      
//       {/* Outer Seats - Right */}
//       <div className={`absolute -right-[7%] ${isSquare ? "top-[35%]" : "top-[20%]"} w-2 h-10 bg-gray-300 rounded-r-xl`}></div>

//       {/* Table */}
//       <div className={`relative ${isSquare ? "w-16 h-14" : "w-36 h-16"} bg-white rounded-xl shadow-md flex flex-col items-center justify-center border border-gray-300`}>
//         <div className="absolute left-0 top-0 h-full w-2 bg-yellow-400 rounded-l-lg"></div>
//         <span className="text-xs font-semibold flex items-center gap-1">
//           <span className="text-gray-700">💰</span> ₦2,000
//         </span>
//         <span className="text-gray-400 text-[10px] flex items-center gap-1 mt-1">
//           ⏳ 0:24 mins
//         </span>
//       </div>

//       {/* Table Number */}
//       <span className="absolute top-1 right-2 text-gray-700 text-xs font-semibold">09</span>
//     </div>
//   );
// };

// export default TableCard;
