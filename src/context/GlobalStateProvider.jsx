// GlobalStateProvider.js
import React, { useState } from "react";
import { GlobalStateContext } from "./globalContext";
export const GlobalStateProvider = ({ children }) => {
    const [onboardingDetails, setOnboardingDetails] = useState({
        businessName: "",
        businessApplies: [],
        businessPlan: "",
        businessAddress: "",
        businessDescription: "",
        businessLogo: "",
        businessCategory: "",
        businessProfileName: "",
        businessHouseNumber:"",
        businessCity: "",
        businessState: "",
        businessPostalCode: "",
        subscriptionInfo: {},
        businessLogoView:"",
        "houseNumber": "",
        "postalCode": "",
        "city": "",
        "stateOrProvince": "",
        "country": "",
    });

    return (
        <GlobalStateContext.Provider value={{ onboardingDetails, setOnboardingDetails }}>
            {children}
        </GlobalStateContext.Provider>
    );
};