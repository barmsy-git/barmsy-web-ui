import React, { useState } from "react";
import Header from "../components/Layout/Header";
// import Food from "../components/Route/Food/Food";
import Category from "../components/Route/Category/Category.jsx";
import Order from "../components/order/Order.jsx";

function HomePage() {
  const [openOrder, setOpenOrder] = useState(false);
  return (
    <div className="relative">
      {/* Order Sidebar */}
      {openOrder && <Order setOpenOrder={setOpenOrder} />}

      <div>
        <Header
          activeHeading={1}
          openOrder={openOrder}
          setOpenOrder={setOpenOrder}
        />
        {/* Only Category Adjusts */}
        <div
          className={`transition-all duration-300 ${
            openOrder ? "ml-10" : "ml-0"
          }`}
        >
          <Category openOrder={openOrder} setOpenOrder={setOpenOrder} />
        </div>

        {/* <Food /> */}
      </div>
    </div>
  );
}

export default HomePage;
