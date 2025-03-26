import { useEffect, useRef, useState } from "react";
import { HiArrowLeft,  } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
// import logoBackground from "../Assets/Asset 1 1.png";
import { AiOutlineCloseCircle } from "react-icons/ai";



const EmailVerificationPage = () => {


  return (
    <div
      className="min-h-screen bg-white flex items-center justify-center relative overflow-hidden"
    >
      <div className="max-w-xl flex justify-center w-full bg-white bg-opacity-50 backdrop-filter backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden">
        <div
          
          className="bg-white bg-opacity-50 backdrop-filter backdrop-blur-xl rounded-2xl  p-12 w-full max-w-md"
        >
             {/* Header */}
        <div className="flex items-center  space-x-1 mb-6">
          <HiArrowLeft className="text-gray-600 text-2xl cursor-pointer -ml-20" onClick={() => navigate(-1)} />
          {/* <img src={logo} alt="Barmsy Logo" className="h-10 pl-36 text-orange-500" /> */}
          <h1 className="text-3xl font-semibold  text-orange-500  ml-0">Barmsy</h1>
        </div>

        <div className="flex justify-center pt-10  text-red-500">
          <AiOutlineCloseCircle size={25} />
        </div>

          <h2 className="text-2xl font-bold  text-center bg-white text-black bg-clip-text pt-6">
            Code Expired
          </h2>
          <p className="text-center text-xs text-gray-600 pt-1 mb-9">
            Looks like the verification code has expired. Click the button and we will send another code
          </p>

          <p className="flex justify-center pt-6 text-orange-500 cursor-pointer font-semibold">Resend Code</p>

        </div>
      </div>
    </div>
  );
};
export default EmailVerificationPage;
