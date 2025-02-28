// import React from "react";

// const ratings = [
//   { label: "Hygiene", value: "85%", color: "#6366F1", size: "w-20 h-20", ringSize: "w-24 h-24", position: "top-4 left-6" }, // Dark Blue
//   { label: "Packaging", value: "92%", color: "#3B82F6", size: "w-24 h-24", ringSize: "w-28 h-28", position: "bottom-2 left-2" }, // Light Blue
//   { label: "Food Taste", value: "85%", color: "#f97316", size: "w-32 h-32", ringSize: "w-36 h-36", position: "right-0 bottom-0" }, // Orange
// ];

// const RatingComponent = () => {
//   return (
//     <div className="bg-white p-6 rounded-lg shadow-md w-full relative">
//       {/* Header */}
//       <h3 className="text-gray-500 text-sm mb-2">Your Rating</h3>
//       <p className="text-gray-400 text-xs mb-4">Lorem ipsum dolor sit amet, consectetur</p>

//       {/* Rating Circles */}
//       <div className="relative flex items-center justify-center h-40">
//         {ratings.map((rating, index) => (
//           <div key={index} className={`absolute flex items-center justify-center ${rating.position}`}>
//             {/* Outer Half-Circle (Arc) */}
//             <div
//               className={`absolute rounded-full ${rating.ringSize} border-r-4 border-b-4 opacity-50`}
//               style={{ borderColor: rating.color }}
//             ></div>

//             {/* Inner Circle */}
//             <div className={`flex items-center justify-center rounded-full ${rating.size}`} style={{ backgroundColor: rating.color }}>
//               <p className="text-white font-semibold text-sm text-center">
//                 {rating.value} <br />
//                 <span className="text-[10px]">{rating.label}</span>
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default RatingComponent;


import React from "react";

const ratings = [
  { label: "Hygiene", value: "85%", color: "#6366F1", size: 80, ringSize: 86, position: "top-0 right-28", opacity: "opacity-100" }, // Dark Blue
  { label: "Packaging", value: "92%", color: "#3B82F6", size: 96, ringSize: 104, position: "-bottom-6 left-5" }, // Light Blue
  { label: "Food Taste", value: "85%", color: "#f97316", size: 128, ringSize: 136, position: "right-0 bottom-0" }, // Orange
];

const RatingComponent = () => {
  return (
    <div className=" p-6  w-full relative mb-8">
      {/* Header */}
      <h3 className="text-gray-500 text-sm mb-4">Your Rating</h3>
      <p className="text-gray-400 text-xs mb-4">Lorem ipsum dolor sit amet, consectetur</p>

      {/* Rating Circles */}
      <div className="relative flex items-center justify-center h-40">
        {ratings.map((rating, index) => {
          const strokeWidth = 2; // Ultra-thin arc
          const arcSize = rating.ringSize; // Arc size just slightly larger than parent
          const radius = arcSize / 2 - strokeWidth;

          return (
            <div key={index} className={`absolute flex items-center justify-center ${rating.position}`}>
              {/* Inner Circle */}
              <div
                className="flex items-center justify-center rounded-full"
                style={{
                  backgroundColor: rating.color,
                  width: rating.size,
                  height: rating.size,
                }}
              >
                <p className="text-white font-semibold text-sm text-center">
                  {rating.value} <br />
                  <span className="text-[10px]">{rating.label}</span>
                </p>
              </div>

              {/* Outer Arc - Perfectly Aligned & Closer */}
              <svg
                width={arcSize}
                height={arcSize}
                viewBox={`0 0 ${arcSize} ${arcSize}`}
                className="absolute"
                style={{
                  right: `-${5}px`, // Brings arc very close
                  transform: "rotate(90deg)", // Ensures correct curvature
                }}
              >
                <path
                  d={`M ${strokeWidth},${arcSize / 2} A ${radius},${radius} 0 1,1 ${arcSize - strokeWidth},${arcSize / 2}`}
                  stroke={rating.color}
                  strokeWidth={strokeWidth}
                  fill="none"
                  strokeLinecap="butt" // Ensures blocked edges
                />
              </svg>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RatingComponent;

