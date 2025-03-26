import config from "../config";
import { serviceInstance } from "../axiosInterceptor/requestHandler";
import Cookie from 'js-cookie'
const merchantService = {
    getUserOnboarding: (id) =>
        serviceInstance
            .get(`${config.onboardingBaseUrl}/merchant-onboarding/get/${id}`)
            .then(({ data, status }) => ({
                ...data,
                status,
            })),

    getUserOnboardingData: (state) =>
        serviceInstance
            .get(`${config.onboardingBaseUrl}merchant-onboarding/getAllMerchantOnboardingDataByStatus/${state}?page=0&size=1000`)
            .then(({ data, status }) => ({
                ...data,
                status,
            })),

    saveOnboarding: (data, state) =>
        serviceInstance
            .post(`${config.onboardingBaseUrl}/merchant-onboarding/save/${Cookie?.get("barmsyID")}/${state}`, data)
            .then(({ data, status }) => ({
                ...data,
                status,
            })),


};

export default merchantService;