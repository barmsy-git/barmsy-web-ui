import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import SignupPage from "./pages/Authentication/SignupPage.jsx";
import { ToastContainer } from "react-toastify";
import LoginPage from "./pages/Authentication/LoginPage.jsx";
import EmailVerificationPage from "./pages/Authentication/EmailVerificationPage.jsx";
import OnboardingSteps from "./pages/Onboarding/OnboardingIndex.jsx";
import OnboardingSteps2 from "./pages/Onboarding/OnboardingSteps2.jsx";
import OnboardingSteps3 from "./pages/Onboarding/OnboardingSteps3.jsx";
import OnboardingSteps4 from "./pages/Onboarding/OnboardingSteps4.jsx";
import OnboardingSteps5 from "./pages/Onboarding/OnboardingSteps5.jsx";
import OnboardingSteps6 from "./pages/Onboarding/OnboardingSteps6.jsx";
import OnboardingSteps7 from "./pages/Onboarding/OnboardingSteps7.jsx";
import OnboardingSteps8 from "./pages/Onboarding/OnboardingSteps8.jsx";
import OnboardingSteps9 from "./pages/Onboarding/OnboardingSteps9.jsx";
import OnboardingBillingPage from "./pages/Onboarding/OnboardinBillingPage.jsx";
import OnboardingBillingDashboardPage from "./pages/Onboarding/OnboardinBillingDashboardPage.jsx";
import PricingPage from "./pages/Onboarding/PricingPage.jsx";
import VerificationWizard from "./pages/Authentication/Verification/index.jsx";
import CodeExpiredPage from "./pages/Authentication/Verification/CodeExpiredPage.jsx";
import CodeConfirmedPage from "./pages/Authentication/Verification/CodeConfirmedPage.jsx";
import DashboardPage from "./pages/Dashboard/Dashboard.jsx";
import MerchantLocationDashboardPage from "./pages/MerchantLocationDashboard/Dashboard.jsx"
import LocationManagerDashboardPage from "./pages/LocationManagerDashboard/Dashboard.jsx"
import "react-toastify/dist/ReactToastify.css";


function App() {
    return (
        <div>
            <Routes>
                {/* <Route path="/" element={<HomePage />} /> */}
                <Route
                    path="/signup"
                    element={<SignupPage />}
                />
                <Route
                    path="/login"
                    element={<LoginPage />}
                />
                <Route
                    path="/dashboard"
                    element={

                        <DashboardPage />

                    }
                />
                <Route
                    path="/merchant-dashboard"
                    element={

                        <MerchantLocationDashboardPage />

                    }
                />
                <Route
                    path="/Location-Manager-dashboard"
                    element={

                        <LocationManagerDashboardPage />

                    }
                />
                <Route
                    path="/verify-email"
                    element={

                        <EmailVerificationPage />

                    }
                />
                <Route
                    path="/business-setup"
                    element={

                        <OnboardingSteps />

                    }
                />
                <Route
                    path="/business-setup2"
                    element={

                        <OnboardingSteps2 />

                    } />
                <Route
                    path="/business-setup3"
                    element={

                        <OnboardingSteps3 />

                    }
                />

                <Route
                    path="/business-setup4"
                    element={

                        <OnboardingSteps4 />

                    }
                />


                <Route
                    path="/business-setup5"
                    element={

                        <OnboardingSteps5 />

                    }
                />

                <Route
                    path="/business-setup6"
                    element={

                        <OnboardingSteps6 />

                    }
                />

                <Route
                    path="/business-setup7"
                    element={

                        <OnboardingSteps7 />

                    }
                />

                <Route
                    path="/business-setup8"
                    element={

                        <OnboardingSteps8 />

                    }
                />

                <Route
                    path="/business-setup9"
                    element={

                        <OnboardingSteps9 />

                    }
                />

                <Route
                    path="/billing"
                    element={

                        <OnboardingBillingPage />

                    }
                />
                <Route
                    path="/billing-dashboard"
                    element={

                        <OnboardingBillingDashboardPage />

                    }
                />

                <Route
                    path="/pricing"
                    element={

                        <PricingPage />

                    }
                />

                <Route
                    path="/verification"
                    element={

                        <VerificationWizard />

                    }
                />
                <Route
                    path="/code-expire"
                    element={

                        <CodeExpiredPage />

                    }
                />
                <Route
                    path="/code-confirmed"
                    element={

                        <CodeConfirmedPage />

                    }
                />

            </Routes>
            <ToastContainer />
        </div>
    );
}

export default App;
