import { useEffect, useRef, useState } from "react";
import { HiArrowLeft } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import logo from "../../../public/iconoir_organic-food.svg"
// import logoBackground from "../Assets/Asset 1 1.png";



const EmailVerificationPage = () => {
  const [code, setCode] = useState(["", "", "", "", ""]);
  const inputRefs = useRef([]);
  const navigate = useNavigate();



  const handleChange = (index, value) => {
    const newCode = [...code];

    // Handle pasted content
    if (value.length > 1) {
      const pastedCode = value.slice(0, 5).split("");
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const verificationCode = code.join("");
    console.log(verificationCode); // Replace with verification function
  };

  // Auto submit when all fields are filled
  useEffect(() => {
    if (code.every((digit) => digit !== "")) {
      handleSubmit(new Event("submit"));
    }
  }, [code]);

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
          <img src={logo} alt="Barmsy Logo" className="h-10 pl-36 text-orange-500" />
          <h1 className="text-3xl font-semibold  text-orange-500  ml-0">Barmsy</h1>
        </div>

          <h2 className="text-2xl font-bold  text-center bg-white text-black bg-clip-text pt-6">
            Enter Code
          </h2>
          <p className="text-center text-gray-600 pt-1 mb-9">
            Please, enter the code we just sent to you.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex justify-between">
              {code.map((digit, index) => (
                <input
                  key={index}
                  ref={(el) => (inputRefs.current[index] = el)}
                  type="text"
                  maxLength="6"
                  value={digit}
                  onChange={(e) => handleChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  className="w-16 h-20 text-center text-2xl font-bold bg-white  text-black border-t border-l border-r border-b border-gray-600 rounded-lg focus:border-orange-500 focus:outline-none"
                />
              ))}
            </div>
            {/* {error && (
              <p className="text-red-500 font-semibold mt-2">{error}</p>
            )} */}
             <p className="flex justify-center pt-6 text-orange-500 cursor-pointer font-semibold">Resend Code</p>
            {/* <button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
            //   disabled={isLoading || code.some((digit) => !digit)}
              className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold py-3 px-4 rounded-lg shadow-lg hover:from-green-600 hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 disabled:opacity-50"
            > */}
              {/* {isLoading ? "Verifying..." : "Verify Email"} */}
            {/* </button> */}
          </form>
        </div>
      </div>
    </div>
  );
};
export default EmailVerificationPage;
