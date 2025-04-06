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
    const userID = Cookie.get('barsmyD')
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false)
    const [passwordError, setPasswordError] = useState("");
    const [visible, setVisible] = useState(false);
    const [visible2, setVisible2] = useState(false);
    const handleSubmit = async (e) => {

        e.preventDefault()
        if (!password && !confirmPassword) {
            showMessage({
                type: 'error',
                message: "Fields are all required"
            })
            return;
        }
        if (password !== confirmPassword) {
            setPasswordError("Passwords do not match.");
            return;
        } else {
            setPasswordError(""); // Clear error if passwords match
        }
        const request = {
            "newPassword": password,
            "matchingPassword": confirmPassword
        }
        try {
            setLoading(true)
            const result = await authService.resetPassword(userID, request);
            if (result) {
                setLoading(false)
                showMessage({
                    type: 'success',
                    message: result?.message
                })
                setTimeout(() => {
                    navigate(`/login`)
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
                    <h2 className="text-2xl font-extrabold text-black">Reset Password</h2>



                    {/* Error Message */}

                    {/* Login Form */}
                    <div className="mt-5">
                        <form onSubmit={handleSubmit} className="space-y-6">

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
                                        type={visible2 ? "text" : "password"}
                                        required
                                        className={`w-full px-3 py-2 text-xs pl-10 border rounded-full ${passwordError ? "border-red-500" : "border-gray-300"
                                            }`}
                                        placeholder="********"
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                    />
                                    {visible2 ? (
                                        <AiOutlineEye
                                            className="absolute right-2 top-2 text-gray-400 cursor-pointer"
                                            size={20}
                                            onClick={() => setVisible2(false)}
                                        />
                                    ) : (
                                        <AiOutlineEyeInvisible
                                            className="absolute right-2 top-2 text-gray-400 cursor-pointer"
                                            size={20}
                                            onClick={() => setVisible2(true)}
                                        />
                                    )}
                                </div>
                                {passwordError && <p className="text-red-500 text-xs mt-1">{passwordError}</p>}
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
