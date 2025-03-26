import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";

function FoodDetailsCard({ setOpen, data, limit = 100 }) {
  const description = data?.description || "";
  const isOverflow = description.length > limit;
  const [openOrder, setOpenOrder] = useState(false);
  return (
    <>
      <div className="bg-[#fff]">
        {data ? (
          <div className="fixed inset-0 bg-[#00000008] bg-opacity-30 flex justify-center items-center z-50">
            <div className="bg-white w-[701px] h-[428px] rounded-tl-[15px] rounded-2xl p-6 relative">
              <RxCross1
                size={25}
                className="absolute right-8 top-7 z-50 cursor-pointer hover:text-gray-900"
                style={{ strokeWidth: "0.7px" }}
                onClick={() => setOpen(false)}
              />
              <div className="border-b  border-gray-300 pt-0 mb-16">
                <h3 className="text-2xl font-bold text-gray-800 mb-3   ml-6">
                  {data.name}
                </h3>
              </div>

              <div className="flex items-start">
                <img
                  src={data.image}
                  alt={data.name}
                  className="w-32 h-32 object-cover ml-6  rounded-md"
                />
                {/* Text Details */}

                <div className="flex flex-col justify-between flex-1 ml-5">
                  {/* Description */}
                  <p
                    className={`w-[100%] 800px:w-[100%] h-[8vh] text-gray-600 text-sm leading-relaxed mb-4 ${
                      isOverflow ? "overflow-y-scroll" : "overflow-y-hidden"
                    }`}
                  >
                    {data.description}
                  </p>
                  <p className="text-xl font-bold text-gray-800 pt-10">
                    {data.price ? "₦ " + data.price : null}
                  </p>
                </div>
              </div>

              {/* Add to Order Button */}
              <div className="border-b  border-gray-300 pb-20 ml-0"></div>
              <div
                className="flex justify-end mt-6 pr-6  pt-0 "
                // onClick={() => setOpenOrder(true)}
              >
                <button className="px-6 py-3 bg-orange-500 text-white font-bold rounded-full hover:bg-orange-600 transition">
                  Add to Order
                </button>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
}

export default FoodDetailsCard;
