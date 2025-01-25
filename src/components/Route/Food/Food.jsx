import React, { useState } from "react";
import { navItems } from "../../../static/data"; // Adjust the import path
import styles from "../../../styles/styles";

const categoriesData = [
  { id: 1, title: "Foods" },
  { id: 2, title: "Drinks" },
  { id: 3, title: "Restaurant & Bars" },
];

const subcategoriesData = {
  Foods: ["Sandwiches", "Pasta", "Breakfast", "Cookies", "Lunch"],
  Drinks: ["Cocktails", "Smoothies", "Soda", "Juices", "Tea"],
  "Restaurant & Bars": ["Fine Dining", "Casual Dining", "Bars", "Cafes"],
};

const NavigationAndCategories = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setActiveCategory((prev) => (prev === category ? null : category));
  };

  return (
    <>
      {/* Navigation */}
      <div className="flex justify-start space-x-8 mb-6 border-b-2 border-gray-300 pb-2 ml-14">
        {navItems.map((item, index) => (
          <button
            key={index}
            onClick={() => handleCategoryClick(item.title)}
            className={`flex items-center text-lg font-medium px-4 py-2 transition duration-200 space-x-2 ${
              activeCategory === item.title
                ? "bg-orange-50 text-orange-500 border-b-2 border-orange-500"
                : "text-gray-700 hover:text-orange-500 hover:border-b-orange-500"
            }`}
          >
            {item.icon}
            <span>{item.title}</span>
          </button>
        ))}
      </div>

      {/* Categories and Subcategories */}
      <div className={`${styles.section} bg-white p-6 rounded-lg shadow-md`}>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {categoriesData.map((category) => (
            <div
              key={category.id}
              className={`p-4 bg-gray-100 rounded-lg shadow-sm transition duration-200 cursor-pointer ${
                activeCategory === category.title
                  ? "border-2 border-blue-600"
                  : "hover:shadow-md"
              }`}
              onClick={() => handleCategoryClick(category.title)}
            >
              <h5
                className={`text-lg font-semibold ${
                  activeCategory === category.title
                    ? "text-blue-600"
                    : "text-gray-700"
                }`}
              >
                {category.title}
              </h5>

              {/* Subcategories */}
              {activeCategory === category.title && (
                <div className="mt-4 flex flex-wrap gap-4">
                  {subcategoriesData[category.title]?.map(
                    (subcategory, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm shadow-sm hover:shadow-md"
                      >
                        {subcategory}
                      </span>
                    )
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default NavigationAndCategories;
