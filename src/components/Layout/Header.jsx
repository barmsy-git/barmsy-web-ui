import React, { useState } from "react";
import styles from "../../styles/styles";
import { Link } from "react-router-dom";
import { HiArrowLeft } from "react-icons/hi";

import { AiOutlineSearch } from "react-icons/ai";
import Order from "../order/Order";

function Header({ setOpenOrder }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchData, setSearchData] = useState(null);
  // const [openOrder, setOpenOrder] = useState(false);

  // const handleSearchChange = (e) => {
  //   // const term = e.target.value;
  //   // setSearchTerm(term);
  //   // const filteredFoods =
  //   //   foodData &&
  //   //   foodData.filter((food) =>
  //   //     food.name.toLowerCase().includes(term.toLowerCase())
  //   //   );
  //   // setSearchData(filteredFoods);
  // };

  return (
    <div className={`${styles.section}`}>
      <div className="hidden flex-col 800px:flex items-center w-full gap-4 800px:gap-6 800px:my-[20px]">
        {/* Top Row: Dashboard and All Orders */}
        <div className="w-full flex items-center justify-between">
          {/* Dashboard Button */}
          <div className="w-auto">
            <Link to="/dashboard">
              <h1 className="px-4 py-2 text-lg font-medium text-center bg-white rounded-full shadow-md border border-gray-300 hover:bg-gray-100 transition duration-200 flex items-center justify-center gap-2">
                <HiArrowLeft className="text-gray-600" />
                Dashboard
              </h1>
            </Link>
          </div>

          {/* All Orders Button */}
          <div className="w-auto" onClick={() => setOpenOrder(true)}>
            {/* <Link to="/all-orders"> */}
            <h1 className="px-4 py-2 text-lg cursor-pointer font-medium text-center bg-white rounded-full shadow-md border border-gray-300 hover:bg-gray-100 transition duration-200 flex items-center justify-center">
              All Orders
            </h1>

            {/* </Link> */}
          </div>
        </div>

        {/* Search Box */}
        {/* <div className="w-[50%] relative flex justify-center mt-4">
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
          </button> */}
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
        {/* </div> */}
      </div>
    </div>
  );
}

export default Header;
