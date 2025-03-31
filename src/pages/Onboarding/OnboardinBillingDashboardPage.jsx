// import React, { useState } from "react";
// import { HiOutlineClock } from "react-icons/hi";
// import logo from "../../../public/iconoir_organic-food.svg"; 
// import myImage from "../../Assets/myImage.jpg"
// import { useNavigate } from "react-router-dom";

// const BillingPage = () => {
//     const [showBillingForm, setShowBillingForm] = useState(false);
//   const navigate = useNavigate();

//   return (
//     <div className="min-h-screen flex flex-col items-center bg-white">
//       {/* Header */}
//       <div className="w-full bg-orange-400 py-6 text-center">
//         <div className="flex items-center justify-center space-x-2">
//           <img src={logo} alt="Barmsy Logo" className="h-8 filter brightness-0 invert" /> 
//           <h1 className="text-white text-2xl font-semibold">Barmsy</h1>
//         </div>
//         <p className="text-white text-sm">Billing Information</p>
//       </div>

//       {/* Main Content */}
//       <div className=" bg-white p-6 rounded-lg  max-w-6xl w-full flex">
//         {/* Left Section (Plans) */}
//         <div className="w-full max-w-xs border rounded-lg p-6 bg-white shadow">
//   <div className="flex justify-between items-center">
//   <h2 className="text-gray-900 font-bold text-xs">Barmsy Free Trial</h2>
//   <p className="text-gray-500 text-xs">N0.00</p>
//   </div>
//           <p className="text-xs text-gray-500 mt-2">
//             Lorem ipsum dolor sit amet consectetur. Urna id ultrices urna fringilla scelerisque viverra felis.
//           </p>

//           <hr className="my-4" />

//        <div className="flex justify-between items-center">   
//         <h2 className="text-gray-900  text-xs font-bold">Paid Plan after Trial</h2>
//        <p className="text-gray-500  text-xs">N5,000</p></div>
//           <p className="text-xs text-gray-500 mt-2">
//             Lorem ipsum dolor sit amet consectetur. Urna id ultrices urna fringilla scelerisque viverra felis.
//           </p>

//           <hr className="my-4" />

//           {/* Select Another Plan */}
//           <button className="mt-16 mb-2 text-orange-500 font-semibold text-sm flex items-center space-x-1 hover:underline "
//             onClick={() => navigate("/business-setup3")}>
//             <span>←</span>
//             <span>Select a different plan</span>
//           </button>
//         </div>

//         {/* Right Section (Billing Details) */}
//         <div className="w-full max-w-7xl p-12 -mt-12">
//           <h2 className="text-gray-900 text-sm font-semibold w-full max-w-3xl">Confirm your payment details</h2>

//           {/* Due Today Box */}
//           <div className="mt-4 bg-orange-50 p-4 max-w-3xl px-9 pl-7 rounded-lg flex justify-between items-center">
//             <span className="text-gray-900 text-sm font-medium">Due Today</span>
//             <span className="text-gray-900 font-semibold">N5,000</span>
//           </div>

          

//           {/* Payment Details */}
//           <div className="mt-4 space-y-3">
//             <div className="flex items-start space-x-2 text-gray-500 text-xs">
//               <HiOutlineClock size={15} className="mt-1 text-gray-400" />
//               <p>Lorem ipsum dolor sit amet consectetur. Urna id ultrices urna fringilla scelerisque viverra felis.</p>
//             </div>
//             <div className="flex items-start space-x-2 text-gray-500 text-xs">
//               <HiOutlineClock size={15} className="mt-1 text-gray-400" />
//               <p>You will be billed N5,000 per month starting from January 20, 2025</p>
//             </div>
//           </div>


          
//           <hr className="my-4 mt-8" />
//            {/* Show "Add Billing Information" Button if the form is not visible */}
                        
//               {!showBillingForm && (
//                 <div className="mt-12 flex justify-between items-center w-full">
//                   <button
//                     onClick={() => setShowBillingForm(true)}
//                     className="bg-orange-500 text-white py-2 text-xs px-4 pl-6 rounded-full font-semibold"
//                   >
//                     Add Billing Information
//                   </button>

//                   <button 
//                     className="text-orange-500 text-sm font-semibold hover:underline"
//                     onClick={() => navigate("/dashboard")}
//                   >
//                     Skip
//                   </button>
//                 </div>
//               )}
//                </div>
//                </div>

//                   <div className="flex w-full max-w-sm flex-col justify-center -mt-40 ml-7">
            
//                     {/* Billing Form (Only Shows When Button is Clicked) */}
//                     {showBillingForm && (
//                       <>
//                         <h2 className="text-gray-900 text-sm font-semibold mt-4">Billing Information</h2>
//                         <div className="mt-4 flex items-center space-x-2 mb-5">
//                           <div className="w-10 h-10 rounded-md">
//                               <img src={myImage} alt="" className="rounded-md w-full h-full object-cover " />
//                           </div>
//                         <div className="flex flex-col">
//                         <p className="text-gray-700 text-sm font-semibold">Sochima</p>
//                         <span className="text-gray-500 text-xs">Business Account</span>
//                         </div>
//                         </div>

//                         {/* Billing Form */}
//                         <div className="grid grid-cols-2 gap-4 w-full  ">
//                             {/* First Name */}
//                             <div className="flex flex-col w-full ">
//                               <label className="text-xs font-medium text-black mb-1">
//                                 First name <span className="text-red-600">*</span>
//                               </label>
//                               <input type="text" placeholder="Charles" className="border p-2 rounded-full w-full max-w-7xl text-sm" />
//                             </div>

//                             {/* Last Name */}
//                             <div className="flex flex-col w-full">
//                               <label className="text-xs font-medium text-black mb-1">
//                                 Last name <span className="text-red-600">*</span>
//                               </label>
//                               <input type="text" placeholder="Doe" className="border p-2 rounded w-full text-sm" />
//                             </div>

//                             {/* Address */}
//                             <div className="flex flex-col col-span-2">
//                               <label className="text-xs font-medium text-black mb-1">
//                                 Address (Street, P.O. box) <span className="text-red-600">*</span>
//                               </label>
//                               <input type="text" placeholder="123 Main St" className="border p-2 rounded w-full text-sm" />
//                             </div>
//                           </div>


//                                 <hr className="my-6" />

//                                 {/* Card Information */}
//                                 <h2 className="text-gray-900 text-sm font-semibold mt-4">Card Information</h2>
//                                 <div className="mt-4 grid grid-cols-2 gap-4 text-xs">
//                                   <input type="text" placeholder="Name on card*" className="border p-2 rounded w-full col-span-2" />
//                                   <input type="text" placeholder="Card No*" className="border p-2 rounded w-full col-span-2" />
//                                   <input type="text" placeholder="CVV*" className="border p-2 rounded w-full" />
//                                   <input type="text" placeholder="Expiration Date*" className="border p-2 rounded w-full" />
//                                 </div>

//                                 {/* Save & Continue Button */}
//                                 <div className="mt-8">
//                                   <button
//                                     onClick={() => console.log("Proceeding with payment")}
//                                     className="bg-orange-500 text-white py-3 px-6 rounded-lg font-semibold w-full"
//                                   >
//                                     Save & Continue
//                                   </button>
//                                 </div>
//                               </>
//                             )}
//                   </div>

//         </div>
      
//   );
// };

// export default BillingPage;
import React, { useState } from "react";
import { HiOutlineClock } from "react-icons/hi";
import logo from "../../../public/iconoir_organic-food.svg"; 
import myImage from "../../Assets/myImage.jpg"
import { useNavigate } from "react-router-dom";

const BillingPage = () => {
    const [showBillingForm, setShowBillingForm] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center bg-white">
      {/* Header */}
      <div className="w-full bg-orange-400 py-6 text-center">
        <div className="flex items-center justify-center space-x-2">
          <img src={logo} alt="Barmsy Logo" className="h-8 filter brightness-0 invert" /> 
          <h1 className="text-white text-2xl font-semibold">Barmsy</h1>
        </div>
        <p className="text-white text-sm">Billing Information</p>
      </div>

      {/* Main Content */}

      <div className="bg-white p-6 rounded-lg max-w-6xl w-full flex items-start">
        {/* Left Section (Plans) */}
      <div className="w-full max-w-xs border rounded-lg p-6 bg-white shadow self-start h-fit">
              <div className="flex justify-between items-center">
              <h2 className="text-gray-900 font-bold text-xs">Barmsy Free Trial</h2>
              <p className="text-gray-500 text-xs">N0.00</p>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              Lorem ipsum dolor sit amet consectetur. Urna id ultrices urna fringilla scelerisque viverra felis.
            </p>
            <hr className="my-4" />
            <div className="flex justify-between items-center">
              <h2 className="text-gray-900 text-xs font-bold">Paid Plan after Trial</h2>
              <p className="text-gray-500 text-xs">N5,000</p>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              Lorem ipsum dolor sit amet consectetur. Urna id ultrices urna fringilla scelerisque viverra felis.
            </p>
            <hr className="my-4" />
            <button
              className="mt-4 text-orange-500 font-semibold text-sm flex items-center space-x-1 hover:underline"
              onClick={() => navigate("/business-setup3")}
            >
              <span>←</span>
              <span>Select a different plan</span>
            </button>
        </div>

        {/* Right Section (Billing Details) */}
        <div className="w-full max-w-7xl p-12 -mt-12 ">
          <h2 className="text-gray-900 text-sm font-semibold w-full max-w-3xl">Confirm your payment details</h2>

          {/* Due Today Box */}
          <div className="mt-4 bg-orange-50 p-4 max-w-3xl px-9 pl-7 rounded-lg flex justify-between items-center">
            <span className="text-gray-900 text-sm font-medium">Due Today</span>
            <span className="text-gray-900 font-semibold">N5,000</span>
          </div>

          

          {/* Payment Details */}
          <div className="mt-4 space-y-3">
            <div className="flex items-start space-x-2 text-gray-500 text-xs">
              <HiOutlineClock size={15} className="mt-1 text-gray-400" />
              <p>Lorem ipsum dolor sit amet consectetur. Urna id ultrices urna fringilla scelerisque viverra felis.</p>
            </div>
            <div className="flex items-start space-x-2 text-gray-500 text-xs">
              <HiOutlineClock size={15} className="mt-1 text-gray-400" />
              <p>You will be billed N5,000 per month starting from January 20, 2025</p>
            </div>
          </div>


          
          <hr className="my-4 mt-8" />
           {/* Show "Add Billing Information" Button if the form is not visible */}
           {!showBillingForm && (
            <div className="mt-12">
              <button
                onClick={() => setShowBillingForm(true)}
                className="bg-orange-500 text-white py-2 text-xs px-4 pl-6 rounded-full font-semibold"
              >
                Add Billing Information
              </button>
            </div>
          )}

          {/* Billing Form */}
<div className="mt-4 grid grid-cols-2 gap-4 text-xs">
  
  {/* First Name */}
  <div className="flex flex-col w-full">
    <label className="text-xs font-medium text-black mb-1">
      First name <span className="text-red-600">*</span>
    </label>
    <input type="text" placeholder="Charles" className="border p-2 rounded-full w-full text-xs" />
  </div>

  {/* Last Name */}
  <div className="flex flex-col w-full">
    <label className="text-xs font-medium text-black mb-1">
      Last name <span className="text-red-600">*</span>
    </label>
    <input type="text" placeholder="Okechukwu" className="border p-2 rounded-full w-full text-xs" />
  </div>

  {/* Address (Street, P.O. Box) */}
  <div className="flex flex-col w-full col-span-2">
    <label className="text-xs font-medium text-black mb-1">
      Address (Street, P.O. box) <span className="text-red-600">*</span>
    </label>
    <input type="text" placeholder="123 Main Street" className="border p-2 rounded-full w-full text-xs" />
  </div>

  {/* Address Line 2 (Optional) */}
  <div className="flex flex-col w-full col-span-2">
    <label className="text-xs font-medium text-black mb-1">
      Address Line 2 (Apartment, Suite, Unit)
    </label>
    <input type="text" placeholder="Apt 4B" className="border p-2 rounded-full w-full text-xs" />
  </div>

  {/* City */}
  <div className="flex flex-col w-full">
    <label className="text-xs font-medium text-black mb-1">
      City <span className="text-red-600">*</span>
    </label>
    <input type="text" placeholder="Lagos" className="border p-2 rounded-full w-full text-xs" />
  </div>

  {/* Country/Region */}
  <div className="flex flex-col w-full">
    <label className="text-xs font-medium text-black mb-1">
      Country/Region <span className="text-red-600">*</span>
    </label>
    <input type="text" placeholder="Nigeria" className="border p-2 rounded-full w-full text-xs" />
  </div>

  {/* State/Province */}
  <div className="flex flex-col w-full">
    <label className="text-xs font-medium text-black mb-1">
      State/Province <span className="text-red-600">*</span>
    </label>
    <input type="text" placeholder="Lagos State" className="border p-2 rounded-full w-full text-xs" />
  </div>

  {/* Postal/Zip Code */}
  <div className="flex flex-col w-full">
    <label className="text-xs font-medium text-black mb-1">
      Postal/Zip Code <span className="text-red-600">*</span>
    </label>
    <input type="text" placeholder="100001" className="border p-2 rounded-full w-full text-xs" />
  </div>
</div>

<hr className="my-6" />

{/* Card Information */}
<h2 className="text-gray-900 text-sm font-semibold mt-4">Card Information</h2>

<div className="mt-4 grid grid-cols-2 gap-4 text-xs">

  {/* Name on Card */}
  <div className="flex flex-col w-full col-span-2">
    <label className="text-xs font-medium text-black mb-1">
      Name on Card <span className="text-red-600">*</span>
    </label>
    <input type="text" placeholder="Charles Okechukwu" className="border p-2 rounded-full w-full text-xs" />
  </div>

  {/* Card Number */}
  <div className="flex flex-col w-full col-span-2">
    <label className="text-xs font-medium text-black mb-1">
      Card Number <span className="text-red-600">*</span>
    </label>
    <input type="text" placeholder="**** **** **** ****" className="border p-2 rounded-full w-full text-xs" />
  </div>

  {/* CVV */}
  <div className="flex flex-col w-full">
    <label className="text-xs font-medium text-black mb-1">
      CVV <span className="text-red-600">*</span>
    </label>
    <input type="text" placeholder="123" className="border p-2 rounded-full w-full text-xs" />
  </div>

  {/* Expiration Date */}
  <div className="flex flex-col w-full">
    <label className="text-xs font-medium text-black mb-1">
      Expiration Date <span className="text-red-600">*</span>
    </label>
    <input type="text" placeholder="MM/YY" className="border p-2 rounded-full w-full text-xs" />
  </div>

</div>


              {/* Save & Continue Button */}
              <div className="mt-8">
                <button
                  onClick={() => console.log("Proceeding with payment")}
                  className="bg-orange-500 text-xs text-white py-2 px-6 rounded-full font-semibold w-full"
                >
                  Save & Continue
                </button>
              </div>
           
          
        </div>
        </div>
      </div>
    
  );
};

export default BillingPage;
