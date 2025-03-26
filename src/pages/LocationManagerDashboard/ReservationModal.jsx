import React, { useState } from "react";
import OrangeProfile from "../../Assets/profile-orange.png";
import GrayProfile from "../../Assets/profile-gray.png";

const ReservationForm = ({ onClose, table }) => {
    console.log("Selected Table:", table);
  const [note, setNote] = useState("");
  const [selectedProfiles, setSelectedProfiles] = useState(null);

  const handleProfileSelect = (index) => {
    setSelectedProfiles(index + 1);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[9999]">
      <div className="relative mt-24 bg-white w-[450px] p-6 rounded-lg shadow-lg">
        {/* ✅ Fix Close Button */}
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          ✖
        </button>
      <div className="flex justify-between">
      <div className="absolute top-12 left-2  text-black font-bold text-[11px] px-3 py-1">
   12:30 AM
  </div>
      <div className="absolute top-12 right-2  text-black font-bold text-[11px] px-3 py-1">
   T {table?.id}
  </div>
      </div>

        <div className="mt-16">
          <label className="text-[10px] font-bold">Name</label>
          <input
            type="text"
            className="w-full border-b border-gray-300 focus:outline-none focus:border-gray-300 text-xs mt-4"
            placeholder="Charles"
          />
        </div>

        <div className="mt-4 flex gap-8 justify-start items-start">
          <div className="w-1/2 text-[10px] justify-start">
            <label className="text-[10px] font-bold">Date</label>
            <input
              type="date"
              className="w-full border-b border-gray-300 focus:outline-none focus:border-orange-500 mt-4 pr-16"
            />
          </div>
          <div className="w-1/2 text-[10px] text-left">
            <label className="text-[10px] font-bold ">Time</label>
            <input
              type="time"
              className="w-full border-b border-gray-300 focus:outline-none mt-4 pr-16"
            />
          </div>
        </div>

        <div className="mt-4">
          <div className="flex gap-3 mt-2">
            {[...Array(10)].map((_, index) => (
              <div key={index} className="flex flex-col items-center">
                <img
                  src={selectedProfiles === index + 1 ? GrayProfile : index < 5 ? OrangeProfile : GrayProfile}
                  alt="Profile Icon"
                  className="w-3 h-3 cursor-pointer"
                  onClick={() => handleProfileSelect(selectedProfiles === index + 1 ? null : index + 1)}
                />
                <span className={`text-[10px] font-semibold mt-1 ${selectedProfiles === index + 1 ? "text-gray-400" : index < 5 ? "text-orange-500" : "text-gray-400"}`}>
                  {index === 9 ? "10+" : index + 1}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4">
          <label className="text-[10px] font-bold">Add a Note</label>
          <textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            className="w-full text-[10px] p-2 border outline-none rounded-2xl mt-1 h-20 resize-none"
          />
        </div>

        <button className="w-full bg-orange-500 text-white font-medium py-2 rounded-full mt-4 text-xs">
          Make a Reservation
        </button>
      </div>
    </div>
  );
};

export default ReservationForm;
