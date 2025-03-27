import React from "react";

const LandingPage = () => {
  return (
    <div className="font-sans">
      {/* Top Bar */}
      <div className="bg-orange-500 text-white text-xs py-2 text-center">
        Give us a call at 0816XXXXXXXX
      </div>
      
      {/* Navbar */}
      <nav className="flex justify-between items-center p-4 shadow-md">
        <div className="text-xl font-bold text-orange-500">Barmsy</div>
        <div className="flex space-x-6 text-gray-700">
          <a href="#" className="hover:text-orange-500">Shop</a>
          <a href="#" className="hover:text-orange-500">Pricing</a>
          <a href="#" className="hover:text-orange-500">Integration</a>
          <a href="#" className="hover:text-orange-500">Contact</a>
        </div>
        <div className="flex space-x-4">
          <button className="text-gray-700">Login</button>
          <button className="bg-orange-500 text-white px-4 py-2 rounded-md">
            Get a Demo
          </button>
        </div>
      </nav>
      
      {/* Hero Section */}
      <section className="text-center py-16">
        <h1 className="text-4xl font-bold text-gray-800">
          Making restaurants Prosperous, <br /> efficient & scalable
        </h1>
        <p className="text-gray-600 max-w-lg mx-auto mt-4">
          Lorem ipsum dolor sit amet consectetur. Non at netus ultrices faucibus feugiat.
        </p>
        <div className="mt-6 flex justify-center space-x-4">
          <button className="bg-orange-500 text-white px-6 py-3 rounded-md">
            Get a Demo
          </button>
          <button className="border border-gray-500 text-gray-700 px-6 py-3 rounded-md">
            Let's Talk
          </button>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-12 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold text-gray-800">Made for <span className="text-orange-500">Everyone</span></h2>
        <div className="flex justify-center space-x-4 mt-6">
          <button className="bg-orange-500 text-white px-6 py-2 rounded-full">
            Analytics
          </button>
          <button className="bg-gray-300 text-gray-700 px-6 py-2 rounded-full">
            Table
          </button>
          <button className="bg-gray-300 text-gray-700 px-6 py-2 rounded-full">
            Kitchen
          </button>
          <button className="bg-gray-300 text-gray-700 px-6 py-2 rounded-full">
            Locations
          </button>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-orange-500 text-white py-8 text-center">
        <p>&copy; 2025 Barmsy. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
