import { useState } from "react";

// import { useAuthStore } from "../store/authStore";
import { useNavigate, useParams } from "react-router-dom";
import { Lock } from "lucide-react";
import authService from "../../services/auth-service"
// import toast from "react-hot-toast";
import { ThreeDots } from "react-loader-spinner";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const ResetPasswordPage = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false)
  const { token } = useParams();
  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const request = {
      "newPassword": password,
      "matchingPassword": confirmPassword
    }
    try {
      setLoading(true)
      const result = await authService.resetPassword(request);
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
    <div
      className="min-h-screen bg-gradient-to-br
    from-gray-900 via-green-900 to-emerald-900 flex items-center justify-center relative overflow-hidden"
    >
      <div

        className="max-w-md w-full bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden"
      >
        <div className="p-8">
          <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-green-400 to-emerald-500 text-transparent bg-clip-text">
            Reset Password
          </h2>
          {/* {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          {message && <p className="text-green-500 text-sm mb-4">{message}</p>} */}

          <form onSubmit={handleSubmit}>
            <label htmlFor="password" className="block text-sm font-medium text-black">
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
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
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

            <label htmlFor="password" className="block text-sm font-medium text-black">
              Confirm  Password
            </label>
            <div className="mt-1 relative rounded-full shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                <Lock className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </div>
              <input
                id="password"
                type={visible2 ? "text" : "password"}
                required
                value={confirmPassword}
                onChange={(e) =>
                  setConfirmPassword(e.target.value)
                }
                className="block w-full px-3 py-2 pl-10 border border-gray-300 rounded-full shadow-sm
                    placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-300 sm:text-sm"
                placeholder="••••••••"
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
            <button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-3 px-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-lg shadow-lg hover:from-green-600 hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition duration-200"
              type="submit"
            //   disabled={isLoading}
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

                "Submit"}
            </button>
          </form> 
        </div>
      </div>
    </div>
  );
};
export default ResetPasswordPage;
