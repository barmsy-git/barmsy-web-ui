import { useState } from "react";
import { Link } from "react-router-dom";
import { UserPlus, Mail, Lock, LogIn } from "lucide-react";
import GoogleLogo from "../../Assets/flat-color-icons_google.png";
import logo from "../../Assets/iconoir_organic-food.png"
import logoBackground from "../../Assets/Asset 1 1.png";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [visible, setVisible] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Replace with signup function
  };

  return (
    <div className="flex min-h-screen">
      {/* Left Side - Signup Form */}
      <div className="w-[85%] flex items-center  bg-white px-8 justify-center
      ">
        <div className="max-w-md w-full ml-14">
          <h2 className=" text-2xl font-extrabold text-black">
            Welcome
          </h2>
          <p className=" text-sm text-gray-600 mt-2">
            Sign in below to manage your Barmsy account and more.
          </p>

          <div className="max-w-lg w-full mt-5">
  {/* Google Sign Up Button */}
  <button
    className="w-full flex items-center justify-center border border-gray-300
      rounded-full px-3 py-2  text-gray-700 font-medium shadow-sm hover:bg-orange-100 transition"
  >
  
<img src={GoogleLogo} alt="Google Logo" className="h-5 w-5 mr-3" />
    Sign in with Google
  </button>

  {/* OR Divider */}
  <div className="flex items-center my-4">
    <div className="w-full border-t border-gray-300"></div>
    <span className="px-3 text-gray-500 text-sm">Or</span>
    <div className="w-full border-t border-gray-300"></div>
  </div>
</div>


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

              {/* Password Input */}
             <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-black"
              >
                Password
              </label>
              <div className="mt-1 relative rounded-full shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                  <Lock className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
                <input
                  id="password"
                  type={visible ? "text" : "password"}
                  required
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                                 className="block w-full px-3 py-2 pl-10 border border-gray-300 rounded-full shadow-sm
                    placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-300 sm:text-sm"
                  placeholder="••••••••"
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
              <div className="flex justify-between items-center pt-4">
  <label className="flex items-center text-sm text-black">
    <input
      type="checkbox"
      className="mr-2 h-4 w-4 text-orange-500  checked:bg-orange-500 checked:border-transparent border-gray-300 rounded-s-md focus:ring-orange-500 accent-orange-500 "
    />
    Remember me
  </label>
  <Link to="/forgot-password" className="text-sm text-orange-500 hover:underline">
    Forgot password?
  </Link>
</div>
            </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent
                rounded-full shadow-sm text-sm font-medium text-white bg-orange-500
                hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-offset-2
                focus:ring-orange-500 transition duration-150 ease-in-out"
              >
                <LogIn className="mr-2 h-5 w-5" />
                Login
              </button>
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
      <div className="w-1/2  flex flex-col items-start justify-center bg-orange-500 text-white p-8 ">
      <div className="absolute top-24 ml-10 flex items-center space-x-1">
    <img src={logo} alt="Barmsy Logo" className="h-12 w-auto" />
    <h1 className="text-4xl font-semibold">Barmsy</h1>
  </div>

<img src={logoBackground} alt="logo background"
className="ml-10 pt-44" />
       <p className="ml-10 text-2xl font-medium max-w-md pt-16 leading-snug">
  Restaurants and retail, <br /> 
  <span className="font-semibold text-start">now connected in one <br />
   convenient place.</span>
</p>
      </div>
    </div>
  );
};

export default LoginPage;
