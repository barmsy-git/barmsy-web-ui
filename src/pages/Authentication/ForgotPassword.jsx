import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserPlus, Mail, Lock, LogIn } from "lucide-react";
import GoogleLogo from "../../Assets/flat-color-icons_google.png";
import logo from "../../Assets/iconoir_organic-food.png";
import logoBackground from "../../Assets/Asset 1 1.png";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { ThreeDots } from "react-loader-spinner";
import Cookie from "js-cookie"
import showMessage from "../../utils/toast";
import authService from "../../services/auth-service"
import { message } from "antd";
const ForgotPassword = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {

    e.preventDefault()
    try {
      setLoading(true)
      const result = await authService.ForgotPassword(formData?.username);
      if (result) {
        setLoading(false)

        showMessage({
          type: 'success',
          message: result?.message
        })
        Cookie.set('barsmyD', result?.result)
        navigate(`/verify-email?type=token&email=${formData.username}`)

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
          <h2 className="text-2xl font-extrabold text-black">Forgot Password</h2>



          {/* Error Message */}

          {/* Login Form */}
          <div className="mt-5">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Username Input */}
              <div>
                <label htmlFor="username" className="block text-sm font-medium text-black">
                  Email Address
                </label>
                <div className="mt-1 relative rounded-full shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="username"
                    type="text"
                    required
                    value={formData.username}
                    onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                    className="block w-full px-3 py-2 pl-10 border border-gray-300 rounded-full shadow-sm
                    placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-300 sm:text-sm"
                    placeholder="Enter your email address"
                  />
                </div>
              </div>



              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full flex justify-center py-2 px-4 border border-transparent
                rounded-full shadow-sm text-sm font-medium text-white bg-orange-500
                hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-offset-2
                focus:ring-orange-500 transition duration-150 ease-in-out"
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
                    Submit
                  </>}
              </button>
              <br />

            </form>
            <p className="mt-8 text-center text-sm text-gray-400">
              New to Barmsy?{" "}
              <Link to="/signup" className="font-medium text-orange-500 hover:text-orange-400">
                Create an account
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
    </div>
  );
};

export default ForgotPassword;
