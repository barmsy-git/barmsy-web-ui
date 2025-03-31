import React, { useState, useContext, useEffect } from "react";
import { HiArrowLeft } from "react-icons/hi";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io"; // Added arrow icon
import { useNavigate } from "react-router-dom";
import Location from "../../../components/Location/Index"
import { GlobalStateContext } from "../../../context/globalContext";
import merchantService from "../../../services/merchant-service";
import Modal from "../../../components/Modal/index"
import { ThreeDots } from "react-loader-spinner";
import logo from "/public/iconoir_organic-food.svg";
import showMessage from "../../../utils/toast";

const BusinessLocation = ({ setShowSuccess,onClose,code,fetchDetails }) => {
    const [selectedLocation, setSelectedLocation] = useState("")
    const { onboardingDetails, setOnboardingDetails } = useContext(GlobalStateContext);
    const [addressObj, setAddressObj] = useState({})
    const [city, setCity] = useState("")
    const [state, setState] = useState("")
    const [postalCode, setPostalCode] = useState("")
    const [provinces, setProvinces] = useState([])
    const [houseNumber, setHouseNumber] = useState("")
    const [country, setCountry] = useState("")
    const [validationResult, setValidationResult] = useState(false)
    const [load, setLoad] = useState(false)
    const navigate = useNavigate();




    const saveData = async () => {
        if (!city && !state && !postalCode && !houseNumber && !selectedLocation) {
            showMessage({
                type: 'error',
                message: "Fields are all required"
            })
            return;
        }
        setLoad(true)
        const data = {
            "merchantCode": code,
            "streetName": selectedLocation ? selectedLocation : null,
            "houseNumber": houseNumber,
            "postalCode": postalCode,
            "city": city,
            "stateOrProvince": state,
            "country": country,
            "isActive": true
        }

        try {
            const result = await merchantService.createLocation(data);
            if (result) {
                setLoad(false)
                fetchDetails()
                setShowSuccess(true)
                showMessage({
                    type: 'success',
                    message: result?.message
                  })
                onClose()
            }

        } catch (err) {
            setLoad(false)

        }
    }

    const validateContaiedState = () => {
        var statecontained = provinces.some(x => x.name?.toLowerCase() === state?.toLowerCase());
        return statecontained

    }

    const validateInputedAddress = () => {
        var findInputedAddressContainsProvince = provinces.some(x => x.name?.toLowerCase() === state?.toLowerCase());
        console.log(findInputedAddressContainsProvince)
        console.log(state)
        if (findInputedAddressContainsProvince === true) {
            setValidationResult(false)
        }
        else
            setValidationResult(true)
    }


  


    const getProvinces = async () => {
        try {
            const result = await merchantService.getProvinces("Nigeria");
            if (result) {
                setProvinces(result?.result?.map((d) => ({
                    name: d?.name?.toLowerCase()
                })))
            }

        } catch (err) {
            setLoad(false)

        }
    }

    useEffect(() => {
        if (selectedLocation && country) {
            validateInputedAddress()
        }

    }, [selectedLocation, country])

    useEffect(() => {
        getProvinces()
    }, [])



    return (
        <div>

            {/* Step 4 - Add Business Location */}
            <div className="text-center mt-10">
                <h2 className="text-base font-medium ">Add a Business Location</h2>
                <p className="text-gray-500 text-xs  mt-2">Enter your business address to help customers find you.</p>
            </div>

            {/* Location Input Field */}
            <div className="w-full max-w-lg mt-6">
                <label className="text-xs text-black">Street Address <span className="text-red-600">*</span></label>
                <div className="flex items-center border border-gray-300 rounded-full text-xs px-4 py-1 bg-white">
                    <FaMapMarkerAlt className="text-gray-400 mr-2" />
                    <Location setCurrentAddress={setSelectedLocation} setCity={setCity} setState={setState} setPostalCode={setPostalCode} setHouseNumber={setHouseNumber} setCountry={setCountry} />
                </div>
                <div className="mt-3">
                    <label className="text-xs text-black">House Number <span className="text-red-600">*</span></label>
                    <input
                        type="text"
                        //   value={businessName}
                        //   disabled
                        onChange={(e) => {
                            setHouseNumber(e?.target?.value)
                        }}
                        value={houseNumber}
                        className="w-full border rounded-full px-4 py-2  text-xs bg-white text-black  mt-1"

                    />
                </div>

                <div className="mt-3">
                    <label className="text-xs text-black">Postal Code </label>
                    <input
                        type="text"
                        //   value={businessName}
                        //   disabled
                        onChange={(e) => {
                            setPostalCode(e?.target?.value)
                        }}
                        value={postalCode}
                        className="w-full border rounded-full px-4 py-2  text-xs bg-white text-black  mt-1"

                    />
                </div>
                <div className="mt-3">
                    <label className="text-xs text-black">City <span className="text-red-600">*</span></label>
                    <input
                        type="text"
                        //   value={businessName}
                        //   disabled
                        onChange={(e) => {
                            setCity(e?.target?.value)
                        }}
                        value={city}
                        className="w-full border rounded-full px-4 py-2  text-xs bg-white text-black  mt-1"

                    />
                </div>
                <div className="mt-3">
                    <label className="text-xs text-black">State/Province <span className="text-red-600">*</span></label>
                    <input
                        type="text"
                        //   value={businessName}
                        //   disabled
                        onChange={(e) => {
                            setState(e?.target?.value)
                        }}
                        value={state}
                        className="w-full border rounded-full px-4 py-2  text-xs bg-white text-black  mt-1"

                    />
                </div>
                <div className="mt-3">
                    <label className="text-xs text-black">Country <span className="text-red-600">*</span></label>
                    <input
                        type="text"
                        //   value={businessName}
                        //   disabled
                        onChange={(e) => {
                            setCountry(e?.target?.value)
                        }}
                        value={country}
                        className="w-full border rounded-full px-4 py-2  text-xs bg-white text-black  mt-1"

                    />
                </div>
            </div>


            {validationResult &&
        <Modal onClose={onClose}>
          <div>
            <div className="flex justify-center space-x-1 pb-4">
              <img src={logo} alt="Barmsy Logo" className="h-10" />
              <h4 className="text-3xl font-semibold text-orange-500 ml-5">Barmsy</h4>
            </div>
            <div className="text- text-sm py-4 text-center">
              <p>We do not operate in this state currently, We currently operate in the following state:{" "}{provinces?.map((x) => {
                return <span className="pr-1 " style={{ fontWeight: 500 }}>{x?.name?.toLowerCase()}</span>
              })}</p>
            </div>
            <br />

            <button
              className="mt-6 px-2 py-3 rounded-full w-full text-white text-sm font-medium transition-all bg-orange-500 hover:bg-orange-600"
              onClick={() => {
                onClose()

              }}
            >

              Close

            </button>


          </div>
        </Modal>}




            {!validationResult && selectedLocation && validateContaiedState() &&
                <button
                    className={`mt-6 px-4 py-2 rounded-full max-w-lg w-full text-white text-sm font-medium transition-all bg-orange-500 hover:bg-orange-600"
            }`}
                    onClick={() => {
                        saveData()

                    }}
                >
                    {load ?
                        <div style={{ display: 'flex', justifyContent: 'center', alignContent: 'center' }}>
                            <ThreeDots
                                visible={load}
                                height="20"
                                width="40"
                                color="#fff"
                                radius="9"
                                ariaLabel="three-dots-loading"
                                wrapperStyle={{}}
                                wrapperClass=""
                            />
                        </div>
                        :
                        <>
                            Submit
                        </>}
                </button>}

        </div>

    );
};

export default BusinessLocation;
