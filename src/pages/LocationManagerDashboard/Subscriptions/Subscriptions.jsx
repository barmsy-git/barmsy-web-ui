import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FiDownload, FiPrinter } from "react-icons/fi";
import { BsFilter } from "react-icons/bs";
import diamond from "../../../Assets/DiamondPayment.png"
import fluentSavings from "../../../Assets/fluent_savings.png"
import fluentE from "../../../Assets/fluentE.png"
import billing from "../../../Assets/billing.png"
import renew from "../../../Assets/renew.png"
import myImage from "../../../Assets/myImage.jpg"
import deleteButton from "../../../Assets/Delete.png"
import filter from "../../../Assets/Filter.png"
import print from "../../../Assets/Print.png"
import download from "../../../Assets/Download.png"
import AllBtn from "../../../Assets/AllnBtn.png"
import arrowDown from "../../../Assets/arrowDown.png"
import DateRange from "../../../Assets/DateRange.png"
import statusIcon from "../../../Assets/statusIcon.png"
import methodIcon from "../../../Assets/methodIcon.png"


const stats = [
    { icon: fluentE,  value: 234, label: "Total Products", color: "bg-blue-100 text-blue-500" },
    { icon: fluentSavings,  value: 234, label: "Active", color: "bg-purple-100 text-purple-500" },
    { 
        icon: diamond, 
        value: "Upgrade", 
        label: "Change Plan",  
        title: "Enterprise", 
        details: [ { text: "Billing - 10,000/ yr", icon: billing },
            { text: "Renews - march 23, 2025", icon: renew},
        ], 
       
        color: "bg-orange-500 text-white", 
        isWide: true 
      },

  ];

const PaymentsOverview = () => {


  const [currentPage, setCurrentPage] = useState(1);
 const [selectedRows, setSelectedRows] = useState(new Set()); 
 const [isOpen, setIsOpen] = useState(false);

 const locationsPerPage = 12;
const locations = Array.from({ length: 1253 }, (_, i) => ({
  id: i + 1,
  user: "Sochima Onah",
  date: "March 23, 2025",
  time: "01:30PM",
  paymentId: "06c177-7f3d-46ad...90a8",
  method: "Visa",
  total: "N20,000",
  status: "Successful",
}));
  
  const indexOfLastLocation = currentPage * locationsPerPage;
  const indexOfFirstLocation = indexOfLastLocation - locationsPerPage;
  const currentLocations = locations.slice(indexOfFirstLocation, indexOfLastLocation);

  const nextPage = () => {
    if (indexOfLastLocation < locations.length) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  // Handle checkbox selection
  const toggleRowSelection = (id) => {
    const updatedSelection = new Set(selectedRows);
    if (updatedSelection.has(id)) {
      updatedSelection.delete(id);
    } else {
      updatedSelection.add(id);
    }
    setSelectedRows(updatedSelection);
  };

  // Handle "Select All" checkbox
  const toggleSelectAll = () => {
    if (selectedRows.size === currentLocations.length) {
      setSelectedRows(new Set());
    } else {
      setSelectedRows(new Set(currentLocations.map((loc) => loc.id)));
    }
  };

  return (
    <div className="mt-16  min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold text-gray-900">Payments Overview</h2>
      
      </div>

      {/* Cards */}
      <div className="grid grid-cols-4 gap-4 mt-4">
      {stats.map((stat, index) => (
        <div 
          key={index} 
          className={`relative p-4 shadow-md rounded-lg flex items-center 
          ${stat.isWide ? "bg-orange-500 text-white col-span-2 w-full py-5 px-6" : "bg-white"}`}
        >
          {/* White Checkmark at Top Right */}
          {stat.isWide && (
            <div className="absolute top-5 right-3 w-4 h-4 bg-white text-orange-500 rounded-full flex items-center justify-center font-bold">
              ✔
            </div>
          )}

          {/* Left Side (Icon & Upgrade/Change Plan) */}
          <div className="flex items-center space-x-4">
            <div 
              className={`w-12 h-12 flex items-center justify-center rounded-full 
              ${stat.isWide ? "bg-orange-500" : "bg-gray-100"}`}
            >
              <img src={stat.icon} alt="icon" className="w-7 h-7 object-contain" />
            </div>
            <div>
              <p className="text-xl font-semibold">{stat.value}</p>
              <p className={`text-sm ${stat.isWide ? "underline" : ""}`}>{stat.label}</p>

            </div>
          </div>

          {/* Right Side (Enterprise, Billing, Renews closer to text) */}
          {stat.isWide && (
            <div className="mt-2 ml-14 text-left">
              <p className="text-xl font-bold">{stat.title}</p>
              <div className="mt-0.5 space-y-1">
                {stat.details.map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-1">
                    <img src={item.icon} alt="detail icon" className="w-4 h-4 object-contain" />
                    <p className="text-xs ">{item.text}</p>
                  </div>
                ))}
                  </div>
            </div>
          )}
        </div>
      ))}
    </div>

    {/* Selection Bar (Appears Above Table Headers) */}
          <div className="bg-white shadow-md rounded-lg mt-4 w-full">
          {selectedRows.size > 0 && (
            <div className="w-full  text-orange-500 px-4 py-2 rounded-t-lg flex justify-between items-center shadow-md z-50 mt-6">
              {/* Left Side: Selection Count & Cancel */}
              <div className="flex space-x-6 p-6 ">
                <span className="font-medium text-xs">{selectedRows.size} Selected</span>
                <button onClick={() => setSelectedRows(new Set())} className="text-orange-500 font-medium text-xs">
                  Cancel
                </button>
              </div>
    
              {/* Right Side: Edit & Delete Icons */}
              <div className="flex space-x-3  p-6">
              <button>
                <img src={deleteButton} className="h-4 w-4" alt="" />
                </button>
                <button >
                <img src={filter} className="h-4 w-4" alt="" />
                </button>
                <button >
                <img src={print} className="h-5 w-5" alt="" />
                </button>
                <button >
                <img src={download} className="h-4 w-4" alt="" />
                </button>
              
              </div>
            </div>
          )}

      {/* Filters */}
      <div className="mt-6 bg-white p-4 shadow-md rounded-lg flex justify-between">
        <div className="flex ">
          <button className=" border-r-2 text-[10px] px-4 py-2 rounded-md flex items-center gap-1">
           <img src={DateRange} alt="" className="mr-1"/> Date Range <img src={arrowDown} alt="" />
          </button>
          <button className=" text-[10px] px-4 py-2 rounded-md flex items-center">
          <img src={statusIcon} alt="" className="mr-1" /> Status
          </button>
          <button className="border-r-2  text-[10px] px-4 py-2 rounded-md flex items-center">
          <img src={methodIcon} alt="" className="mr-1" />   Payment Method 
          </button>
        </div>
        <div className="flex space-x-3">
        <div className="relative">
      {/* All Button */}
      <div 
        className="flex justify-center items-center space-x-1 bg-gray-100 rounded-full py-[8px] px-3 mt-1 cursor-pointer" 
        onClick={() => setIsOpen(!isOpen)}
      >
        <button className="text-gray-500 text-[10px]">All</button>
        <img src={AllBtn} alt="Dropdown Icon" className="h-4 w-4" />
      </div>

      {/* Dropdown Modal */}
      {isOpen && (
        <div className="absolute right-0 mt-1 w-24 bg-white shadow-md rounded-md border border-gray-200">
          <ul className="text-[10px] text-gray-700">
            {["Successful", "Pending", "Refunded", "Declined"].map((status, index) => (
              <li 
                key={index} 
                className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => {
                  console.log(status); // Handle click action here
                  setIsOpen(false);
                }}
              >
                {status}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>

          <button className="text-gray-500 text-xs"><FiPrinter /></button>
          <button className="text-gray-500 text-xs"><FiDownload /></button>
        </div>
      </div>

      {/* Table */}
 <table className="w-full text-xs text-left text-gray-600">
        <thead className="bg-gray-50 border-b">
  <tr>
    <th className="p-3 text-center">#</th>

    {/* Updated "Select All" Checkbox Column */}
    <th className="p-3 text-center">
      <label className="cursor-pointer flex items-center justify-center">
        <input
          type="checkbox"
          className="peer hidden"
          onChange={toggleSelectAll}
          checked={selectedRows.size === currentLocations.length}
        />
        <div className="w-3 h-3 border border-gray-400  flex items-center justify-center peer-checked:bg-orange-500 peer-checked:border-orange-500">
          {selectedRows.size === currentLocations.length && (
            <svg
              className="w-3 h-3 text-white"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          )}
        </div>
      </label>
    </th>

  
              <th className="p-3">Name of User</th>
              <th className="p-3">Creation Date</th>
              <th className="p-3">Payment ID</th>
              <th className="p-3">P. Method</th>
              <th className="p-3">Total</th>
              <th className="p-3">Status</th>
  </tr>
</thead>



          
          
          <tbody>
  {currentLocations.map((location) => (
    <tr key={location.id} className="border-b hover:bg-gray-50">
      <td className="p-3 text-center">{location.id}</td>

     
      <td className="p-3 text-center">
        <label className="cursor-pointer flex items-center justify-center">
          <input
            type="checkbox"
            className="peer hidden"
            checked={selectedRows.has(location.id)}
            onChange={() => toggleRowSelection(location.id)}
          />
          <div className="w-3 h-3 border border-gray-400  flex items-center justify-center peer-checked:bg-orange-500 peer-checked:border-orange-500">
            {selectedRows.has(location.id) && (
              <svg
                className="w-3 h-3 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            )}
          </div>
        </label>
      </td>

      <td className="p-3 text-[10px] font-semibold flex items-center">
        <img src={myImage} alt="" className="h-4 w-4 rounded-full mr-3" />
        {location.user}
      </td>
      <td className="p-3 text-[10px] font-semibold">{location.date}</td>
      <td className="p-3 text-[10px] font-semibold">{location.paymentId}</td>
      <td className="p-3 text-[10px] font-semibold">{location.method}</td>
      <td className="p-3 text-[10px] font-semibold">{location.total}</td>
      <span className={`px-3 py-1 text-[10px] font-semibold rounded-md 
            ${location.status === "Successful" ? "bg-green-200 text-green-700" : 
              location.status === "Declined" ? "bg-red-200 text-red-700" : 
              "bg-yellow-200 text-yellow-700"}`}>
            {location.status}
          </span>


    

     

      {/* Actions Column  */}
      {/* <td className="p-3 text-[10px] font-semibold text-center">
        <div className="flex justify-center space-x-3">
          <button>
            <img src={edit} className="h-4 w-4" alt="" />
          </button>
          <button>
            <img src={deleteButton} className="h-4 w-4" alt="" />
          </button>
        </div>
      </td> */}
    </tr>
  ))}
</tbody>



        </table>


      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4 w-full">
        <span className="text-[10px] text-gray-600">
          Showing {indexOfFirstLocation + 1}-{indexOfLastLocation} of {locations.length}
        </span>
        <div className="flex space-x-2 text-sm border-">
          <button onClick={prevPage} disabled={currentPage === 1} className={`px-3 py-1 rounded-md ${currentPage === 1 ? "bg-gray-50 cursor-not-allowed" : "bg-gray-200 text-black"}`}>
            &lt;
          </button>
          <button onClick={nextPage} disabled={indexOfLastLocation >= locations.length} className={`px-3 py-1 rounded-md ${indexOfLastLocation >= locations.length ? "bg-gray-50 cursor-not-allowed" : "bg-gray-200 text-black"}`}>
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentsOverview;
