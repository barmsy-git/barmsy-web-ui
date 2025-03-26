import { useEffect, useRef, useState } from "react";
import { HiArrowLeft } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import logo from "../../../public/iconoir_organic-food.svg"
import authService from "../../services/auth-service";
import LoadingEffect from "./Verification/LoadingPage"
import ConfirmedEffect from "./Verification/CodeConfirmedPage"
import ExpiredEffect from "./Verification/CodeExpiredPage"
import Cookie from 'js-cookie'
import PinInput from "react-pin-input";

// import logoBackground from "../Assets/Asset 1 1.png";



const EmailVerificationPage = () => {
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const inputRefs = useRef([]);
  const [loading, setLoading] = useState(false)
  const [showEffect, setShowEffect] = useState('default')
  const userID = Cookie.get('barsmyD')
  const navigate = useNavigate();
  var urlParams = new URLSearchParams(window.location.search);
  const user_mail = urlParams.get("email");
  const [otp, setOtp] = useState("")

  function cleanAndRemoveLast(numberStr) {
    // Ensure numberStr is a string and not null/undefined
    if (typeof numberStr !== "string") {
      console.error("Invalid input: numberStr must be a string", numberStr);
      return { cleanedNumber: "", lastNumber: null };
    }

    // Split the string by commas to get an array of numbers
    let numbers = numberStr.split(',').map(num => parseInt(num, 10));

    // Check if we have valid numbers
    if (numbers.some(isNaN)) {
      console.error("Invalid input: numberStr contains non-numeric values", numberStr);
      return { cleanedNumber: "", lastNumber: null };
    }

    // Remove the last number
    const lastNumber = numbers.pop();

    // Join the remaining numbers back into a string without commas
    const cleanedNumber = numbers.join('');

    return cleanedNumber
  }

  const handleChange = (index, value) => {
    const newCode = [...code];

    // Handle pasted content
    if (value.length > 1) {
      const pastedCode = value.slice(0, 6).split("");
      for (let i = 0; i < 5; i++) {
        newCode[i] = pastedCode[i] || "";
      }
      setCode(newCode);

      // Focus on the last non-empty input or the first empty one
      const lastFilledIndex = newCode.findLastIndex((digit) => digit !== "");
      const focusIndex = lastFilledIndex < 4 ? lastFilledIndex + 1 : 4;
      inputRefs.current[focusIndex].focus();
    } else {
      newCode[index] = value;
      setCode(newCode);

      // Move focus to the next input field if value is entered
      if (value && index < 4) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const renderPageEffect = () => {
    switch (showEffect) {
      case 'loading':
        return <LoadingEffect />;
      case 'confirmed':
        return <ConfirmedEffect />;
      case 'expired':
        return <ExpiredEffect />;

      default:
        setShowEffect('default')
    }
  }

  function removeLastDigit(num) {
    return Math.floor(num / 10);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (otp?.length < 5) {
      return;
    }

    try {
      setShowEffect('loading')
      const result = await authService.validateCode(userID, otp);
      if (result) {
        if (result?.status) {
          setShowEffect('confirmed')
          Cookie.set('token',result.result.accessToken)
          Cookie.set('barmsyID',result.result.user.id)
          setTimeout(() => {
            navigate(`/business-setup`)
          }, 1200)
        }
        else {
          setShowEffect('expired')
        }
      }
    } catch (err) {
      setShowEffect('default')
    }
  };


  const resendToken = async () => {
    try {
      setShowEffect('loading')
      const result = await authService.resendRegisterToken(userID);
      if (result) {
        if (result?.status) {
          setShowEffect('default')
        }


      }
    } catch (err) {
      setShowEffect('default')
    }
  }


  return (
    <>
      {showEffect === 'default' &&
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
                <img src={logo} alt="Barmsy Logo" className="h-10 pl-36 text-orange-500" />
                <h1 className="text-3xl font-semibold  text-orange-500  ml-0">Barmsy </h1>
              </div>

              <h2 className="text-2xl font-bold  text-center bg-white text-black bg-clip-text pt-6">
                Enter Code
              </h2>
              <p className="text-center text-gray-600 pt-1 mb-9">
                Please, enter the code we just sent to {user_mail}.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="mb-3 d-flex justify-content-center align-items-center">
                  <div className="text-center">
                    <PinInput
                      length={6}
                      onChange={(value) => setOtp(value)}
                      type="numeric"
                      inputMode="number"
                      style={{ padding: "10px" }}
                      inputStyle={{ borderColor: "black", height: '70px', fontWeight: 700, fontSize: '25px', color: "#222", borderRadius: '7px' }}
                      inputFocusStyle={{ borderColor: "" }}
                      onComplete={(value) => console.log("Completed:", value)}
                      autoSelect={true}
                      regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
                    />
                  </div>

                </div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent
                rounded-full shadow-sm text-sm font-medium text-white bg-orange-500
                hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-offset-2
                focus:ring-orange-500 transition duration-150 ease-in-out"
                >

                  Submit
                </button>

                <p className="flex justify-center pt-6 text-orange-500 cursor-pointer font-semibold" onClick={resendToken}>Resend Code</p>

              </form>
            </div>
          </div>
        </div>}
      {showEffect !== 'default' &&
        <div>
          {renderPageEffect()}
        </div>}
    </>
  );
};
export default EmailVerificationPage;
