import React, { useState } from "react";
import Categories from "./Categories";
import SubCategories from "./SubCategories";

function App() {
  const [activeCategory, setActiveCategory] = useState("Food");
  const [searchTerm, setSearchTerm] = useState("");
  const [searchData, setSearchData] = useState(null);
  const [openOrder, setOpenOrder] = useState(false);
  return (
    <>
      <div
        className={`w-full flex flex-col gap-6 transition-all duration-300  "ml-0"
        `}
      >
      

        {/* Categories List */}
        <div
          className={` ${openOrder ? "w-[100%] flex justify-start ml-0" : ""}`}
        >
          <div
        className={`w-full flex flex-col gap-6 transition-all duration-300 ${
          openOrder ? "ml-[360px]" : "ml-0"
        }`}
      >
        <div className="flex justify-start space-x-8 mb-6 border-b-2 ml-10">
          <Categories active={activeCategory} setActive={setActiveCategory} />
        </div>
        </div>
        </div>

        {/* Conditionally render subcategories based on active category */}
        <div className="flex justify-start space-x-8 mb-6   ml-5">
          {activeCategory !== null && (
            <SubCategories
              openOrder={openOrder}
              setOpenOrder={setOpenOrder}
              active={activeCategory}
              setActive={setActiveCategory}
            />
          )}
        </div>
        
      </div>
    </>
  );
}

export default App;
