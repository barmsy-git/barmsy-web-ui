import React from "react";
import Hero from "../Landing Page/Hero";
import Nav from "../Landing Page/Nav"
import Features from "../Landing Page/Features"
import Footer from "../Landing Page/Footer"
import Analytics from "../Landing Page/Analytics"
import Testimonial from "../Landing Page/Testimonial"
import Support from "../Landing Page/Support"
import LatestStories from "../Landing Page/LatestStories"


import phonecall from "../../Assets/phonecall.png"
import headset from "../../Assets/headset.png"

const LandingPage = () => {
  return (
    <div className="font-sans bg-orange-500">
      {/* Top Bar */}
      <div className="flex justify-between p-3">
      <div className="flex gap-2 bg-orange-500 text-white text-xs py-2 ml-9 ">
       <span><img src={phonecall} alt="" /></span> Give us a call at 0816XXXXXXXX
      </div>
      <div className="flex gap-2 bg-orange-500 text-white text-xs py-2 mr-9">
        Talk to us <span><img src={headset} alt="" /></span>
      </div>
      </div>

    
<div className="rounded-3xl shadow-2xl bg-white">
          
<Nav/>

<hr />
      
      <Hero/>
   
     <Features/>

     <Analytics/>

     <Testimonial/>

     <Support/>

     <LatestStories/>

     <Footer/>
</div>
     
    </div>
  );
};

export default LandingPage;
