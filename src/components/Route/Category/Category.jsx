import React, { useState } from "react";
import Categories from "./Categories";
import SubCategories from "./SubCategories";
import { AiOutlineSearch } from "react-icons/ai";

function App({ openOrder, setOpenorder }) {
  const [activeCategory, setActiveCategory] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchData, setSearchData] = useState(null);

  const handleSearchChange = (e) => {
    // const term = e.target.value;
    // setSearchTerm(term);
    // const filteredFoods =
    //   foodData &&
    //   foodData.filter((food) =>
    //     food.name.toLowerCase().includes(term.toLowerCase())
    //   );
    // setSearchData(filteredFoods);
  };

  return (
    <>
      {/* Search Box */}
      <div
        className={`w-full flex flex-col gap-6 transition-all duration-300 ${
          openOrder ? "ml-[360px]" : "ml-0"
        }`}
      >
        <div
          className={` ${openOrder ? "w-[100%] flex justify-start ml-0" : ""}`}
        >
          <div className="w-[50%] relative flex justify-center mt-9 ml-80 mb-10">
            <span className="absolute left-3 top-2.5 text-gray-400 ">
              <AiOutlineSearch size={20} />
            </span>
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="h-[40px] w-full pl-10 pr-4 border border-gray-200 rounded-full focus:outline-none "
            />
            <button
              type="submit"
              className="absolute right-0 top-0 h-[40px] px-4 py-2 border-l bg-[#f36805] text-white rounded-r-full hover:bg-blue-700 transition duration-200"
            >
              Search
            </button>
            {/* 
          {searchData && searchData.length !== 0 && (
            <div className="absolute min-h-[30vh] bg-slate-50 shadow-sm-2 z-[9] p-4">
              {searchData.map((i, index) => {
                const d = i.name;
                const Food_name = d.replace(/\s+/g, "-");
                return (
                  <Link to={`/food/${Food_name}`} key={index}>
                    <div className="w-full flex items-start py-3">
                      <img
                        src={i.image_Url[0].url}
                        alt=""
                        className="w-[40px] h-[40px] mr-[10px]"
                      />
                      <h1>{i.name}</h1>
                    </div>
                  </Link>
                );
              })}
            </div>
          )} */}
          </div>
        </div>

        {/* Categories List */}
        <div className="flex justify-start space-x-8 mb-6 border-b-2 ml-10">
          <Categories active={activeCategory} setActive={setActiveCategory} />
        </div>

        {/* Conditionally render subcategories based on active category */}
        <div className="flex justify-start space-x-8 mb-6   ml-5">
          {activeCategory && (
            <SubCategories
              openOrder={openOrder}
              setOpenorder={setOpenorder}
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
