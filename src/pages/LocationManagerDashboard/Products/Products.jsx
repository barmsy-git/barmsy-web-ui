import { useState } from "react";
import { LayoutGrid, Table, Plus } from "lucide-react";
import ProductStats from "../Products/ProductStats";
import ProductTable from "../Products/ProductTable";
import ProductGrid from "../Products/ProductGrid";
import AddProductModal from "../Products/AddProductModal";
import AddCategoryModal from "../Products/AddCategoryModal";
import CategorySection from "../Products/CategorySection";

const ProductHeader = ({ isCollapsed }) => {
  const [activeTab, setActiveTab] = useState("products");
  const [view, setView] = useState("table");
  const [showModal, setShowModal] = useState(false);
  const [showCategoryModal, setShowCategoryModal] = useState(false);

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
              {/* Products Tab */}
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

              {/* Category Tab */}
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

            {/* Conditional Rendering for Buttons */}
            <div className="flex mb-2 items-center space-x-2 ml-auto">
              {activeTab === "products" ? (
                <>
                  {/* Table & Grid View Buttons */}
                  <button
                    onClick={() => setView("table")}
                    className={`p-1 rounded ${view === "table" ? "bg-gray-200" : ""}`}
                  >
                    <Table size={15} />
                  </button>
                  <button
                    onClick={() => setView("grid")}
                    className={`p-1 rounded ${view === "grid" ? "bg-gray-200" : ""}`}
                  >
                    <LayoutGrid size={15} />
                  </button>

                  {/* Add Product Button */}
                  <button
                    onClick={() => setShowModal(true)}
                    className="bg-orange-500 text-white px-4 py-2 rounded-2xl text-[10px] font-medium"
                  >
                    + Add Product
                  </button>
                </>
              ) : (
                // New Category Button (With Plus Icon)
                <button
                  onClick={() => setShowCategoryModal(true)}
                  className="bg-orange-500 text-white flex items-center px-4 py-2 rounded-2xl text-[10px] font-medium"
                >
                  <Plus size={14} className="mr-1" /> New Category
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Show AddProductModal(if needed) */}
      {showModal && <AddProductModal onClose={() => setShowModal(false)} />}
         {/* Show AddProductModal(if needed) */}
         {showCategoryModal && <AddCategoryModal onClose={() => setShowCategoryModal(false)} />}

      {/* Content Section */}
      <div
        className={`mt-24 p-4 absolute transition-all duration-300 ${
          isCollapsed ? "left-[4rem] w-[calc(100%-4rem)]" : "left-[15rem] w-[calc(100%-15rem)]"
        }`}
      >
        {activeTab === "products" ? (
          <>
            {/* Product Statistics */}
            <ProductStats />

            {/* View Toggle: Table or Grid */}
            {view === "table" ? <ProductTable /> : <ProductGrid />}
          </>
        ) : (
          // Render Category Section
          <CategorySection />
        )}
      </div>
    </>
  );
};

export default ProductHeader;
