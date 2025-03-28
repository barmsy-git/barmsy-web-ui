// import LocationOwner from "../../Assets/Dashboard - Location Owner 1.png"
// import LocationOwner2 from "../../Assets/Dashboard - Location Owner 2.png"
// import vectorTriangle from "../../Assets/Vector 28.png"



// export default function AnalyticsSection() {
//     return (
//         <section className="flex flex-col md:flex-row items-start justify-between p-10 px-6 py-16 bg-white mb-60 pt-20">
//         <div className="flex flex-col md:flex-row w-full bg-white rounded-2xl border items-start">
//           {/* Left Text Content */}
//           <div className="max-w-lg p-14 pt-1">
//             <h3 className="text-orange-500 text-sm font-bold uppercase">Insight</h3>
//             <h2 className="text-3xl font-extrabold text-gray-900 mt-2">
//               Powerful Analytics
//             </h2>
//             <p className="text-gray-500 mt-4">
//               Lorem ipsum dolor sit amet consectetur. Non at netus ultricies faucibus 
//               feugiat interdum mauris sed.
//             </p>
//             <ul className="mt-4 space-y-2">
//               <li className="flex items-center text-gray-700">
//                 ✅ <span className="ml-2">Lorem ipsum dolor sit amet</span>
//               </li>
//               <li className="flex items-center text-gray-700">
//                 ✅ <span className="ml-2">Lorem ipsum dolor sit amet consectetur.</span>
//               </li>
//             </ul>
//             <button className="mt-6 text-orange-500 font-semibold">
//               Read More ➜
//             </button>
//           </div>
      
//           {/* Right Image Content */}
//           <div className="relative mb-1 md:mt-0 w-[500px]  ml-auto">
//             {/* Orange Background Triangle (Positioned Behind) */}
//             <img
//               src={vectorTriangle}
//               alt=""
//               className="absolute rounded-3xl h-[400px] top-0 left-[50px] w-[350px] md:w-[450px] z-0"
//             />
      
//             {/* Back Image (Lower z-index) */}
//             <img
//               src={LocationOwner}
//               alt="Dashboard 2"
//               className="w-[300px] h-[300px] md:w-[400px] absolute right-0 top-z-10"
//             />
      
//             {/* Front Image (Higher z-index) */}
//             <img
//               src={LocationOwner2}
//               alt="Dashboard 1"
//               className="w-[400px] md:w-[500px] rounded-lg relative z-20 top-12"
//             />
//           </div>
//         </div>
//       </section>
      
//       );
      
//   }
  import { Check } from "lucide-react";
  import LocationOwner from "../../Assets/Dashboard - Location Owner 1.png"
  import LocationOwner2 from "../../Assets/Dashboard - Location Owner 2.png"
  import vectorTriangle from "../../Assets/Vector 28.png"
  
  
  
  export default function AnalyticsSection() {
      return (
          <section className="flex flex-col md:flex-row items-start justify-between p-10 px-6 py-16 bg-white  pt-0">
          <div className="flex flex-col md:flex-row w-full bg-white rounded-3xl border items-start">
            {/* Left Text Content */}
            <div className="max-w-lg p-24 pt-24 ml-36">
              <h3 className="text-orange-500 text-xs font-medium  uppercase">Insight</h3>
              <h2 className="text-3xl font-bold text-gray-900 mt-2">
                Powerful Analytics
              </h2>
              <p className="text-gray-500 text-[11px] mt-4">
                Lorem ipsum dolor sit amet consectetur. Non at netus ultricies faucibus 
                feugiat interdum mauris sed.
              </p>
              <ul className="mt-4 space-y-2">
   <div className="flex space-x-4">
   <li className="flex items-center text-gray-700 text-[11px]">
      <Check className="text-orange-500 w-5 h-5" />
      <span className="ml-2">Lorem ipsum dolor</span>
    </li>
    <li className="flex items-center text-gray-700 text-[11px]">
      <Check className="text-orange-500 w-5 h-5" />
      <span className="ml-2">Lorem ipsum dolor</span>
    </li>
   </div>
    <li className="flex items-center text-gray-700 text-[11px]">
      <Check className="text-orange-500 w-5 h-5" />
      <span className="ml-2">Lorem ipsum dolor.</span>
    </li>
  </ul>
              <button className="mt-6 text-orange-500 font-semibold text-xs underline">
                Read More 
              </button>
            </div>
        
            {/* Right Image Content */}
            <div className="relative  md:mt-0 w-[500px]   ml-auto">
              {/* Orange Background Triangle (Positioned Behind) */}
              <img
                src={vectorTriangle}
                alt=""
                className="absolute rounded-3xl h-[408px] top-0 left-[50px] w-[350px] md:w-[450px] z-0"
              />
        
              {/* Back Image (Lower z-index) */}
              <img
                src={LocationOwner}
                alt="Dashboard 2"
                className="w-[300px] h-[300px] md:w-[400px] absolute right-0 top-z-10"
              />
        
              {/* Front Image (Higher z-index) */}
              <img
                src={LocationOwner2}
                alt="Dashboard 1"
                className="w-[400px] md:w-[500px] rounded-lg relative z-20 top-12"
              />
            </div>
          </div>
        </section>
        
        );
        
    }
    