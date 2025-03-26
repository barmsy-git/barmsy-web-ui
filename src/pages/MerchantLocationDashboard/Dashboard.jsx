

import { useState } from "react";
import Sidebar from "../../pages/MerchantLocationDashboard/Sidebar";
import TopBar from "../../pages/Dashboard/TopBar";
import RevenueChart from "../../pages/Dashboard/RevenueChart";



import Subscription from "../Dashboard SideBar/Subscription";
import Notifications from "../Dashboard SideBar/Notifications";

import Settings from "../Dashboard SideBar/Settings";
import Support from "../Dashboard SideBar/Support";
import DashboardCard from "../../pages/MerchantLocationDashboard/DashboardCard";
import OrderedItems from "../../pages/MerchantLocationDashboard/OrderedItems"
import BusinessProfile from "../../pages/MerchantLocationDashboard/BusinessProfile";
import RecentlyOrderedItems from "../../pages/MerchantLocationDashboard/RecentlyOrderedItems"
import OrderTime from "../../pages/MerchantLocationDashboard/OrderTime"
import count from "../../Assets/Count.png"
import image from "../../Assets/myImage.jpg"
import { FaMapMarkerAlt } from "react-icons/fa";

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
<div className="flex justify-between">
<header className="mb-2 relative z-10 pt-6
">
  <h2 className="text-2xl font-semibold text-gray-900">Dashboard</h2>
  <h2 className="text-gray-400 text-xs pb-4">Welcome!</h2>
</header>

<div className="mb-2 relative z-10 pt-6 ">
    <div className="shadow-md flex justify-center px-4 py-4 p-5 rounded-lg bg-white space-x-3">
         <div className="flex flex-col items-center">
                        <img 
                          src={image}
                          alt="Location" 
                          className="h-8 w-8 rounded-full object-cover" 
                        />
                       
                      </div>
        
                      {/* Right Section - Details */}
                      <div className="flex-1">
                      
        
                        {/* Address */}
                        <div className="flex items-center space-x-1">
                           <FaMapMarkerAlt className="text-black text-xs" />
                           <h2 className="text-xs font-medium">No.23, Gilbon Street</h2>
                         </div>
        
                        {/* Revenue & Growth - Side by Side */}
                        <div className="flex justify-start mt-1 space-x-1">
                          <p className="text-xs text-black">
                          
                            <img src={count} alt="" className="h-3 w-3 text-gray-300" />
                          </p>
                          <p className="text-xs  ">4 profiles </p>
                        </div>
                      </div>
    </div>
</div>
</div>


            {/* KPI Section */}
            <section className="mt-3">
              <DashboardCard />
            </section>

            {/* KPI Chart & Trending Items */}
            <section className="grid grid-cols-3 gap-6 mt-6">
            <div className="col-span-2 space-y-5">
  {/* KPI Chart - No Shared Shadow */}
  <div className="bg-white p-5 rounded-lg shadow-md">
    <RevenueChart />
  </div>

  {/* Order Volume - Separate Shadow */}
  {/* <div className="col-span-1 bg-white p-5 rounded-lg shadow-md h-full min-h-[300px]">
  <OrderedItems />
</div> */}

</div>
<div className="">
    <OrderedItems />
  </div>
            </section>

           {/* Recently Ordered Items & Order Time - Positioned Below KPI & Most Ordered Items */}
           <div className="flex gap-4 mt-4">
  <div className="w-[50%]">
    <RecentlyOrderedItems />
  </div>
  <div className="flex-1">
    <OrderTime />
  </div>
</div>


         
          </>
        )}

        {/* Other Pages */}
   



 
        {activePage === "Business Profile" && <BusinessProfile />}
        {activePage === "Subscription" && <Subscription/>}
        {activePage === "Notifications" && <Notifications/>}
        {activePage === "Settings" && <Settings/>}
        {activePage === "Support" && <Support/>}
        </div>
      </div>
  );
};

export default Dashboard;


