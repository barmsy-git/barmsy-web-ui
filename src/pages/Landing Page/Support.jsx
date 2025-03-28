import bamsyDownwards from "../../Assets/bamsyDownwards.png";
import group from "../../Assets/Group.png";

const SupportSection = () => {
  return (
    <section className="relative flex items-center justify-between bg-white px-16 py-20 max-w-7xl mx-auto">
      {/* Background Graphic at the Top Right */}
      <img
        src={bamsyDownwards}
        alt="Background Graphic"
        className="absolute top-0 right-0 w-1/3 max-w-xs opacity-50"
      />

      {/* Left Content */}
      <div className="max-w-lg relative z-10">
        <h2 className="text-5xl font-extrabold text-gray-900 leading-tight">
          Real People. Real Support. Real Fast.
        </h2>
        <ul className="mt-4 text-xs font-medium text-gray-600  space-y-2">
          <li>• 24/7/365 US-BASED SUPPORT</li>
          <li>• 12 SECOND AVERAGE RESPONSE TIME</li>
        </ul>
        <button className="mt-6 bg-orange-500 text-xs text-white font-semibold px-6 py-3 rounded-full shadow-md hover:bg-orange-600 transition">
          Contact Us &gt;
        </button>
      </div>

      {/* Right Side Graphic */}
      {/* <div className="w-1/4 relative z-10">
        <img
          src={group}
          alt="Support Graphic"
          className="w-full h-auto"
        />
      </div> */}
    </section>
  );
};

export default SupportSection;
