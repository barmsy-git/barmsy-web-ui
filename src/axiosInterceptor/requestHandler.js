import axios from "axios";
import showMessage from "../utils/toast";
import Cookie from "js-cookie";


export const getUserToken = () => {
  return Cookie.get("token") || "";
};

// Create Axios instance
export const serviceInstance = axios.create();

// Request Interceptor
serviceInstance.interceptors.request.use(
  (config) => {
    const token = getUserToken();
    if (token) {
      config.headers = {
        ...config.headers, // Preserve existing headers
        Authorization: `Bearer ${getUserToken()}`,
      };
    }

    console.log("Final Headers:", config.headers); // Debugging

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);



serviceInstance.interceptors.response.use(undefined, (err) => {
  const error = err.response;
  const errorStatus = err.status;
  const responseError = err.message;
  const errorList = err.response?.data?.errors;
  const customError = err.response?.data?.detail
  const finalErrorMsg = customError ? customError : responseError;


  if
    (error.status === 401) {
      Cookie.remove("token");
      Cookie.remove("barmsyID");
      Cookie.remove("barmsyD");
      window.location.href="/login"
    window.location.href = "/login"



  } 
  else if
    (error.status === 403) {

  } 
  else {

    showMessage({
      type: 'error',
      message: customError
    });

  }

  return Promise.reject(err);
});

