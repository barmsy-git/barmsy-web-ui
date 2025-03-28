import React from 'react'
import inlineMap from "../../Assets/line-art-world-map-isolated-white-background_1017-45837-removebg-preview 1.png"
import myImage from "../../Assets/myImage.jpg"
import codicon from "../../Assets/codicon_workspace-trusted.png"

function Hero() {

    const logos = [
        "logo1.png",
        "logo2.png",
        "logo3.png",
        "logo4.png",
        "logo5.png",
        "logo6.png",
        "logo7.png",
        "logo8.png",
        "logo9.png",
        "logo10.png",
      ];
  return (
    <div>
    {/* Hero Section */}
    <section className="relative text-center py-5 bg-white overflow-hidden">
      
      {/* Background Image (Smaller & Positioned) */}
      <div 
        className="absolute inset-0 bg-no-repeat bg-center opacity-50"
        style={{ backgroundImage: `url(${inlineMap})`, backgroundSize: "80%", top: "80px" }}
      ></div>
  
      {/* Content */}
      <div className="relative z-10">
        <h1 className="text-4xl font-bold text-gray-800 ">
          Making restaurants Prosperous, <br /> efficient & scalable
        </h1>
        <p className="text-gray-600 text-[10px] max-w-lg mx-auto mt-4">
          Lorem ipsum dolor sit amet consectetur. Non at netus ultrices faucibus feugiat.
        </p>
        <div className="mt-6 flex justify-center space-x-4">
          <button className="bg-orange-500 text-white px-6 py-3 text-xs rounded-full">
            Get a Demo
          </button>
          <button className="border border-gray-500 text-gray-700 px-6 py-3 text-xs rounded-full">
            Let's Talk
          </button>
          
        </div>
        <p className="text-gray-700 font-medium mt-3">
      <span className="inline-block text-orange-500"><img src={codicon} alt="" className='h-4 w-4 mt-1' /></span> Trusted by <span className="font-bold">23,000+</span> restaurants globally
    </p>
      </div>

  {/* Logos Section */}
<div className="flex justify-center items-center space-x-4 mt-6 overflow-hidden">
  {logos.map((logo, index) => (
    <div key={index} className="w-16 h-16 flex flex-col items-center justify-center rounded-full bg-white shadow-lg">
      {/* Logo */}
      <img src={myImage} alt="Brand Logo" className="w-8 h-8 object-cover rounded-full" />
      
      {/* Text Inside Rounded Container */}
      <p className="text-gray-600 text-[10px] mt-1">Lorem</p>
    </div>
  ))}
</div>


    
    </section>
  </div>
  
  )
}

export default Hero