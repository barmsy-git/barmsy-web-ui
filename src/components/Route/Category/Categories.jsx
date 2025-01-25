import React from "react";

import { FaUtensils, FaGlassCheers, FaConciergeBell } from "react-icons/fa";

function Categories({ active, setActive }) {
  const categories = [
    { id: 1, title: "Foods", icon: <FaUtensils size={20} /> },
    { id: 2, title: "Drinks", icon: <FaGlassCheers size={20} /> },
    {
      id: 3,
      title: "Restaurants & Bars",
      icon: <FaConciergeBell size={20} />,
    },
  ];

  return (
    <div className="flex space-x-4">
      {categories.map((category) => (
        <div
          key={category.id}
          className={`flex items-center text-lg font-medium rounded-none cursor-pointer px-4 py-2 transition duration-200 space-x-2 ${
            active === category.id
              ? "bg-orange-50 text-orange-500 border-b-2 border-orange-500"
              : "text-gray-700 hover:text-orange-500 hover:border-b-orange-500"
          }`}
          onClick={() => setActive(category.id)}
        >
          {category.icon}
          <span>{category.title}</span>
        </div>
      ))}
    </div>
  );
}

export default Categories;

// import React from "react";

// const Categories = () => {
//   const categories = [
//     "Pastries",
//     "Breakfast",
//     "Sandwich",
//     "Salads",
//     "Cookies",
//     "Grains",
//   ];
//   const foodItems = [
//     {
//       id: 1,
//       title: "Pasties One",
//       price: "N2,000",
//       description: "Lorem ipsum dolor sit amet consectetur.",
//     },
//     {
//       id: 2,
//       title: "Pasties One",
//       price: "N2,000",
//       description: "Lorem ipsum dolor sit amet consectetur.",
//     },
//     {
//       id: 3,
//       title: "Pasties One",
//       price: "N2,000",
//       description: "Lorem ipsum dolor sit amet consectetur.",
//     },
//   ];

//   return (
//     <div className="p-6 font-sans">
//       {/* Search Bar */}
//       <div className="flex gap-4 mb-6">
//         <input
//           type="text"
//           placeholder="Search..."
//           className="flex-1 p-2 border border-gray-300 rounded-md"
//         />
//         <button className="px-4 py-2 text-white bg-orange-500 rounded-md">
//           Search
//         </button>
//       </div>

//       {/* Categories */}
//       <div className="flex gap-4 mb-6">
//         {categories.map((category, index) => (
//           <button
//             key={index}
//             className="px-4 py-2 bg-gray-100 border border-gray-300 rounded-md hover:bg-orange-500 hover:text-white"
//           >
//             {category}
//           </button>
//         ))}
//       </div>

//       {/* Food Items */}
//       <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
//         {foodItems.map((item) => (
//           <FoodItem key={item.id} {...item} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Categories;
