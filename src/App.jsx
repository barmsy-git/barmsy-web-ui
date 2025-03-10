import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "./Routes.js";
import { ToastContainer } from "react-toastify";
import SignupPage from "./pages/Authentication/SignupPage.jsx";
import LoginPage from "./pages/Authentication/LoginPage.jsx";
import EmailVerificationPage from "./pages/Authentication/EmailVerificationPage.jsx";
import OnboardingSteps from "./pages/Onboarding/OnboardingSteps.jsx";
import OnboardingSteps2 from "./pages/Onboarding/OnboardingSteps2.jsx";
import OnboardingSteps3 from "./pages/Onboarding/OnboardingSteps3.jsx";
import OnboardingSteps4 from "./pages/Onboarding/OnboardingSteps4.jsx";
import OnboardingSteps5 from "./pages/Onboarding/OnboardingSteps5.jsx";
import OnboardingSteps6 from "./pages/Onboarding/OnboardingSteps6.jsx";
import OnboardingSteps7 from "./pages/Onboarding/OnboardingSteps7.jsx";
import OnboardingSteps8 from "./pages/Onboarding/OnboardingSteps8.jsx";
import OnboardingSteps9 from "./pages/Onboarding/OnboardingSteps9.jsx";
import OnboardingBillingPage from "./pages/Onboarding/OnboardinBillingPage.jsx";
import OnboardingSummary from "./pages/Onboarding/OnboardingSummary.jsx";
// import LocationOwnerPage from "./pages/LocationOwnerPage/Dashboard.jsx"
import OnboardingBillingDashboardPage from "./pages/Onboarding/OnboardinBillingDashboardPage.jsx";
import DashboardPage from "./pages/Dashboard/Dashboard.jsx";
import MerchantLocationDashboardPage from "./pages/MerchantLocationDashboard/Dashboard.jsx"
import LocationManagerDashboardPage from "./pages/LocationManagerDashboard/Dashboard.jsx"
import PricingPage from "./pages/Onboarding/PricingPage.jsx";
import LoadingPage from "./pages/Authentication/LoadingPage.jsx";
import CodeExpiredPage from "./pages/Authentication/CodeExpiredPage.jsx";
import CodeConfirmedPage from "./pages/Authentication/CodeConfirmedPage.jsx";

function App() {
  return (
    
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
            path="/signup"
            element={<SignupPage /> }
          />
      <Route
            path="/login"
            element={<LoginPage /> }
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
                
              }/>
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
              path="/onboarding-summary"
              element={
                
                  <OnboardingSummary />
                
              }
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

           {/* <Route
              path="/Location-Owner"
              element={
                
                  <LocationOwnerPage />
                
              }
            />  */}
            
          
           <Route
              path="/pricing"
              element={
                
                  <PricingPage />
                
              }
            />
          
           <Route
              path="/loading"
              element={
                
                  <LoadingPage />
                
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
  );
}

export default App;
