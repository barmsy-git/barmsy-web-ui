// import React, { useState } from "react";
// import downArrow from "../../Assets/downArrow.png"

// const ordersData = [
//   {
//     id: 1,
//     table: "T23",
//     name: "Sochima Onah",
//     guests: 3,
//     amount: 2000,
//     time: "07:30 PM",
//     status: "Completed",
//     paid: true,
//   },
//   {
//     id: 2,
//     table: "T23",
//     name: "Sochima Onah",
//     guests: 3,
//     amount: 2000,
//     time: "07:30 PM",
//     status: "Incoming",
//     paid: false,
//   },
//   {
//     id: 3,
//     table: "T23",
//     name: "Sochima Onah",
//     guests: 3,
//     amount: 2000,
//     time: "07:30 PM",
//     status: "Preparing",
//     paid: true,
//   },
//   {
//     id: 3,
//     table: "T23",
//     name: "Sochima Onah",
//     guests: 3,
//     amount: 2000,
//     time: "07:30 PM",
//     status: "Preparing",
//     paid: true,
//   },
//   {
//     id: 3,
//     table: "T23",
//     name: "Sochima Onah",
//     guests: 3,
//     amount: 2000,
//     time: "07:30 PM",
//     status: "Preparing",
//     paid: true,
//   },
//   { id: 1, table: "T23", name: "Sochima Onah", guests: 3, amount: 2000, time: "07:30 PM", status: "Completed", paid: true },
//   { id: 2, table: "T23", name: "Sochima Onah", guests: 3, amount: 2000, time: "07:30 PM", status: "Incoming", paid: false },
//   { id: 3, table: "T23", name: "Sochima Onah", guests: 3, amount: 2000, time: "07:30 PM", status: "Preparing", paid: true },
//   { id: 4, table: "T23", name: "Sochima Onah", guests: 3, amount: 2000, time: "07:30 PM", status: "Ready", paid: true },
//   { id: 5, table: "T23", name: "Sochima Onah", guests: 3, amount: 2000, time: "07:30 PM", status: "Scheduled", paid: true },
// ];

// // Order status tabs
// const statusTabs = ["All", "Incoming", "Preparing", "Ready", "Scheduled"];

// const OrdersPage = () => {
//   const [selectedTab, setSelectedTab] = useState("All");

//   // Filter orders dynamically
//   const filteredOrders = selectedTab === "All" ? ordersData : ordersData.filter(order => order.status === selectedTab);

//   // Get order counts per category
//   const orderCounts = statusTabs.reduce((counts, status) => {
//     counts[status] = status === "All" ? ordersData.length : ordersData.filter(order => order.status === status).length;
//     return counts;
//   }, {});

//   return (
//     <div className=" pt-16 w-full h-screen bg-gray-100">
//       {/* Top Bar */}
//       <div className="flex justify-between items-center mb-4">
//         <h1 className="text-xl font-bold">Orders</h1>
//        <div className="space-x-3 flex">
//        <button className=" flex gap-2 text-black font-semibold px-4 pl-8 pr-8 text-xs py-2 border  rounded-full">
//           Board <span className="h-4 w-3"><img src={downArrow} alt="" className="pt-1" /></span>
//         </button>
//         <button className="bg-orange-500 text-white px-5 py-2 text-xs rounded-full">
//           New Order
//         </button>
        
//        </div>
      
//       </div>

//       <hr className="-mt-2" />


// <div className="flex px-2 py-2 items-center space-x-6 -ml-2 mt-2">
//         {statusTabs.map((tab) => (
//           <div
//             key={tab}
//             className={`flex items-center space-x-2 px-3 py-1 rounded-full cursor-pointer ${
//               selectedTab === tab ? "bg-white text-black" : "border border-gray-300 "
//             }`}
//             onClick={() => setSelectedTab(tab)}
//           >
//             <span className="text-[10px]">{tab}</span>
//             <span className="bg-orange-500 text-white text-[8px] w-4 h-4 flex items-center justify-center rounded-full">
//               {orderCounts[tab]}
//             </span>
//           </div>
//         ))}
//       </div>

//       {/* Orders List */}
   
//       <div className="grid grid-cols-5 gap-3 mt-6 items-start text-xs">
//   {statusTabs
//     .filter((status) => selectedTab === "All" || status === selectedTab) 
//     .map((status) => {
//       const filteredOrders = ordersData.filter(
//         (order) => status === "All" || order.status === status
//       );

//       return (
//         <div key={status} className="bg-[#e7e7e7] shadow-lg rounded-2xl p-4 text-[10px]">
//  <h2 className="text-sm font-semibold text-gray-800 mb-2 flex items-center space-x-2">
//   <span>{status === "All" ? "Completed" : status}</span>
//   <span className="bg-orange-500 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full cursor-not-allowed">
//     {orderCounts[status]}
//   </span>
// </h2>



//           {filteredOrders.length > 0 ? (
//             <div className="space-y-4"> 
//               {filteredOrders.map((order) => (
//                 <div 
//   key={order.id} 
//   className={`p-3 rounded-lg shadow-sm ${
//     status === "All" ?"bg-[#f7f6f6]" : "bg-white"
//   } w-full min-h-[120px]`}
// >

                  
//                   <h3 className="font-semibold text-[7px]">{order.table} {order.name}</h3>
//                   <p className="text-sm text-gray-600 text-[7px]">Guests: {order.guests}</p>
//                   <p className="text-sm font-bold text-[7px]">₦{order.amount}</p>
//                   <p className="text-sm text-gray-600 text-[7px]">Serve at {order.time}</p>
//                   <span
//                     className={`mt-2 inline-block px-2 py-1 text-xs font-semibold rounded-full ${
//                       order.paid ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600 "
//                     }`}
//                   >
//                     {order.paid ? "Paid" : "Not Paid"}
//                   </span>
//                 </div>
//               ))}
//             </div>
//           ) : (
//             <p className="text-sm text-gray-500">No orders found.</p>
//           )}
//         </div>
//       );
//     })}
// </div>




//     </div>
//   );
// };

// export default OrdersPage;


import React, { useState } from "react";
import downArrow from "../../Assets/downArrow.png"

const ordersData = [
  {
    id: 1,
    table: "T23",
    name: "Sochima Onah",
    guests: 3,
    amount: 2000,
    time: "07:30 PM",
    status: "Completed",
    paid: true,
  },
  {
    id: 2,
    table: "T23",
    name: "Sochima Onah",
    guests: 3,
    amount: 2000,
    time: "07:30 PM",
    status: "Incoming",
    paid: false,
  },
  {
    id: 3,
    table: "T23",
    name: "Sochima Onah",
    guests: 3,
    amount: 2000,
    time: "07:30 PM",
    status: "Preparing",
    paid: true,
  },
  {
    id: 3,
    table: "T23",
    name: "Sochima Onah",
    guests: 3,
    amount: 2000,
    time: "07:30 PM",
    status: "Preparing",
    paid: true,
  },
  {
    id: 3,
    table: "T23",
    name: "Sochima Onah",
    guests: 3,
    amount: 2000,
    time: "07:30 PM",
    status: "Preparing",
    paid: true,
  },
  { id: 1, table: "T23", name: "Sochima Onah", guests: 3, amount: 2000, time: "07:30 PM", status: "Completed", paid: true },
  { id: 2, table: "T23", name: "Sochima Onah", guests: 3, amount: 2000, time: "07:30 PM", status: "Incoming", paid: false },
  { id: 3, table: "T23", name: "Sochima Onah", guests: 3, amount: 2000, time: "07:30 PM", status: "Preparing", paid: true },
  { id: 4, table: "T23", name: "Sochima Onah", guests: 3, amount: 2000, time: "07:30 PM", status: "Ready", paid: true },
  { id: 5, table: "T23", name: "Sochima Onah", guests: 3, amount: 2000, time: "07:30 PM", status: "Scheduled", paid: true },
];

// Order status tabs
const statusTabs = ["All", "Incoming", "Preparing", "Ready", "Scheduled"];

const OrdersPage = () => {
  const [selectedTab, setSelectedTab] = useState("All");

  // Filter orders dynamically
  const filteredOrders = selectedTab === "All" ? ordersData : ordersData.filter(order => order.status === selectedTab);

  // Get order counts per category
  const orderCounts = statusTabs.reduce((counts, status) => {
    counts[status] = status === "All" ? ordersData.length : ordersData.filter(order => order.status === status).length;
    return counts;
  }, {});

  return (
    <div className=" pt-16 w-full h-screen bg-gray-100">
      {/* Top Bar */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold">Orders</h1>
       <div className="space-x-3 flex">
       <button className=" flex gap-2 text-black font-semibold px-4 pl-8 pr-8 text-xs py-2 border  rounded-full">
          Board <span className="h-4 w-3"><img src={downArrow} alt="" className="pt-1" /></span>
        </button>
        <button className="bg-orange-500 text-white px-5 py-2 text-xs rounded-full">
          New Order
        </button>
        
       </div>
      
      </div>

      <hr className="-mt-2" />


<div className="flex px-2 py-2 items-center space-x-6 -ml-2 mt-2">
        {statusTabs.map((tab) => (
          <div
            key={tab}
            className={`flex items-center space-x-2 px-3 py-1 rounded-full cursor-pointer ${
              selectedTab === tab ? "bg-white text-black" : "border border-gray-300 "
            }`}
            onClick={() => setSelectedTab(tab)}
          >
            <span className="text-[10px]">{tab}</span>
            <span className="bg-orange-500 text-white text-[8px] w-4 h-4 flex items-center justify-center rounded-full">
              {orderCounts[tab]}
            </span>
          </div>
        ))}
      </div>

   {/* Orders List with Scroll */}
<div className="flex gap-3 overflow-x-auto px-2 py-4 cursor-grab active:cursor-grabbing items-start">
  {statusTabs
    .filter((status) => selectedTab === "All" || status === selectedTab) 
    .map((status) => {
      const filteredOrders = ordersData.filter(
        (order) => status === "All" || order.status === status
      );

      return (
        <div 
          key={status} 
          className="bg-[#e7e7e7] shadow-lg rounded-2xl p-4 text-[10px] w-[300px] min-w-[300px] flex flex-col"
        >
          {/* Status Header */}
          <h2 className="text-sm font-semibold text-gray-800 mb-2 flex items-center space-x-2">
            <span>{status === "All" ? "Completed" : status}</span>
            <span className="bg-orange-500 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full cursor-not-allowed">
              {orderCounts[status]}
            </span>
          </h2>

          {/* Order Cards */}
          <div className="space-y-4">
            {filteredOrders.length > 0 ? (
              filteredOrders.map((order) => (
                <div 
                  key={order.id} 
                  className={`p-3 rounded-lg shadow-sm ${
                    status === "All" ? "bg-[#f7f6f6]" : "bg-white"
                  } w-full`}
                >
                  <h3 className="font-semibold text-[7px]">{order.table} {order.name}</h3>
                  <p className="text-sm text-gray-600 text-[7px]">Guests: {order.guests}</p>
                  <p className="text-sm font-bold text-[7px]">₦{order.amount}</p>
                  <p className="text-sm text-gray-600 text-[7px]">Serve at {order.time}</p>
                  <span
                    className={`mt-2 inline-block px-2 py-1 text-xs font-semibold rounded-full ${
                      order.paid ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"
                    }`}
                  >
                    {order.paid ? "Paid" : "Not Paid"}
                  </span>
                </div>
              ))
            ) : (
              <p className="text-sm text-gray-500">No orders found.</p>
            )}
          </div>
        </div>
      );
    })}
</div>






    </div>
  );
};

export default OrdersPage;
