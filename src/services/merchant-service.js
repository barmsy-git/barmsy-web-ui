import config from "../config";
import { serviceInstance } from "../axiosInterceptor/requestHandler";

const merchantService = {
    getsubscription: () =>
        serviceInstance
            .get(`${config.merchantBaseUrl}/subscription-plan/getByCountryName/Nigeria`)
            .then(({ data, status }) => ({
                ...data,
                status,
            })),

    getMerchant: (id) =>
        serviceInstance
            .get(`${config.merchantBaseUrl}/merchant/getByUserId/${id}`)
            .then(({ data, status }) => ({
                ...data,
                status,
            })),

    getProvinces: (country) =>
        serviceInstance
            .get(`${config.merchantBaseUrl}/state-or-province/getAllByCountryName/${country}`)
            .then(({ data, status }) => ({
                ...data,
                status,
            })),

    createLocation: (data) =>
        serviceInstance
            .post(`${config.merchantBaseUrl}/business-location/create`, data)
            .then(({ data, status }) => ({
                ...data,
                status,
            })),




};

export default merchantService;