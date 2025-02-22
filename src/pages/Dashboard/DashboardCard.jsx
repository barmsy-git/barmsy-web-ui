import { useState, useRef } from "react";
import { AiOutlineLeft, AiOutlineRight, AiOutlineSetting } from "react-icons/ai";
import image from "../../Assets/myImage.jpg";

const locations = [
  { id: 1, status: "Open", orders: 567, revenue: "₦100k", growth: "9.6%" },
  { id: 2, status: "Open", orders: 567, revenue: "₦100k", growth: "9.6%" },
  { id: 3, status: "Closed", orders: 567, revenue: "₦100k", growth: "9.6%" },
  { id: 4, status: "Open", orders: 567, revenue: "₦100k", growth: "9.6%" },
  { id: 4, status: "Open", orders: 567, revenue: "₦100k", growth: "9.6%" },
  { id: 4, status: "Open", orders: 567, revenue: "₦100k", growth: "9.6%" },
];

const AllLocations = () => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCards = 3;
  const totalCards = locations.length;
  const scrollRef = useRef(null);

  const handleNext = () => {
    if (startIndex + visibleCards < totalCards) {
      setStartIndex(startIndex + 1);
      scrollRef.current.scrollBy({ left: 220, behavior: "smooth" });
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
      scrollRef.current.scrollBy({ left: -220, behavior: "smooth" });
    }
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm w-full relative py-4">
      {/* Header with Title & Settings Icon */}
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-sm font-semibold text-gray-700">All Locations</h2>
        <AiOutlineSetting className="text-gray-400 hover:text-gray-600 cursor-pointer text-lg" />
      </div>

      <div className="relative flex items-center">
        {/* Left Arrow - Hidden if not needed */}
        {startIndex > 0 && (
          <button
            onClick={handlePrev}
            className="absolute left-0 p-2 bg-gray-50 hover:bg-gray-300 rounded-full z-10"
          >
            <AiOutlineLeft size={12} className="text-red-400" />
          </button>
        )}

        {/* Location Cards - Scrollable */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto scroll-smooth scrollbar-hide gap-4 w-full"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }} 
        >
          {locations.map((loc) => (
            <div
              key={loc.id}
              className="bg-white p-4 rounded-lg w-56 min-w-[220px] h-32 flex-shrink-0 shadow-md border flex items-center gap-3"
            >
              {/* Left Section - Image & Status */}
              <div className="flex flex-col items-center">
                <img 
                  src={image}
                  alt="Location" 
                  className="h-14 w-14 rounded-full object-cover" 
                />
                <p
                  className={`mt-2 px-2 py-1 text-[10px] font-semibold rounded ${
                    loc.status === "Open"
                      ? "text-orange-500 bg-orange-50"
                      : "text-gray-500 bg-gray-100"
                  }`}
                >
                  {loc.status}
                </p>
              </div>

              {/* Right Section - Details */}
              <div className="flex-1">
                {/* Orders - Bold Number, Orders Below */}
                <p className="text-xl font-bold text-black"> {loc.orders}<span className="text-xs font-thin text-gray-400">/orders</span></p>

                {/* Address */}
                <p className="text-xs text-black mt-1">No.23, Gilbon St.</p>

                {/* Revenue & Growth - Side by Side */}
                <div className="flex justify-between items-center mt-1">
                  <p className="text-xs text-black">
                    <span className="text-[10px] text-gray-300">Rev:</span> {loc.revenue}
                  </p>
                  <p className="text-xs font-semibold text-green-500">↑ {loc.growth}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow - Hidden if not needed */}
        {startIndex + visibleCards < totalCards && (
          <button
            onClick={handleNext}
            className="absolute right-0 p-2 bg-gray-50 hover:bg-gray-300 rounded-full z-10"
          >
            <AiOutlineRight size={12} className="text-red-400" />
          </button>
        )}
      </div>
    </div>
  );
};

export default AllLocations;
