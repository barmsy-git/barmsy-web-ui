import React, { useEffect, useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import AddLocationModal from "../Dashboard SideBar/AddLocationModal/AddLocationModal.jsx";
import myImage from "../../Assets/myImage.jpg"
import count from "../../Assets/Count.png"
import edit from "../../Assets/Edit.png"
import deleteButton from "../../Assets/Delete.png"
import filter from "../../Assets/Filter.png"
import print from "../../Assets/Print.png"
import download from "../../Assets/Download.png"
import Cookie from 'js-cookie'
import merchantService from "../../services/merchant-onboarding.js"
import Dashboard from "../../Assets/Dashboard.png";

const BusinessLocations = ({ locations, code,fetchDetails }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [selectedRows, setSelectedRows] = useState(new Set()); // Track selected checkboxes

  const locationsPerPage = 12;


  const indexOfLastLocation = currentPage * locationsPerPage;
  const indexOfFirstLocation = indexOfLastLocation - locationsPerPage;
  const currentLocations = locations?.slice(indexOfFirstLocation, indexOfLastLocation);

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
    <div className="flex-1 mt-7 overflow-y-auto transition-all duration-300">
      {/* Header */}
      <header className="relative z-10 flex justify-between pt-12">
        <h2 className="text-2xl font-semibold text-gray-900 ">Business Locations</h2>
        <button className="bg-orange-500 text-white px-6 py-2 rounded-full text-xs font-semibold" onClick={() => setShowModal(true)}>
          Add a Location
        </button>
      </header>

      {showModal && <AddLocationModal onClose={() => setShowModal(false)} code={code} fetchDetails={fetchDetails} />}

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
              <div onClick={() => {
                history?.push("/Location-Manager-dashboard")
              }}>
                <img src={Dashboard} className="h-4 pt-1 w-4" alt="" />
              </div>
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

        {/* Table Container */}


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
                    checked={selectedRows?.size === currentLocations?.length}
                  />
                  <div className="w-3 h-3 border border-gray-400  flex items-center justify-center peer-checked:bg-orange-500 peer-checked:border-orange-500">
                    {selectedRows?.size === currentLocations?.length && (
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

              <th className="p-3 text-xs">STREET NAME</th>
              <th className="p-3 text-xs">HOUSE NO.</th>
              <th className="p-3 text-xs">POSTAL CODE</th>
              <th className="p-3 text-xs">CITY</th>
              <th className="p-3 text-xs">STATE</th>
              <th className="p-3 text-xs">COUNTRY</th>
              <th className="p-3 text-xs text-center">PROFILES</th>
              <th className="p-3 text-xs text-center">ACTIONS</th>
            </tr>
          </thead>





          <tbody>
            {currentLocations?.map((location) => (
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
                  {location.streetName}
                </td>
                <td className="p-3 text-[10px] font-semibold">{location.houseNumber}</td>
                <td className="p-3 text-[10px] font-semibold">{location.postalCode}</td>
                <td className="p-3 text-[10px] font-semibold">{location.city}</td>
                <td className="p-3 text-[10px] font-semibold">{location.stateOrProvince}</td>
                <td className="p-3 text-[10px] font-semibold">{location.country}</td>




                {/* Profiles Column  */}
                <td className="p-3 text-[10px] font-semibold text-center flex items-center justify-center">
                  <img src={count} alt="" className="h-4 w-4 rounded-full mr-2" />
                  {location.profiles}
                </td>

                {/* Actions Column  */}
                <td className="p-3 text-[10px] font-semibold text-center">
                  <div className="flex justify-center space-x-3">
                    <button>
                      <img src={edit} className="h-4 w-4" alt="" />
                    </button>
                    <button>
                      <img src={deleteButton} className="h-4 w-4" alt="" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>



        </table>


      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4 w-full">
        <span className="text-[10px] text-gray-600">
          Showing {indexOfFirstLocation + 1}-{indexOfLastLocation} of {locations?.length}
        </span>
        <div className="flex space-x-2 text-sm border-">
          <button onClick={prevPage} disabled={currentPage === 1} className={`px-3 py-1 rounded-md ${currentPage === 1 ? "bg-gray-50 cursor-not-allowed" : "bg-gray-200 text-black"}`}>
            &lt;
          </button>
          <button onClick={nextPage} disabled={indexOfLastLocation >= locations?.length} className={`px-3 py-1 rounded-md ${indexOfLastLocation >= locations?.length ? "bg-gray-50 cursor-not-allowed" : "bg-gray-200 text-black"}`}>
            &gt;
          </button>
        </div>
      </div>

    </div>
  );
};

export default BusinessLocations;


