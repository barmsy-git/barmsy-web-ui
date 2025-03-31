import config from "../config";
import { serviceInstance } from "../axiosInterceptor/requestHandler";
import ForgotPassword from "../pages/Authentication/ForgotPassword";

const authService = {
    onLogin: (request) =>
        serviceInstance
            .post(`${config.baseUrl}/auth/login `, request)
            .then(({ data, status }) => ({
                ...data,
                status,
            })),


    resendPasswordForgotToken: (id) =>
        serviceInstance
            .post(`${config.baseUrl}/auth/resendForgotPasswordCode?userId=${id} `, request)
            .then(({ data, status }) => ({
                ...data,
                status,
            })),
    register: (request) =>
        serviceInstance
            .post(`${config.baseUrl}/auth/signup `, request)
            .then(({ data, status }) => ({
                ...data,
                status,
            })),

    validateCode: (id, code) =>
        serviceInstance
            .get(`${config.baseUrl}/auth/validateConfirmationCode?code=${code}&userId=${id}`)
            .then(({ data, status }) => ({
                ...data,
                status,
            })),
    resendRegisterToken: (id) =>
        serviceInstance
            .get(`${config.baseUrl}/auth/resendSignUpToken?userId=${id}`)
            .then(({ data, status }) => ({
                ...data,
                status,
            })),

    ForgotPassword: (email) =>
        serviceInstance
            .get(`${config.baseUrl}/auth/forgotPassword?email=${email}`)
            .then(({ data, status }) => ({
                ...data,
                status,
            })),

};

export default authService;