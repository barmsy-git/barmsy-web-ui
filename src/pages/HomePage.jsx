import React, { useState } from "react";
import AppLayout from "../components/Layout/AppLayout.jsx";
import Category from "../components/Category/Category.jsx";

function HomePage() {
  const [openOrder, setOpenOrder] = useState(false)
  return (
    <AppLayout>
      <div
        className={`transition-all duration-300 ml-0"
          }`}
      >
        <Category openOrder={openOrder} setOpenOrder={setOpenOrder} />
      </div>
    </AppLayout>
  );
}

export default HomePage;
