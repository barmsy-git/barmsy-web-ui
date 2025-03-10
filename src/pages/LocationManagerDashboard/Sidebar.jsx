import { FaChartPie, FaMapMarkerAlt, FaUser, FaBox, FaBell, FaCog, FaLifeRing } from "react-icons/fa";
import { MdSubscriptions } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";
import logo from "../../../public/iconoir_organic-food.svg"
import Dashboard from "../../Assets/Dashboard.png";
import GenerateBarcode from "../../Assets/Barcodes.png"
import Products from "../../Assets/Products.png";
import Orders from "../../Assets/Orders.png";
import Reports from "../../Assets/Report.png";
import InventoryManagement from "../../Assets/Inventory.png";
import Reservation from "../../Assets/Reservation.png";
import Notifications from "../../Assets/Nitifications.png";
import Settings from "../../Assets/Settings.png";
import Support from "../../Assets/Support.png";
import Logout from "../../Assets/Logout.png"

const Sidebar = ({icon, activePage, setActivePage, isCollapsed }) => {
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
          <ul className="text-[10px]">
            <div className="pt-10 p-4">
              <SidebarItem icon={<img src={Dashboard} alt="Dashboard" className="h-5 w-5" />} label="Dashboard" activePage={activePage} setActivePage={setActivePage} isCollapsed={isCollapsed} />
              <SidebarItem icon={<img src={GenerateBarcode} alt="Dashboard" className="h-5 w-5" />} label="Generate Barcode" activePage={activePage} setActivePage={setActivePage} isCollapsed={isCollapsed} />
              <SidebarItem icon={<img src={Products} alt="Dashboard" className="h-5 w-5" />} label="Products" activePage={activePage} setActivePage={setActivePage} isCollapsed={isCollapsed} />
              <SidebarItem icon={<img src={Orders} alt="Dashboard" className="h-5 w-5" />} label="Orders" activePage={activePage} setActivePage={setActivePage} isCollapsed={isCollapsed} />
              <SidebarItem icon={<img src={Reports} alt="Dashboard" className="h-5 w-5" />} label="Reports" activePage={activePage} setActivePage={setActivePage} isCollapsed={isCollapsed} />
              <SidebarItem icon={<img src={InventoryManagement} alt="Dashboard" className="h-5 w-5" />} label="Inventory Management" activePage={activePage} setActivePage={setActivePage} isCollapsed={isCollapsed} />
              <SidebarItem icon={<img src={Reservation} alt="Dashboard" className="h-5 w-5" />} label="Reservation" activePage={activePage} setActivePage={setActivePage} isCollapsed={isCollapsed} />
            </div>
  
            <hr className="my-2 w-full border-gray-200" />
  
            <div className="p-4">
              <SidebarItem icon={<img src={Notifications} alt="Dashboard" className="h-5 w-5" />} label="Notifications" activePage={activePage} setActivePage={setActivePage} isCollapsed={isCollapsed} />
              <SidebarItem icon={<img src={Settings} alt="Dashboard" className="h-5 w-5" />} label="Settings" activePage={activePage} setActivePage={setActivePage} isCollapsed={isCollapsed} />
              <SidebarItem icon={<img src={Support} alt="Dashboard" className="h-5 w-5" />} label="Support" activePage={activePage} setActivePage={setActivePage} isCollapsed={isCollapsed} />
            </div>
          </ul>
        </nav>
  
        {/* Logout Button */}
        <div className="mt-auto p-4">
          <hr className="my-4 w-full border-gray-200" />
          <button className="w-full flex items-center text-gray-700 hover:bg-gray-100 rounded-lg p-2 transition">
          <img src={Logout} alt="Dashboard" className="h-5 w-5" />
            {!isCollapsed && <span className="ml-3">Logout</span>}
          </button>
        </div>
      </div>
    );
  };
  

  const SidebarItem = ({ icon, label, activePage, setActivePage, isCollapsed }) => {
    return (
      <li
        className={`flex items-center p-2 rounded-full cursor-pointer transition-all duration-200 ${
          activePage === label ? "bg-orange-50 text-orange-500 font-semibold" : "text-gray-700 hover:bg-gray-50 "
        }${isCollapsed ? "justify-center" : ""}`}
        onClick={() => setActivePage(label)}
      >
        {/* Render either an image or an icon */}
        <span className="min-w-[20px] flex items-center">
          {icon}
        </span>
        {!isCollapsed && <span className="ml-3">{label}</span>}
      </li>
    );
  };
  

export default Sidebar;
