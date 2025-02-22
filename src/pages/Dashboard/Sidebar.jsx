import { FaChartPie, FaMapMarkerAlt, FaUser, FaBox, FaBell, FaCog, FaLifeRing } from "react-icons/fa";
import { MdSubscriptions } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";
import logo from "../../../public/iconoir_organic-food.svg"

const Sidebar = ({ activePage, setActivePage, isCollapsed }) => {
    return (
      <div className={`flex flex-col h-screen bg-white shadow-md border-r border-gray-200 transition-all duration-300 ${isCollapsed ? "w-16" : "w-60"}`}>
        {/* Logo Section */}
        <div className="fixed top-6 flex justify-center items-center transition-all duration-300 pl-4
        ">
          <img src={logo} alt="Barmsy Logo" className="h-8" />
          {!isCollapsed && <h1 className="text-2xl font-semibold text-orange-500 ml-2">Barmsy</h1>}
        </div>
  
        {/* Navigation Items */}
        <nav className="flex-1 mt-20">
          <ul className="text-sm">
            <div className="pt-10 p-4">
              <SidebarItem Icon={FaChartPie} label="Dashboard" activePage={activePage} setActivePage={setActivePage} isCollapsed={isCollapsed} />
              <SidebarItem Icon={FaMapMarkerAlt} label="Business Locations" activePage={activePage} setActivePage={setActivePage} isCollapsed={isCollapsed} />
              <SidebarItem Icon={FaUser} label="Business Profile" activePage={activePage} setActivePage={setActivePage} isCollapsed={isCollapsed} />
              <SidebarItem Icon={MdSubscriptions} label="Subscription" activePage={activePage} setActivePage={setActivePage} isCollapsed={isCollapsed} />
            </div>
  
            <hr className="my-2 w-full border-gray-200" />
  
            <div className="p-4">
              <SidebarItem Icon={FaBell} label="Notifications" activePage={activePage} setActivePage={setActivePage} isCollapsed={isCollapsed} />
              <SidebarItem Icon={FaCog} label="Settings" activePage={activePage} setActivePage={setActivePage} isCollapsed={isCollapsed} />
              <SidebarItem Icon={FaLifeRing} label="Support" activePage={activePage} setActivePage={setActivePage} isCollapsed={isCollapsed} />
            </div>
          </ul>
        </nav>
  
        {/* Logout Button */}
        <div className="mt-auto p-4">
          <hr className="my-4 w-full border-gray-200" />
          <button className="w-full flex items-center text-gray-700 hover:bg-gray-100 rounded-lg p-2 transition">
            <FiLogOut size={20} />
            {!isCollapsed && <span className="ml-3">Logout</span>}
          </button>
        </div>
      </div>
    );
  };
  

const SidebarItem = ({ Icon, label, activePage, setActivePage, isCollapsed}) => {
  return (
    <li
      className={`flex items-center p-2 rounded-full cursor-pointer transition-all duration-200 ${
        activePage === label ? "bg-orange-50 text-orange-500 font-semibold" : "text-gray-700 hover:bg-gray-50 "
      }${isCollapsed ? "justify-center" : ""}`}
      onClick={() => setActivePage(label)}
    >
     <Icon size={20} className="min-w-[20px]" />
     {!isCollapsed && <span className="ml-3">{label}</span>}
    </li>
  );
};

export default Sidebar;
