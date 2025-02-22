// // import React, { useState } from "react";
// // import { Line } from "react-chartjs-2";
// // import {
// //   Chart as ChartJS,
// //   LineElement,
// //   PointElement,
// //   CategoryScale,
// //   LinearScale,
// // } from "chart.js";
// // import { AiOutlineSearch, AiOutlineBell } from "react-icons/ai";
// // import { MdKeyboardArrowDown } from "react-icons/md";
// // import { FiLogOut } from "react-icons/fi";
// // import { FaFire, FaArrowUp, FaArrowDown } from "react-icons/fa";

// // // Register ChartJS components
// // ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale);

// // const Dashboard = () => {
// //   const [activeTab, setActiveTab] = useState("Today");

// //   // Dummy data for total revenue chart
// //   const revenueData = {
// //     labels: ["12:00 AM", "6:00 AM", "12:00 PM", "6:00 PM", "11:59 PM"],
// //     datasets: [
// //       {
// //         label: "Total Revenue",
// //         data: [10, 14, 30, 50, 40],
// //         borderColor: "#ff6600",
// //         backgroundColor: "rgba(255, 102, 0, 0.2)",
// //         tension: 0.4,
// //       },
// //     ],
// //   };

// //   return (
// //     <div className="flex bg-gray-100 min-h-screen">
// //       {/* Sidebar */}
// //       <div className="w-64 bg-white shadow-md p-5 flex flex-col">
// //         <h2 className="text-orange-500 font-bold text-2xl">Barmsy</h2>
// //         <ul className="mt-6 space-y-4">
// //           <li className="text-orange-500 font-semibold cursor-pointer">Dashboard</li>
// //           <li className="text-gray-600 hover:text-orange-500 cursor-pointer">Business Profile</li>
// //           <li className="text-gray-600 hover:text-orange-500 cursor-pointer">Subscription</li>
// //           <li className="text-gray-600 hover:text-orange-500 cursor-pointer">Products</li>
// //           <li className="text-gray-600 hover:text-orange-500 cursor-pointer">Orders</li>
// //           <li className="text-gray-600 hover:text-orange-500 cursor-pointer">Reports</li>
// //         </ul>
// //         <div className="mt-auto pt-10">
// //           <button className="text-gray-600 hover:text-orange-500 flex items-center">
// //             <FiLogOut className="mr-2" /> Logout
// //           </button>
// //         </div>
// //       </div>

// //       {/* Main Dashboard */}
// //       <div className="flex-1 p-6">
// //         {/* Header */}
// //         <div className="fixed top-0 left-64 right-0 bg-white shadow-md p-4 flex justify-between items-center z-50">
// //           <div className="relative">
// //             <input
// //               type="text"
// //               placeholder="Search..."
// //               className="border rounded-lg px-4 py-2 w-96"
// //             />
// //             <AiOutlineSearch className="absolute right-3 top-3 text-gray-400" />
// //           </div>
// //           <div className="flex items-center space-x-4">
// //             <AiOutlineBell className="text-xl text-gray-600 cursor-pointer" />
// //             <div className="flex items-center space-x-2">
// //               <img src="/user.jpg" alt="Admin" className="w-10 h-10 rounded-full" />
// //               <MdKeyboardArrowDown className="text-gray-600" />
// //             </div>
// //           </div>
// //         </div>

// //         {/* Revenue & Trending Section */}
// //         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">
// //           <div className="md:col-span-2 bg-white p-6 rounded-lg shadow">
// //             <div className="flex justify-between items-center">
// //               <h3 className="font-semibold text-lg">Total Revenue</h3>
// //               <div className="flex space-x-2">
// //                 {["Today", "Weekly", "Monthly"].map((tab) => (
// //                   <button
// //                     key={tab}
// //                     className={`px-4 py-1 border rounded-lg ${
// //                       activeTab === tab ? "bg-orange-500 text-white" : "text-gray-600"
// //                     }`}
// //                     onClick={() => setActiveTab(tab)}
// //                   >
// //                     {tab}
// //                   </button>
// //                 ))}
// //               </div>
// //             </div>
// //             <Line data={revenueData} />
// //             <h2 className="text-xl font-bold text-orange-500 mt-3">₦10 Trillion</h2>
// //           </div>

// //           {/* Trending Items */}
// //           <div className="bg-white p-6 rounded-lg shadow">
// //             <div className="flex justify-between items-center mb-4">
// //               <h3 className="font-semibold text-lg flex items-center">
// //                 <FaFire className="text-orange-500 mr-2" /> Trending Items
// //               </h3>
// //               <select className="border p-2 rounded-lg">
// //                 <option>Today</option>
// //                 <option>Weekly</option>
// //                 <option>Monthly</option>
// //               </select>
// //             </div>
// //             {[1, 2, 3, 4, 5, 6].map((id) => (
// //               <div key={id} className="flex items-center border-b py-2">
// //                 <span className="text-gray-600 font-medium w-8">#{id}</span>
// //                 <img src="/jollof.jpg" alt="Jollof Rice" className="w-10 h-10 rounded-md" />
// //                 <div className="ml-2 flex-1">
// //                   <p className="text-gray-700 font-medium">Lorem ipsum dolor sit</p>
// //                   <span className="text-gray-500 text-sm">₦2,000 • Jollof Rice</span>
// //                 </div>
// //                 <span className="text-gray-700 font-bold">250</span>
// //                 <span className={`ml-2 flex items-center ${id % 2 === 0 ? "text-green-500" : "text-red-500"}`}>
// //                   {id % 2 === 0 ? <FaArrowUp className="mr-1" /> : <FaArrowDown className="mr-1" />} 9.6%
// //                 </span>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Dashboard;




// // import React, { useState } from "react";
// // import { Line } from "react-chartjs-2";
// // import {
// //   Chart as ChartJS,
// //   LineElement,
// //   PointElement,
// //   CategoryScale,
// //   LinearScale,
// // } from "chart.js";
// // import { AiOutlineSearch, AiOutlineBell } from "react-icons/ai";
// // import { MdKeyboardArrowDown } from "react-icons/md";
// // import { FiLogOut } from "react-icons/fi";
// // import { FaFire } from "react-icons/fa";

// // // Register ChartJS components
// // ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale);

// // const Dashboard = () => {
// //   const [activeTab, setActiveTab] = useState("Today");

// //   // Generate mini line chart data
// //   const generateTrendData = (isUp) => ({
// //     labels: ["", "", "", "", ""],
// //     datasets: [
// //       {
// //         data: isUp ? [5, 10, 7, 12, 15] : [15, 12, 10, 7, 5],
// //         borderColor: isUp ? "#16a34a" : "#dc2626",
// //         backgroundColor: "transparent",
// //         tension: 0.4,
// //         borderWidth: 2,
// //         pointRadius: 0,
// //       },
// //     ],
// //   });

// //   return (
// //     <div className="flex bg-gray-100 min-h-screen">
// //       {/* Sidebar */}
// //       <div className="w-64 bg-white shadow-md p-5 flex flex-col">
// //         <h2 className="text-orange-500 font-bold text-2xl">Barmsy</h2>
// //         <ul className="mt-6 space-y-4">
// //           <li className="text-orange-500 font-semibold cursor-pointer">Dashboard</li>
// //           <li className="text-gray-600 hover:text-orange-500 cursor-pointer">Business Profile</li>
// //           <li className="text-gray-600 hover:text-orange-500 cursor-pointer">Subscription</li>
// //           <li className="text-gray-600 hover:text-orange-500 cursor-pointer">Products</li>
// //           <li className="text-gray-600 hover:text-orange-500 cursor-pointer">Orders</li>
// //           <li className="text-gray-600 hover:text-orange-500 cursor-pointer">Reports</li>
// //         </ul>
// //         <div className="mt-auto pt-10">
// //           <button className="text-gray-600 hover:text-orange-500 flex items-center">
// //             <FiLogOut className="mr-2" /> Logout
// //           </button>
// //         </div>
// //       </div>

// //       {/* Main Dashboard */}
// //       <div className="flex-1 p-6">
// //         {/* Header */}
// //         <div className="fixed top-0 left-64 right-0 bg-white shadow-md p-4 flex justify-between items-center z-50">
// //           <div className="relative">
// //             <input
// //               type="text"
// //               placeholder="Search..."
// //               className="border rounded-lg px-4 py-2 w-96"
// //             />
// //             <AiOutlineSearch className="absolute right-3 top-3 text-gray-400" />
// //           </div>
// //           <div className="flex items-center space-x-4">
// //             <AiOutlineBell className="text-xl text-gray-600 cursor-pointer" />
// //             <div className="flex items-center space-x-2">
// //               <img src="/user.jpg" alt="Admin" className="w-10 h-10 rounded-full" />
// //               <MdKeyboardArrowDown className="text-gray-600" />
// //             </div>
// //           </div>
// //         </div>

// //         {/* Trending Items Section */}
// //         <div className="bg-white p-6 rounded-lg shadow mt-20">
// //           <div className="flex justify-between items-center mb-4">
// //             <h3 className="font-semibold text-lg flex items-center">
// //               <FaFire className="text-orange-500 mr-2" /> Trending Items
// //             </h3>
// //             <select 
// //               className="border p-2 rounded-lg" 
// //               value={activeTab} 
// //               onChange={(e) => setActiveTab(e.target.value)}
// //             >
// //               <option>Today</option>
// //               <option>Weekly</option>
// //               <option>Monthly</option>
// //             </select>
// //           </div>
// //           {[1, 2, 3, 4, 5, 6].map((id) => {
// //             const isUp = id % 2 === 0;
// //             return (
// //               <div key={id} className="flex items-center border-b py-2">
// //                 <span className="text-gray-600 font-medium w-8">#{id}</span>
// //                 <img src="/jollof.jpg" alt="Jollof Rice" className="w-10 h-10 rounded-md" />
// //                 <div className="ml-2 flex-1">
// //                   <p className="text-gray-700 font-medium">Lorem ipsum dolor sit</p>
// //                   <span className="text-gray-500 text-sm">₦2,000 • Jollof Rice</span>
// //                 </div>
// //                 <span className="text-gray-700 font-bold">250</span>
// //                 <div className="w-16 h-8">
// //                   <Line data={generateTrendData(isUp)} options={{
// //                     responsive: true,
// //                     maintainAspectRatio: false,
// //                     scales: { x: { display: false }, y: { display: false } },
// //                     elements: { line: { tension: 0.4 }, point: { radius: 0 } },
// //                     plugins: { legend: { display: false } }
// //                   }} />
// //                 </div>
// //               </div>
// //             );
// //           })}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Dashboard;

// import { useState } from "react";
// import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
// import { FaArrowUp, FaArrowDown } from "react-icons/fa";

// const Dashboard = () => {
//   const [timeFilter, setTimeFilter] = useState("Today");

//   // KPI Data
//   const kpiData = [
//     { orders: 567, location: "No. 23, Gibbon Str...", status: "Open", revenue: "₦100K", growth: 9.6 },
//     { orders: 567, location: "No. 23, Gibbon Str...", status: "Closed", revenue: "₦100K", growth: 9.6 },
//     { orders: 567, location: "No. 23, Gibbon Str...", status: "Open", revenue: "₦100K", growth: 9.6 },
//     { orders: 567, location: "No. 23, Gibbon Str...", status: "Closed", revenue: "₦100K", growth: 9.6 },
//   ];

//   // Revenue Chart Data
//   const revenueData = [
//     { time: "12:00 am", revenue: 10 },
//     { time: "6:00 am", revenue: 15 },
//     { time: "12:00 pm", revenue: 30 },
//     { time: "6:00 pm", revenue: 45 },
//     { time: "11:59 pm", revenue: 35 },
//   ];

//   // Trending Items
//   const trendingItems = [
//     { name: "Jollof Rice", price: "₦2,000", sales: 250, growth: 8.5 },
//     { name: "Jollof Rice", price: "₦2,000", sales: 250, growth: 9.6 },
//     { name: "Jollof Rice", price: "₦2,000", sales: 250, growth: 9.6 },
//     { name: "Jollof Rice", price: "₦2,000", sales: 250, growth: -6.8 },
//     { name: "Jollof Rice", price: "₦2,000", sales: 250, growth: 9.6 },
//   ];

//   // Recent Orders
//   const recentOrders = [
//     { id: "00001", customer: "John Doe", item: "Jollof Rice", price: "₦2,000", date: "28 May 2019", status: "Processing" },
//     { id: "00001", customer: "John Doe", item: "Jollof Rice", price: "₦2,000", date: "28 May 2019", status: "Processing" },
//     { id: "00001", customer: "John Doe", item: "Jollof Rice", price: "₦2,000", date: "28 May 2019", status: "Processing" },
//     { id: "00001", customer: "John Doe", item: "Jollof Rice", price: "₦2,000", date: "28 May 2019", status: "Processing" },
//   ];

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       {/* Header */}
//       <div className="flex justify-between items-center mb-6">
//         <h2 className="text-2xl font-semibold">Dashboard</h2>
//         <input type="text" placeholder="Search..." className="px-4 py-2 rounded-md border w-64" />
//       </div>

//       {/* KPI Cards */}
//       <div className="grid grid-cols-4 gap-4 mb-6">
//         {kpiData.map((kpi, index) => (
//           <div key={index} className="bg-white p-4 rounded-lg shadow-md">
//             <p className="text-lg font-semibold">{kpi.orders} Orders</p>
//             <p className="text-sm text-gray-600">{kpi.location}</p>
//             <p className={`mt-1 text-sm font-semibold ${kpi.status === "Open" ? "text-green-500" : "text-red-500"}`}>
//               {kpi.status}
//             </p>
//             <p className="mt-1 text-lg">{kpi.revenue}</p>
//             <p className="text-sm flex items-center">
//               {kpi.growth > 0 ? <FaArrowUp className="text-green-500" /> : <FaArrowDown className="text-red-500" />}
//               {kpi.growth}%
//             </p>
//           </div>
//         ))}
//       </div>

//       {/* Revenue Chart & Trending Items */}
//       <div className="grid grid-cols-3 gap-6">
//         {/* Revenue Chart */}
//         <div className="col-span-2 bg-white p-6 rounded-lg shadow-md">
//           <div className="flex justify-between items-center mb-4">
//             <h3 className="text-lg font-semibold">Total Revenue</h3>
//             <div className="flex gap-2">
//               {["Monthly", "Weekly", "Today"].map((filter) => (
//                 <button
//                   key={filter}
//                   className={`px-4 py-2 rounded-lg text-sm font-semibold ${
//                     timeFilter === filter ? "bg-blue-500 text-white" : "bg-gray-200"
//                   }`}
//                   onClick={() => setTimeFilter(filter)}
//                 >
//                   {filter}
//                 </button>
//               ))}
//             </div>
//           </div>
//           <ResponsiveContainer width="100%" height={250}>
//             <LineChart data={revenueData}>
//               <XAxis dataKey="time" />
//               <YAxis />
//               <Tooltip />
//               <Line type="monotone" dataKey="revenue" stroke="#FF5733" strokeWidth={2} dot={{ fill: "black" }} />
//             </LineChart>
//           </ResponsiveContainer>
//         </div>

//         {/* Trending Items */}
//         <div className="bg-white p-6 rounded-lg shadow-md">
//           <div className="flex justify-between items-center mb-4">
//             <h3 className="text-lg font-semibold">🔥 Trending Items</h3>
//             <select className="border px-2 py-1 rounded-md">
//               <option>Today</option>
//               <option>Weekly</option>
//               <option>Monthly</option>
//             </select>
//           </div>
//           <ul>
//             {trendingItems.map((item, index) => (
//               <li key={index} className="flex justify-between py-2 border-b last:border-0">
//                 <span>#{index + 1}</span>
//                 <span>{item.name}</span>
//                 <span>{item.price}</span>
//                 <span>{item.sales}</span>
//                 <span className={`flex items-center ${item.growth > 0 ? "text-green-500" : "text-red-500"}`}>
//                   {item.growth > 0 ? <FaArrowUp /> : <FaArrowDown />} {item.growth}%
//                 </span>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>

//       {/* Recent Orders */}
//       <div className="bg-white mt-6 p-6 rounded-lg shadow-md">
//         <h3 className="text-lg font-semibold mb-4">Recent Orders</h3>
//         <table className="w-full text-left">
//           <thead>
//             <tr className="border-b">
//               <th>ID</th>
//               <th>Customer</th>
//               <th>Item</th>
//               <th>Price</th>
//               <th>Date</th>
//               <th>Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             {recentOrders.map((order) => (
//               <tr key={order.id} className="border-b">
//                 <td>{order.id}</td>
//                 <td>{order.customer}</td>
//                 <td>{order.item}</td>
//                 <td>{order.price}</td>
//                 <td>{order.date}</td>
//                 <td className="text-orange-500">{order.status}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

import { useState } from "react";
import Sidebar from "../../pages/Dashboard/Sidebar";
import TopBar from "../../pages/Dashboard/TopBar";
import RevenueChart from "../../pages/Dashboard/RevenueChart";
import RecentOrders from "../../pages/Dashboard/RecentOrders";
import TrendingItems from "../../pages/Dashboard/TrendingItems";
import BusinessLocations from "../Dashboard SideBar/BusinessLocations";
import BusinessProfile from "../Dashboard SideBar/BusinessProfile";
import Subscription from "../Dashboard SideBar/Subscription";
import Notifications from "../Dashboard SideBar/Notifications";
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
      <div className={`flex-1 p-6 overflow-y-auto transition-all duration-300 ${
  isCollapsed ? "ml-16 w-[calc(100%-4rem)]" : "ml-60 w-[calc(100%-15rem)]"
}`}>

        {activePage === "Dashboard" && (
          <>
            {/* Top Bar */}
            <div
        className={`flex-1 p-6 overflow-y-auto transition-all duration-300 ${
          isCollapsed ? "ml-16 w-[calc(100%-4rem)]" : "ml-64 w-[calc(100%-16rem)]"
        }`}
      >
            <TopBar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
            </div>

            {/* Dashboard Title */}
          {/* Dashboard Title */}
<header className="mb-2 relative z-10 pt-6
">
  <h2 className="text-2xl font-semibold text-gray-900">Dashboard</h2>
</header>


            {/* KPI Section */}
            <section className="mt-3">
              <DashboardCard />
            </section>

            {/* KPI Chart & Trending Items */}
            <section className="grid grid-cols-3 gap-6 mt-6">
              <div className="col-span-2 bg-white p-5 rounded-lg shadow-md">
                {/* <h3 className="text-gray-700 font-semibold mb-2">Key Performance Indicator</h3> */}
                <RevenueChart />
              </div>
              <TrendingItems />
            </section>

            {/* Recent Orders Section */}
            <div className="mt-6">
              <RecentOrders />
            </div>
          </>
        )}

        {/* Other Pages */}
        {activePage === "Business Locations" && <BusinessLocations/>}
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


