import React from "react";

import { FaUtensils, FaGlassCheers, FaConciergeBell } from "react-icons/fa";

function Categories({ active, setActive }) {
  const categories = [
    { id: 1, title: "Food", icon: <FaUtensils size={20} /> },
    { id: 2, title: "Drinks", icon: <FaGlassCheers size={20} /> },
    {
      id: 3,
      title: "Restaurant",
      icon: <FaConciergeBell size={20} />,
    },
  ];

  return (
    <div className="flex space-x-4">
      {categories.map((category) => (
        <div
          key={category.id}
          className={`flex items-center text-lg font-medium rounded-none cursor-pointer px-4 py-2 transition duration-200 space-x-2 ${
            active === category.title
              ? "bg-orange-50 text-orange-500 border-b-2 border-orange-500"
              : "text-gray-700 hover:text-orange-500 hover:border-b-orange-500"
          }`}
          onClick={() => setActive(category.title)}
        >
          {category.icon}
          <span>{category.title}</span>
        </div>
      ))}
    </div>
  );
}

export default Categories;

