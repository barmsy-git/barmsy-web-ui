import { useEffect, useRef, useState } from "react";
import OnboardingOne from "./OnboardingSteps"
import OnboardingTwo from "./OnboardingSteps2"
import OnboardingThree from "./OnboardingSteps3"
import OnboardingFour from "./OnboardingSteps4"
import OnboardingFive from "./OnboardingSteps5"
import OnboardingSix from "./OnboardingSteps6"
import OnboardingSeven from "./OnboardingSteps7"
import Summary from "./OnboardingSummary"
import OnboardingEight from "./OnboardingSteps8"
import Loader from "../../components/Loader/Index"
import OnboardingNine from "./OnboardingSteps9"
import Pricing from "./PricingPage"
import Cookie from 'js-cookie'
import vectorClosing from "../../Assets/Vector closing.png"
import logo from "../../../public/iconoir_organic-food.svg"
import { HiArrowLeft } from "react-icons/hi";
import BillingOnboard from "./OnboardinBillingPage";
import merchantService from "../../services/merchant-onboarding";
const OnboardingIndex = () => {
    const [currentScreen, setCurrentScreen] = useState("PENDING_BUSINESS_NAME")
    const [load, setLoad] = useState(false)
    const [submittedDetails, setSubmittedDetails] = useState({})
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [menus, setMenus] = useState([
        { name: 'Business Name', id: 1, page: "PENDING_BUSINESS_NAME", color: 'inactive' },
        { name: 'Business Categories', id: 2, page: "PENDING_BUSINESS_CATEGORY_CHOICE", color: 'inactive' },
        { name: 'Business Location', id: 3, page: "PENDING_ADD_BUSINESS_LOCATIONS", color: 'inactive' },

        { name: 'Summary', id: 7, page: "PENDING_SUMMARY_CONFIRMATION", color: 'inactive' },


    ])

    const menusNull = [
        { name: 'Business Name', id: 1, page: "PENDING_BUSINESS_NAME", },
        { name: 'Business Categories', id: 2, page: "PENDING_BUSINESS_CATEGORY_CHOICE" },
        { name: 'Business Location', id: 3, page: "PENDING_ADD_BUSINESS_LOCATIONS" },
        { name: 'Business Profile', id: 4, page: "PENDING_ADD_BUSINESS_PROFILES" },
        { name: 'Subscription Plan', id: 5, page: "PENDING_SUBSCRIPTION_SELECTION" },
        { name: 'Billing Details', id: 6, page: "PENDING_BILLING_INFORMATION", },
        { name: 'Summary', id: 7, page: "PENDING_SUMMARY_CONFIRMATION", },


    ]
    const [prevState, setPrevState] = useState("")


    const displayPage = (page) => {
        setCurrentScreen(page.page)
    }
    const renderPageEffect = () => {
        switch (currentScreen) {
            case 'PENDING_BUSINESS_NAME':
                return <OnboardingOne setCurrentScreen={setCurrentScreen} setPrevState={setPrevState} submittedDetails={submittedDetails} getUserOnboardingStatus={getUserOnboardingStatus} updateMenuColorById={updateMenuColorById} />;
            case 'NULL':
                return <OnboardingOne setCurrentScreen={setCurrentScreen} setPrevState={setPrevState} submittedDetails={submittedDetails} getUserOnboardingStatus={getUserOnboardingStatus} updateMenuColorById={updateMenuColorById} />;
            case 'PENDING_BUSINESS_CATEGORY_CHOICE':
                return <OnboardingTwo setCurrentScreen={setCurrentScreen} setPrevState={setPrevState} submittedDetails={submittedDetails} getUserOnboardingStatus={getUserOnboardingStatus} updateMenuColorById={updateMenuColorById} />;
            case 'PENDING_ADD_BUSINESS_LOCATIONS':
                return <OnboardingFour setCurrentScreen={setCurrentScreen} setPrevState={setPrevState} submittedDetails={submittedDetails} getUserOnboardingStatus={getUserOnboardingStatus} updateMenuColorById={updateMenuColorById} />;
            case 'PENDING_ADD_BUSINESS_PROFILES':
                return <OnboardingSix setCurrentScreen={setCurrentScreen} setPrevState={setPrevState} submittedDetails={submittedDetails} getUserOnboardingStatus={getUserOnboardingStatus} />;
            case 'PENDING_SUBSCRIPTION_SELECTION':
                return <OnboardingThree setCurrentScreen={setCurrentScreen} setPrevState={setPrevState} submittedDetails={submittedDetails} getUserOnboardingStatus={getUserOnboardingStatus} />;
            case 'six':
                return <OnboardingSeven setCurrentScreen={setCurrentScreen} setPrevState={setPrevState} submittedDetails={submittedDetails} getUserOnboardingStatus={getUserOnboardingStatus} />;

            case 'seven':
                return <OnboardingThree setCurrentScreen={setCurrentScreen} setPrevState={setPrevState} submittedDetails={submittedDetails} getUserOnboardingStatus={getUserOnboardingStatus} />;


            case 'PENDING_BILLING_INFORMATION':
                return <BillingOnboard setCurrentScreen={setCurrentScreen} setPrevState={setPrevState} submittedDetails={submittedDetails} getUserOnboardingStatus={getUserOnboardingStatus} />;

            case 'PENDING_SUMMARY_CONFIRMATION':
                return <Summary setCurrentScreen={setCurrentScreen} setPrevState={setPrevState} info={submittedDetails} submittedDetails={submittedDetails} getUserOnboardingStatus={getUserOnboardingStatus} menus={menus} />;



            default: <OnboardingOne setCurrentScreen={setCurrentScreen} setPrevState={setPrevState} getUserOnboardingStatus={getUserOnboardingStatus} />
        }
    }

    useEffect(() => {
        getUserOnboardingStatus()
    }, [])



    const getUserOnboardingStatus = async () => {
        setLoad(true)
        try {
            const result = await merchantService.getUserOnboarding(Cookie?.get("barmsyID"));

            if (result) {
                setLoad(false)
                if (result?.result === null) {
                    setCurrentScreen("PENDING_BUSINESS_NAME")
                    setMenus((prevState) =>
                        prevState.map((item) =>
                            item.page === "PENDING_BUSINESS_NAME" ? { ...item, color: 'active' } : item
                        )
                    );
                }
                else
                    setCurrentScreen(result.result?.onboardingStatus)
                setSubmittedDetails(result?.result?.onboardingRequest)
                if (result?.result?.onboardingStatus === "PENDING_BUSINESS_CATEGORY_CHOICE") {
                    setMenus((prevState) =>
                        prevState.map((item) =>
                            item.page === "PENDING_BUSINESS_NAME" ? { ...item, color: 'active' } : item
                        )
                    );
                    setMenus((prevState) =>
                        prevState.map((item) =>
                            item.page === "PENDING_BUSINESS_CATEGORY_CHOICE" ? { ...item, color: 'active' } : item
                        )
                    );
                }
                else if (result?.result?.onboardingStatus === "PENDING_BUSINESS_NAME") {
                    setMenus((prevState) =>
                        prevState.map((item) =>
                            item.page === "PENDING_BUSINESS_NAME" ? { ...item, color: 'active' } : item
                        )
                    );

                }
                else if (result?.result?.onboardingStatus === "PENDING_ADD_BUSINESS_LOCATIONS") {
                    setMenus((prevState) =>
                        prevState.map((item) =>
                            item.page === "PENDING_BUSINESS_CATEGORY_CHOICE" ? { ...item, color: 'active' } : item
                        )
                    );
                    setMenus((prevState) =>
                        prevState.map((item) =>
                            item.page === "PENDING_BUSINESS_NAME" ? { ...item, color: 'active' } : item
                        )
                    );
                    setMenus((prevState) =>
                        prevState.map((item) =>
                            item.page === "PENDING_ADD_BUSINESS_LOCATIONS" ? { ...item, color: 'active' } : item
                        )
                    );
                }
                else if (result?.result?.onboardingStatus === "PENDING_SUMMARY_CONFIRMATION") {
                    setMenus((prevState) =>
                        prevState.map((item) =>
                            item.page === "PENDING_BUSINESS_CATEGORY_CHOICE" ? { ...item, color: 'active' } : item
                        )
                    );
                    setMenus((prevState) =>
                        prevState.map((item) =>
                            item.page === "PENDING_BUSINESS_NAME" ? { ...item, color: 'active' } : item
                        )
                    );
                    setMenus((prevState) =>
                        prevState.map((item) =>
                            item.page === "PENDING_ADD_BUSINESS_LOCATIONS" ? { ...item, color: 'active' } : item
                        )
                    );
                    setMenus((prevState) =>
                        prevState.map((item) =>
                            item.page === "PENDING_SUMMARY_CONFIRMATION" ? { ...item, color: 'active' } : item
                        )
                    );
                }

            }
        } catch (err) {
            setLoad(false)
        }
    }

    function updateMenuColorById2(screen) {
        setMenus((prevState) =>
            prevState.map((item) =>
                item.page === screen ? { ...item, color: 'active' } : item
            )
        );

    }

    function updateMenuColorById() {
        setMenus((prevState) =>
            prevState.map((item) =>
                item.page === currentScreen ? { ...item, color: 'active' } : item
            )
        );

    }




    return (
        <>
            {load &&
                <div className="" style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                    <Loader /></div>}

            {!load &&


                <>

                    <div className="flex flex-wrap">
                        <div
                            className={`fixed top-3 cursor-pointer transition-all duration-300 ${isCollapsed ? "left-6" : "left-64"
                                }`}
                            onClick={() => setIsCollapsed(!isCollapsed)}
                        >
                            <img
                                src={vectorClosing}
                                alt="Toggle Sidebar"
                                className={`transition-transform duration-300 ${isCollapsed ? "rotate-180" : ""
                                    }`}
                            />
                        </div>

                        {/* Sidebar (Collapsible) */}
                        {!isCollapsed && (
                            <div className="w-full md:w-3/12 px-6 flex flex-col items-start justify-start min-h-screen bg-[#f2f4f6] pt-48 pb-24 transition-all duration-300">
                                <div className="text-gray-800 font-semibold text-sm mb-4 p-1">
                                    Onboarding Checklist
                                </div>

                                <ul className="w-full space-y-4">
                                    {menus?.map((d, index) => (
                                        <li
                                            key={d?.id}
                                            onClick={displayPage.bind(this, d)}
                                            className={`cursor-pointer text-sm flex items-center justify-between px-6 py-2 rounded-full transition-all shadow-sm ${d?.color === "inactive"
                                                ? "bg-gray-50 text-black border border-gray-300"
                                                : "bg-white text-orange-500 border-2"
                                                }`}
                                        >
                                            {/* Left Side: Step Number or Check Icon */}
                                            <div className="flex items-center">
                                                <div
                                                    className={`w-7 h-7 flex items-center justify-center rounded-full font-bold text-sm ${d?.color === "inactive"
                                                        ? "border text-gray-300"
                                                        : "bg-orange-500 text-white"
                                                        }`}
                                                >
                                                    {d?.color === "inactive" ? index + 1 : "✓"}
                                                </div>

                                                {/* Business Name and Location should be black when checked */}
                                                <h3
                                                    className={`pl-4 font-medium ${d?.color === 'inactive' ? 'text-dark' : ''}`}
                                                >
                                                    {d?.name}
                                                </h3>
                                            </div>

                                            {/* Right Side: Orange Arrow */}
                                            <span className="text-orange-500 text-3xl">→</span>
                                        </li>
                                    ))}
                                </ul>
                                <br />
                                <br />
                                <br />
                                <br />
                                <div className="flex justify-content text-orange" onClick={() => {
                                    Cookie.remove("token");
                                    Cookie.remove("barmsyID");
                                    Cookie.remove("barmsyD");
                                    window.location.href = "/login"
                                }}>Log Out</div>
                            </div>
                        )}


                        <div
                            className={`transition-all duration-300 ${isCollapsed ? "w-full" : "w-full md:w-9/12"
                                } bg-white min-h-screen flex flex-col items-center justify-center px-6 pb-24 pt-8`}
                        >
                            {renderPageEffect()}
                        </div>


                    </div>
                </>

            }
        </>
    );
};
export default OnboardingIndex;