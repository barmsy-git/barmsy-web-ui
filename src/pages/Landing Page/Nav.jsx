import React from 'react'
import { useNavigate } from 'react-router-dom';
import logo from "../../../public/iconoir_organic-food.svg"

function Nav() {

    const navigate = useNavigate();
  return (
    <div>
         {/* Navbar */}
      <nav className="flex justify-between items-center p-4 shadow-md">
                 <div className="flex space-x-2">
                 <img src={logo} alt="Barmsy Logo" className="h-8  text-orange-500" />
                 <div className="text-2xl font-semibold text-orange-500">Barmsy</div>
                 </div>
        <div className="flex space-x-6 text-gray-700">
          <a href="#" className="hover:text-orange-500 text-xs font-semibold">Shop</a>
          <a href="#" className="hover:text-orange-500 text-xs font-semibold">Pricing</a>
          <a href="#" className="hover:text-orange-500 text-xs font-semibold">Integration</a>
          <a href="#" className="hover:text-orange-500 text-xs font-semibold">Contact</a>
        </div>
        <div className="flex space-x-4">
          <button className="text-gray-700 text-xs font-semibold" 
           onClick={() => navigate("/login")}>Login</button>
          <button className="bg-orange-500 text-white px-4 py-2 rounded-full text-xs ">
            Get a Demo
          </button>
        </div>
      </nav>
    </div>
  )
}

export default Nav