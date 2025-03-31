
import { useState, useEffect } from "react";
import Sidebar from "../../pages/Dashboard/Sidebar";
import TopBar from "../../pages/Dashboard/TopBar";
import RevenueChart from "../../pages/Dashboard/RevenueChart";
import logo from "/public/iconoir_organic-food.svg";
import TrendingItems from "../../pages/Dashboard/TrendingItems";
import BusinessLocations from "../Dashboard SideBar/BusinessLocations";
import BusinessProfile from "../Dashboard SideBar/BusinessProfile";
import Subscription from "../Dashboard SideBar/Subscription";
import Notifications from "../Dashboard SideBar/Notifications";
import OrderVolume from "../Dashboard/OrderVolome";
import Settings from "../Dashboard SideBar/Settings";
import Support from "../Dashboard SideBar/Support";
import DashboardCard from "../../pages/Dashboard/DashboardCard";
import MyComponent from "react-fullpage-custom-loader";
import Modal from "../../components/Modal/index"
import Cookie from 'js-cookie'
import merchantService from "../../services/merchant-service";
const Dashboard = () => {
  const [activePage, setActivePage] = useState("Dashboard");
  const [load, setLoad] = useState(false)
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [merchantInfo, setMerchantinfo] = useState([])
  const [showModal, setShowModal] = useState(Cookie.get("barmsyUsertype") === "PENDING" ? true : false)


  const getUserOnboardingStatus = async () => {
    setLoad(true)
    try {
      const result = await merchantService.getMerchant(Cookie?.get("barmsyID"));

      if (result) {
        setLoad(false)
        setMerchantinfo(result?.result)
      }
    } catch (err) {
      setLoad(false)
      if (err?.response.data.status === 403) {
        setShowModal(true)
      }
    }
  }

  useEffect(() => {
    getUserOnboardingStatus()
  }, [])

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className={`transition-all duration-300 fixed h-full ${isCollapsed ? "w-16" : "w-60"}`}>

        <Sidebar activePage={activePage} setActivePage={setActivePage} isCollapsed={isCollapsed} />
      </div>

      {/* Main Content Area */}
      <div className={`flex-1 p-6 transition-all duration-300 ${isCollapsed ? "ml-[4rem] w-[calc(100%-4rem)]" : "ml-[15rem] w-[calc(100%-15rem)]"
        }`}>
        <div>
          {load && (
            <MyComponent
              loaderType="cube-transition"
              height="100%"
              sentences={["Please wait..."]}
              wrapperBackgroundColor="rgba(0,0,0,0.5)"
            />
          )}

        </div>



        <TopBar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />

        {activePage === "Dashboard" && (
          <>
            {/* Top Bar */}
            <div
              className={`flex-1 p-6 overflow-y-auto transition-all duration-300 ${isCollapsed ? "ml-16 w-[calc(100%-4rem)]" : "ml-64 w-[calc(100%-16rem)]"
                }`}
            >

            </div>

            {/* Dashboard Title */}
            {/* Dashboard Title */}
            <header className="mb-2 relative z-10 pt-6
">
              <h2 className="text-2xl font-semibold text-gray-900">Dashboard</h2>
            </header>


            {/* KPI Section */}
            <section className="mt-3">
              <DashboardCard locations={merchantInfo?.businessLocations} />
            </section>

            {/* KPI Chart & Trending Items */}
            <section className="grid grid-cols-3 gap-6 mt-6">
              <div className="col-span-2 space-y-5">
                {/* KPI Chart - No Shared Shadow */}
                <div className="bg-white p-5 rounded-lg shadow-md">
                  <RevenueChart />
                </div>

                {/* Order Volume - Separate Shadow */}
                <div className="bg-white rounded-md">
                  <OrderVolume />
                </div>
              </div>

              <TrendingItems />
            </section>

            {/* Recent Orders Section */}
            <div className="mt-6">

            </div>


          </>
        )}

        {/* Other Pages */}
        {showModal &&
          <Modal>
            <div>
              <div className="flex justify-center space-x-1 pb-4">
                <img src={logo} alt="Barmsy Logo" className="h-10" />
                <h1 className="text-3xl font-semibold text-orange-500 ml-5">Barmsy</h1>
              </div>
              <hr />
              <br />
              <b />
              <h2 className="text-xl font-bold text-center ">Pending Account Verification</h2>
              <div className="text- text-sm py-4 text-center">
                <p>You will be able to have access to the full tier of the barmsy application once your merchant has been fully onboarded</p>
              </div>


            </div>
          </Modal>}
        {activePage === "Business Locations" && <BusinessLocations locations={merchantInfo?.businessLocations} code={merchantInfo?.merchantCode} fetchDetails={getUserOnboardingStatus} />}
        {activePage === "Business Profile" && <BusinessProfile />}
        {activePage === "Subscription" && <Subscription />}
        {activePage === "Notifications" && <Notifications />}
        {activePage === "Settings" && <Settings />}
        {activePage === "Support" && <Support />}
      </div>
    </div>
  );
};

export default Dashboard;


