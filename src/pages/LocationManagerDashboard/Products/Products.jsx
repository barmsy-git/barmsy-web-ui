import { useState } from "react";
import { LayoutGrid, Table } from "lucide-react";
import ProductStats from "../Products/ProductStats";
import ProductTable from "../Products/ProductTable";

const ProductHeader = ({ isCollapsed }) => {
  const [activeTab, setActiveTab] = useState("products");
  const [view, setView] = useState("table");

  return (
    <>
      <hr />
      <div
        className={`fixed mt-2 right-0 h-[80px] z-50 bg-white shadow-sm p-4 flex justify-between items-center transition-all duration-300 ${
          isCollapsed
            ? "w-[calc(100%-4rem)] left-[4rem]"
            : "w-[calc(100%-15rem)] left-[15rem]"
        }`}
      >
        <div className="pr-4 w-full">
          <h2 className="text-2xl font-semibold">Products</h2>
          <div className="flex items-center justify-between mt-3 w-full">
            <div className="flex space-x-4">
              <button
                className={`px-4 py-2 text-sm font-medium border-b-2 ${
                  activeTab === "products"
                    ? "bg-orange-50 text-orange-500 border-orange-500"
                    : "border-transparent"
                }`}
                onClick={() => setActiveTab("products")}
              >
                Products
              </button>

              <button
                className={`px-4 py-2 text-sm font-medium border-b-2 ${
                  activeTab === "category"
                    ? "bg-orange-50 text-orange-500 border-orange-500"
                    : "border-transparent"
                }`}
                onClick={() => setActiveTab("category")}
              >
                Category
              </button>
            </div>

            <div className="flex items-center space-x-4 ml-auto">
              <button
                onClick={() => setView("table")}
                className={`p-2 rounded ${view === "table" ? "bg-gray-200" : ""}`}
              >
                <Table size={18} />
              </button>
              <button
                onClick={() => setView("grid")}
                className={`p-2 rounded ${view === "grid" ? "bg-gray-200" : ""}`}
              >
                <LayoutGrid size={18} />
              </button>

              <button className="bg-orange-500 text-white px-4 py-2 rounded text-sm font-medium">
                + Add Product
              </button>
            </div>
          </div>
        </div>
      </div>

    
 
{/* Product Statistics Section */}
<div
  className={`mt-24 p-4 absolute transition-all duration-300 ${
    isCollapsed ? "left-[4rem] w-[calc(100%-4rem)]" : "left-[15rem] w-[calc(100%-15rem)]"
  }`}
>
  <ProductStats />
</div>
<div
  className={`mt-48 p-4 absolute transition-all duration-300 ${
    isCollapsed ? "left-[4rem] w-[calc(100%-4rem)]" : "left-[15rem] w-[calc(100%-15rem)]"
  }`}
>
  <ProductTable />
</div>



    </>
  );
};



export default ProductHeader;
