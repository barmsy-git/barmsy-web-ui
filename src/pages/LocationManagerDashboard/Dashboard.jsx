import { useState } from "react";
import Sidebar from "../../pages/LocationManagerDashboard/Sidebar";
import TopBar from "../../pages/Dashboard/TopBar";
import RatingChart from "../../pages/LocationManagerDashboard/RatingChart";
import OrderedItems from "../../pages/LocationManagerDashboard/OrderedItems";

import Order from "../../pages/LocationManagerDashboard/Orders";
import KpiChart from "../../pages/LocationManagerDashboard/KpiChart"
import OrderItem from "../../pages/LocationManagerDashboard/OrderItem"
import GenerateBarcode from "../Dashboard SideBar/GenerateBarcode";
import Products from "../Dashboard SideBar/Products";
import Orders from "../Dashboard SideBar/Orders";
import Reports from "../Dashboard SideBar/Reports";
import InventoryManagement from "../Dashboard SideBar/InventoryManagement";
import Reservation from "../Dashboard SideBar/Reservation";

import Notifications from "../Dashboard SideBar/Notifications";
import OrderVolume from "../Dashboard/OrderVolome";
import Settings from "../Dashboard SideBar/Settings";
import Support from "../Dashboard SideBar/Support";
import DashboardCard from "../../pages/Dashboard/DashboardCard";

const Dashboard = () => {
  const [activePage, setActivePage] = useState("Dashboard");
    const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className={`transition-all duration-300 fixed h-full ${isCollapsed ? "w-16" : "w-60"}`}>

        <Sidebar activePage={activePage} setActivePage={setActivePage} isCollapsed={isCollapsed} />
      </div>

  {/* Main Content Area */}
  
  <div className={`flex-1 p-6 transition-all duration-300 ${
  isCollapsed ? "ml-[4rem] w-[calc(100%-4rem)]" : "ml-[15rem] w-[calc(100%-15rem)]"
}`}>



<TopBar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />

        {activePage === "Dashboard" && (
          <>
            {/* Top Bar */}
            <div
        className={`flex-1 p-6 overflow-y-auto transition-all duration-300 ${
          isCollapsed ? "ml-16 w-[calc(100%-4rem)]" : "ml-64 w-[calc(100%-16rem)]"
        }`}
      >


            </div>

            {/* Dashboard Title */}
          {/* Dashboard Title */}
<header className="mb-2 relative z-10 pt-6
">
  <h2 className="text-2xl font-semibold text-gray-900">Dashboard</h2>
</header>


            <div className="flex justify-between flex-wrap min-w-0">
                {/* KPI Section */}
            <section className="mt-3 w-[63%]  mr-3 ">
              <KpiChart />
            </section>
            <section className="mt-3 flex-1 min-w-0">
            <OrderItem/>
            </section>
            </div>




            <section className="flex justify-between mt-6 gap-6 w-full h-[350px]">
  {/* Rating Chart */}
  <div className="bg-white p-5 rounded-lg shadow-md flex-1  flex flex-col">
    <RatingChart />
  </div>

  {/* Ordered Items */}
  <div className="bg-white p-5 rounded-lg shadow-md flex-1 flex flex-col">
    <OrderedItems />
  </div>

  {/* Trending Items */}
  <div className="bg-white p-5 rounded-lg shadow-md flex-1  flex flex-col">
    <Order />
  </div>
</section>



            {/* Recent Orders Section */}
            <div className="mt-6">
              
            </div>

         
          </>
        )}

        {/* Other Pages */}
   



        {activePage === "Generate Barcode" && <GenerateBarcode/>}
        <div className={`flex-1 transition-all duration-300 ${
  isCollapsed ? "ml-[4rem]" : "ml-[15rem]"
}`}>
        {activePage === "Products" && <Products isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />}
        </div>
        {activePage === "Orders" && <Orders/>}
        {activePage === "Reports" && <Reports/>}
        {activePage === "Inventory Management" && <InventoryManagement/>}
        {activePage === "Reservation" && <Reservation/>}
        {activePage === "Notifications" && <Notifications/>}
        {activePage === "Settings" && <Settings/>}
        {activePage === "Support" && <Support/>}
        </div>
      </div>
  );
};

export default Dashboard;


