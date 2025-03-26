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

          

};

export default merchantService;