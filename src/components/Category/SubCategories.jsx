import React, { useState } from "react";
import FoodDetailsCard from "../FoodCard/FoodDetailsCard";
import { subcategoriesData } from "../../static/data"
import { filterCategories,filterSubCategories } from "../../utils/helper"
import OrderTrayList from "../OrderTrayList/OrderTrayList"

function SubCategories({ active, setActive, openOrder, setOpenOrder }) {
  console.log("openOrder state in SubCategories:", openOrder);
  const [orders, setOrders] = useState([]);
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);

  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState("Pastries");


  const handleSubcategoryClick = (subcategory) => {
    setSelectedSubcategory(
      selectedSubcategory === subcategory ? null : subcategory
    );
  };

  const handleViewItem = (item) => {
    setSelectedItem(item);
    setOpen(true); // Open the modal
  };

  const handleAddToOrder = () => {
    // Add the item to the order
    setOrders((prevOrders) => {
      const existingItem = prevOrders.find((item) => item.name === data.name);

      if (existingItem) {
        // If item already exists, increase the quantity
        return prevOrders.map((item) =>
          item.name === data.name ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        // If item does not exist, add a new entry
        return [...prevOrders, { ...data, quantity: 1 }];
      }
    });

   

    // Open the order sidebar
    setOpenOrder(true);
    //  // Close the modal
    //  setOpen(false);
  };

  return (
    <div
    className={`w-full flex flex-col gap-6 transition-all duration-300 ${
      openOrder ? "ml-[380px]" : "ml-0"
    }`}
  >
    <div className="w-full  flex flex-col gap-6">
      <div className="w-full flex flex-wrap gap-4 relative border-b-2 border-gray-300 pb-8 ml-6">
        
        {filterCategories(subcategoriesData, active).map((subcategory, index) => (
          <div key={index} className="flex flex-col relative">
            <div
              onClick={() => handleSubcategoryClick(subcategory?.subcategory)}
              className={`w-[196px] h-[51px] max-w-[196px] px-[15.71px] py-[5.61px] gap-[2.81px] text-black text-opacity-75 bg-gray-100 rounded-full text-sm cursor-pointer shadow-sm hover:shadow-md flex items-center justify-center transition-all  ${selectedSubcategory === subcategory?.category
                ? "bg-gray-300 text-black "
                : "hover:bg-gray-200"
                }`}
            >
              {subcategory?.subcategory}
            </div>


          </div>
        ))
        }
      </div>
      <br />
      <div
        className={`${selectedSubcategory
            ? `grid grid-cols-1 gap-3 p-2 ${openOrder ? "md:grid-cols-2" : "md:grid-cols-3"
            }`
            : "hidden"
          } mt-2 flex-wrap gap-3 transition-all duration-300 ease-in-out`}
      >
        {selectedSubcategory !== null &&
          filterSubCategories(subcategoriesData,selectedSubcategory)?.map((nested, nestedIndex) => (
            <div
              key={nestedIndex}
              className=" flex h-[130px] bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden transition hover:shadow-lg"
            >
              {/* Image Section */}
              <img
                src={nested.image}
                alt={nested.name}
                className="object-cover w-1/3 h-full"
              />

              {/* Details Section */}
              <div className="px-3 mb-8 flex flex-col justify-between w-2/3">
                {/* Name and Description */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {nested.name}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    {nested.description}
                  </p>
                </div>

                {/* Price and Action Buttons */}
                <div>
                  <div className="mt-1 flex pt-0 items-center justify-between">
                    <span className="text-sm mr-2  font-bold text-gray-800">
                      ₦{nested.price}
                    </span>
                    <div className="flex gap-2">
                      <button
                        className="px-4 mr-2 py-0 text-xs font-bold text-orange-500 bg-orange-50 rounded-full hover:bg-orange-50"
                        onClick={() => handleViewItem(nested)}
                      >
                        View
                      </button>
                      <button
                        className="px-2 py-1 text-xs text-white font-bold bg-orange-500 rounded-full hover:bg-orange-600"
                        onClick={handleAddToOrder}
                        >
                         
                        Add to Order
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>


   {/* Order popup */}
   {openOrder ? <OrderTrayList setOpenOrder={setOpenOrder} /> : null}
    </div>
    {open ? (
                                  <FoodDetailsCard
                                    setOpen={setOpen}
                                    data={selectedItem} // Pass the selected item to the modal
                                  />
                                ) : null}
    </div>
  );
}

export default SubCategories;
