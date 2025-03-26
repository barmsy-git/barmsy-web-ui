import React, { Children, useState } from "react";
import styles from "../../styles/styles";
import { Link } from "react-router-dom";
import { HiArrowLeft } from "react-icons/hi";
import { AiOutlineSearch } from "react-icons/ai";
import OrderTrayList from "../OrderTrayList/OrderTrayList";

function Layout({ children }) {
    const [openDrawer, setOpenDrawer] = useState(false)
      const [openOrder, setOpenOrder] = useState(false);

    const onClose = () => {
        setOpenDrawer(false)
    }
    return (
        <div>
            <div className={`${styles.section} relative`}>
                <div className="hidden flex-col 800px:flex items-center w-full gap-4 800px:gap-6 800px:my-[20px]">
                    <div className="w-full flex items-center justify-between">
                        <div className="w-auto">
                            <Link to="/dashboard">
                                <h1 className="px-4 py-2 text-lg font-medium text-center bg-white rounded-full shadow-md border border-gray-300 hover:bg-gray-100 transition duration-200 flex items-center justify-center gap-2">
                                    <HiArrowLeft className="text-gray-600" />
                                    Dashboard
                                </h1>
                            </Link>
                        </div>

                        <div className="w-auto" onClick={() => setOpenDrawer(true)} style={{ cursor: 'pointer' }}>
                           <Link to="/all-orders">
            <h1 className="px-4 py-2 text-lg cursor-pointer font-medium text-center bg-white rounded-full shadow-md border border-gray-300 hover:bg-gray-100 transition duration-200 flex items-center justify-center">
              All Orders
            </h1>

            </Link>

                        </div>
                    </div>
                    <div className="w-full">
  <div className="flex justify-center">
    <div
      className={`transition-all duration-300`}
      style={{ width: openOrder ? '20%' : '50%' }} // Adjust width when modal is open
    >
                                <div className="relative flex justify-center mt-9 mb-10">
                                    <span className="absolute left-3 top-2.5 text-gray-400 ">
                                        <AiOutlineSearch size={20} />
                                    </span>
                                    <input
                                        type="text"
                                        placeholder="Search..."

                                        className="h-[40px] w-full pl-10 pr-4 border border-gray-200 rounded-full focus:outline-none "
                                    />
                                    <button
                                        type="submit"
                                        className="absolute right-0 top-0 h-[40px] px-4 py-2 border-l bg-[#f36805] text-white rounded-r-full hover:bg-blue-700 transition duration-200"
                                    >
                                        Search
                                    </button>

                                </div>
                            </div>
                        </div>

                    </div>

                </div>

                {openDrawer && <OrderTrayList setOpenOrder={setOpenDrawer} />}
            </div>
            <div className="w-full">
                {children}
            </div>
        </div>
    );
}

export default Layout;
