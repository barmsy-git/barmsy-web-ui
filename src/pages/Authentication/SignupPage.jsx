import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Mail, Phone, Lock, UserPlus } from "lucide-react";
import logo from "../../Assets/iconoir_organic-food.png";
import logoBackground from "../../Assets/Asset 1 1.png";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { ThreeDots } from "react-loader-spinner";
import showMessage from "../../utils/toast";
import authService from "../../services/auth-service";
import Cookie from 'js-cookie'
import { message } from "antd";
const SignUpPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    phoneNumber: "",
  });
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [allowEmailChange, setAllowEmailChange] = useState(true)
  const [allowPhoneChange, setAllowPhoneChange] = useState(true)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setShowModal(true);

  };

  const signupHandle = async (e) => {
    e.preventDefault();
    const data = {
      "email": formData?.email,
      "phoneNumber": formData?.phoneNumber,
      "password": password,
      "matchingPassword": confirmPassword
    }
    if (password !== confirmPassword) {
      setPasswordError("Passwords do not match.");
      return;
    } else {
      setPasswordError(""); // Clear error if passwords match
    }
    setLoading(true)
    try {
      const result = await authService.register(data);
      if (result) {
        showMessage({
          type: 'success',
          message: result?.message
        })
        Cookie?.set('barsmyD', result.result?.id)
        setLoading(false)
        setTimeout(() => {
          navigate(`/verify-email?email=${result?.result?.username}`)
        }, 1300)
      }
    } catch (err) {
      setLoading(false)

    }

  };

  return (
    <div className="flex min-h-screen">
      {/* Left Side - Signup Form */}
      
      <div className="w-[85%] flex items-center bg-white px-8 justify-center">
        <div className="max-w-md w-full ml-14">
          <h2 className="text-2xl font-extrabold text-black">Welcome</h2>
          <p className="text-sm text-gray-600 mt-2">
            Sign up below to manage your Barmsy account and more.
          </p>

          <div className="mt-5">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-black">
                  Email
                </label>
                <div className="mt-1 relative rounded-full shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="block w-full px-3 py-2 pl-10 border border-gray-300 rounded-full shadow-sm
                    placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-300 sm:text-sm"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              {/* Phone Input */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-black">
                  Phone
                </label>
                <div className="mt-1 relative rounded-full shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                    <Phone className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="phone"
                    type="number"
                    required
                    value={formData.phoneNumber}
                    onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                    className="block w-full px-3 py-2 pl-10 border border-gray-300 rounded-full shadow-sm
                    placeholder-gray-400 focus:outline-none focus:ring-orange-400 focus:border-orange-400 sm:text-sm"
                    placeholder="+23481658XXXXX"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent
                rounded-full shadow-sm text-sm font-medium text-white bg-orange-500
                hover:bg-orange-400  duration-150 ease-in-out"
              >
                Next
              </button>
            </form>

            <p className="mt-8 text-center text-sm text-gray-400">
              Already have an account?{" "}
              <Link to="/login" className="font-medium text-orange-500 hover:text-orange-400">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Branding */}
      <div className="w-1/2 flex flex-col items-start justify-center bg-orange-500 text-white p-8">
        <div className="absolute top-24 ml-10 flex items-center space-x-1">
          <img src={logo} alt="Barmsy Logo" className="h-12 w-auto" />
          <h1 className="text-4xl font-semibold">Barmsy</h1>
        </div>
        <img src={logoBackground} alt="logo background" className="ml-10 pt-44" />
        <p className="ml-10 text-2xl font-medium max-w-md pt-16 leading-snug">
          Restaurants and retail, <br />
          <span className="font-semibold text-start">now connected in one <br /> convenient place.</span>
        </p>
      </div>
      {/* MODAL COMPONENT */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-8 w-[1200px] h-[600px] flex flex-col items-center justify-center">
            {/* Title */}
            <h2 className="text-xl font-bold text-center mb-2">Set Up Your Password</h2>
            <p className="text-center text-gray-500 text-xs mb-6">
              Sign up below to manage your Barmsy account and more.
            </p>

            {/* Form */}
            <form className="w-[500px] flex flex-col items-center space-y-5">
              {/* Email */}
              <div className="flex flex-col w-full">
                <div className="flex justify-between">
                  <label className="text-sm font-medium text-black">Email <span className="text-red-600">*</span></label>
                  <span className="text-orange-500 text-xs cursor-pointer" onClick={() => {
                    setAllowEmailChange(false)
                  }}>Change?</span>
                </div>
                <div className="relative mx-auto w-full">
                  <Mail size={15} className="absolute left-3 top-2 text-gray-400" />
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full px-1 text-xs py-2 pl-10 border  ${allowEmailChange && 'bg-gray-200'} border-gray-300 rounded-full text-gray-500`}
                  />
                </div>
              </div>

              {/* Phone */}
              <div className="flex flex-col w-full">
                <div className="flex justify-between">
                  <label className="text-xs font-medium text-black">Phone  <span className="text-red-600">*</span></label>
                  <span className="text-orange-500 text-xs cursor-pointer text-right" onClick={() => {
                    setAllowPhoneChange(false)
                  }}>Change?</span>
                </div>
                <div className="relative mx-auto w-full">
                  <Phone size={15} className="absolute left-3 top-2  text-gray-400" />
                  <input
                    type="text"
                    value={formData.phoneNumber}
                    onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                    className={`w-full px-1 py-2 pl-10 border text-xs ${allowPhoneChange && 'bg-gray-200'} border-gray-300 rounded-full text-gray-500`}
                  />
                </div>
              </div>

              {/* Password */}
              <div className="flex flex-col w-full">
                <label className="text-xs font-medium text-black">Password  <span className="text-red-600">*</span></label>
                <div className="relative mx-auto w-full">
                  <Lock size={15} className="absolute left-3 top-2  text-gray-400" />
                  <input
                    type={visible ? "text" : "password"}
                    className="w-full px-1 py-2 text-xs pl-10 border border-gray-300 rounded-full"
                    placeholder="********"
                    value={password}

                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  {visible ? (
                    <AiOutlineEye
                      className="absolute right-2 top-2 text-gray-400 cursor-pointer"
                      size={20}
                      onClick={() => setVisible(false)}
                    />
                  ) : (
                    <AiOutlineEyeInvisible
                      className="absolute right-2 top-2 text-gray-400 cursor-pointer"
                      size={20}
                      onClick={() => setVisible(true)}
                    />
                  )}
                </div>
              </div>

              {/* Confirm Password */}
              <div className="flex flex-col w-full">
                <label className="text-sm font-medium text-black">Confirm Password <span className="text-red-600">*</span></label>
                <div className="relative mx-auto w-full">
                  <Lock size={15} className="absolute left-3 top-2 text-gray-400" />
                  <input
                    type={confirmPasswordVisible ? "text" : "password"}
                    required
                    className={`w-full px-3 py-2 text-xs pl-10 border rounded-full ${passwordError ? "border-red-500" : "border-gray-300"
                      }`}
                    placeholder="********"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                  {confirmPasswordVisible ? (
                    <AiOutlineEye
                      className="absolute right-2 top-2 text-gray-400 cursor-pointer"
                      size={20}
                      onClick={() => setConfirmPasswordVisible(false)}
                    />
                  ) : (
                    <AiOutlineEyeInvisible
                      className="absolute right-2 top-2 text-gray-400 cursor-pointer"
                      size={20}
                      onClick={() => setConfirmPasswordVisible(true)}
                    />
                  )}
                </div>
                {passwordError && <p className="text-red-500 text-xs mt-1">{passwordError}</p>}
              </div>



              {/* sign up Button */}
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent
         rounded-full shadow-sm text-sm font-medium text-white bg-orange-500
         hover:bg-orange-400 transition duration-150 ease-in-out"
                onClick={signupHandle}
              >
                {loading ?
                  <ThreeDots
                    visible={loading}
                    height="20"
                    width="40"
                    color="#fff"
                    radius="9"
                    ariaLabel="three-dots-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                  /> :
                  <>
                    <UserPlus className="mr-2 h-5 w-5" />
                    Sign up
                  </>}
              </button>
            </form>

            {/* Close Button */}
            <button className="absolute top-7 right-16 text-gray-500 text-xl" onClick={() => setShowModal(false)}>
              ✕
            </button>
          </div>
        </div>
      )}

    </div>
  );
};

export default SignUpPage;
