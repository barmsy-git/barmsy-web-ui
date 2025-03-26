import React, { useState, useContext } from "react";
import { HiArrowLeft } from "react-icons/hi";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FiUpload, FiTrash2 } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import logo from "../../../public/iconoir_organic-food.svg";
import { GlobalStateContext } from "../../context/globalContext";
import { ThreeDots } from "react-loader-spinner";
import onboardingService from "../../services/merchant-onboarding"
const CreateBusinessProfile = ({ setCurrentScreen, setPrevState, submittedDetails, getUserOnboardingStatus }) => {
  const navigate = useNavigate();
  const [businessName, setBusinessName] = useState("");
  const [category, setCategory] = useState([]);
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [load, setLoad] = useState(false)
  const [disable, setDisable] = useState(true)
  const { onboardingDetails, setOnboardingDetails } = useContext(GlobalStateContext);


  // Button is disabled if category, description, or image is empty

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setImage(file)
    setOnboardingDetails((prevState) => ({
      ...prevState,
      businessLogo: file,
    }));
    if (file && file.type.startsWith("image/")) {
      setImage(URL.createObjectURL(file)); // Preview uploaded image
      setOnboardingDetails((prevState) => ({
        ...prevState,
        businessLogoView: URL.createObjectURL(file),
      }));
    }
  };

  const validateInputs = () => {
    if (image && onboardingDetails?.businessProfileName && onboardingDetails?.businessDescription) {
      return false
    }
    else {
      return true
    }
  }

  const compressImage = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        const img = new Image();
        img.onload = () => {
          // Create a canvas to resize the image
          const canvas = document.createElement("canvas");
          const maxWidth = 800; // Maximum width of the resized image
          const maxHeight = 800; // Maximum height of the resized image

          let width = img.width;
          let height = img.height;

          // Maintain aspect ratio
          if (width > maxWidth || height > maxHeight) {
            if (width > height) {
              height = Math.floor((height * maxWidth) / width);
              width = maxWidth;
            } else {
              width = Math.floor((width * maxHeight) / height);
              height = maxHeight;
            }
          }

          canvas.width = width;
          canvas.height = height;

          const ctx = canvas.getContext("2d");
          ctx.drawImage(img, 0, 0, width, height);

          // Convert the resized image to Base64
          resolve(canvas.toDataURL("image/jpeg", 0.8)); // Adjust quality (0.8 = 80%)
        };
        img.onerror = reject;
        img.src = reader.result;
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });

    const saveDataSkip = async () => {

      setLoad(true)
      const data = {
        "businessName": submittedDetails?.businessName,
        "businessCategories": submittedDetails?.businessCategories,
        "businessLocations": [
          {
            "streetName": submittedDetails?.businessLocations[0]?.streetName,
            "houseNumber": submittedDetails?.businessLocations[0]?.houseNumber,
            "postalCode": submittedDetails?.businessLocations[0]?.postalCode,
            "city": submittedDetails?.businessLocations[0]?.city,
            "stateOrProvince": submittedDetails?.businessLocations[0]?.stateOrProvince,
            "country": "NIGERIA",
            "businessProfiles": null
          }
        ]
      }
  
      try {
        const result = await onboardingService.saveOnboarding(data, "PENDING_SUMMARY_CONFIRMATION");
        if (result) {
          setLoad(false)
          getUserOnboardingStatus()
  
        }
  
      } catch (err) {
        setLoad(false)
  
      }
    }
  

  const saveData = async () => {

    setLoad(true)
    const data = {
      "businessName": submittedDetails?.businessName,
      "businessCategories": submittedDetails?.businessCategories,
      "businessLocations": [
        {
          "streetName": submittedDetails?.businessLocations[0]?.streetName,
          "houseNumber": submittedDetails?.businessLocations[0]?.houseNumber,
          "postalCode": submittedDetails?.businessLocations[0]?.postalCode,
          "city": submittedDetails?.businessLocations[0]?.city,
          "stateOrProvince": submittedDetails?.businessLocations[0]?.stateOrProvince,
          "country": "NIGERIA",
          "businessProfiles": [
            {
              "profileName": onboardingDetails.businessProfileName ? onboardingDetails.businessProfileName : null,
              "description": onboardingDetails?.businessDescription,
              "category": onboardingDetails?.businessCategory,
              "logo": null,
              "selectedSubscription": null,
              "billingDetail": {
                "billingDate": null,
                "billingAmount": null,
                "billingCycle": null,
                "initiatedPayment": null
              }
            }
          ]
        }
      ]
    }

    try {
      const result = await onboardingService.saveOnboarding(data, "PENDING_SUBSCRIPTION_SELECTION");
      if (result) {
        setLoad(false)
        getUserOnboardingStatus()

      }

    } catch (err) {
      setLoad(false)

    }
  }



  // Remove uploaded image
  const handleRemoveImage = () => {
    setImage(null);
  };

  const handleCategoryChange = (option) => {
    setCategory((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    );
  };

  return (
    <div>

      <div className="flex items-center space-x-2 text-gray-400 text-xs pt-7">
        <FaMapMarkerAlt />
        <p>{onboardingDetails?.businessAddress}</p>
      </div>

      <h2 className="text-lg font-bold mt-2">Let’s create your business profile</h2>
      <p className="text-gray-500 text-xs text-center max-w-sm">
        Ut eros et fames vitae venenatis risus auctor ullamcorper fringilla. Ut faucibus eu ipsum faucibus.
      </p>

      <div className="relative flex justify-center items-center mt-4">
        {image ? (
          <div className="relative">
            <img src={image} alt="Preview" className="h-16 w-16 rounded-full object-cover" />
            <button
              className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1"
              onClick={handleRemoveImage}
            >
              <FiTrash2 size={12} />
            </button>
          </div>
        ) : (
          <label className="cursor-pointer flex justify-center items-center bg-white border border-gray-300 rounded-full h-20 w-20">
            <FiUpload className="text-orange-500 text-3xl" />
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleFileChange}
            />
          </label>
        )}
      </div>

      <div className="w-full max-w-2xl mt-6">
        <label className="text-xs text-black">Business Profile Name <span className="text-red-600">*</span></label>
        <input
          type="text"
          //   value={businessName}
          //   disabled
          onChange={(e) => {
            setOnboardingDetails((prevState) => ({
              ...prevState,
              businessProfileName: e.target.value,
            }));
          }}
          value={onboardingDetails?.businessProfileName}
          className="w-full border rounded-full px-4 py-2  text-xs bg-white text-black  mt-1"

        />
        {/* cursor-not-allowed */}

        {/* Category Dropdown */}
        <label className="text-xs w-full m-w- text-black  mt-4 block">For <span className="text-red-600">*</span></label>
        <select
          value={onboardingDetails?.businessCategory}
          onChange={(e) => {
            setOnboardingDetails((prevState) => ({
              ...prevState,
              businessCategory: e.target.value,
            }));
          }}
          className="w-full border rounded-full text-xs px-3 py-2 mt-1"
        >
          <option value="" selected>Select</option>
          <option value="bar">Bar</option>
          <option value="restaurant">Restaurant</option>
          <option value="cafe">Food</option>

        </select>


        {/* <div className="w-full mt-1">
          {["Bar", "Restaurant", "Cafe"].map((option) => (
            <label key={option} className="flex items-center space-x-2 text-xs">
              <input
                type="checkbox"
                value={option.toLowerCase()}
                checked={category.includes(option.toLowerCase())}
                onChange={(e) => {
                  if (e.target.checked) {
                    setCategory([...category, e.target.value]);
                  } else {
                    setCategory(category.filter((cat) => cat !== e.target.value));
                  }
                }}
                className="rounded text-orange-500"
              />
              <span>{option}</span>
            </label>
          ))}
        </div> */}


        {/* Description */}
        <label className="text-xs text-black mt-4 block">Description <span className="text-red-600">*</span></label>
        <textarea
          value={onboardingDetails?.businessDescription}
          onChange={(e) => {
            setOnboardingDetails((prevState) => ({
              ...prevState,
              businessDescription: e.target.value,
            }));
          }}
          className="w-full border outline-none  rounded-3xl px-4 text-xs py-3 mt-1 h-28 resize-none"
          placeholder="Enter a short business description..."
        ></textarea>

        <div className="flex justify-between items-center">
          <button
            className="mt-6 px-2 py-3 rounded-full w-full text-white text-sm font-medium transition-all bg-orange-500 hover:bg-orange-600"
            style={{width:'40%'}}
            onClick={() => {
              saveDataSkip()

            }}
          >
           
                Skip
              
          </button>
          <button
            className={`mt-6 px-2 py-3 rounded-full w-full text-white text-sm font-medium transition-all ${validateInputs() ? "bg-gray-300 cursor-not-allowed" : "bg-orange-500 hover:bg-orange-600"
              }`}
              style={{width:'40%'}}

            onClick={() => {
              saveData()

            }}
            disabled={validateInputs()}
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
                Next
              </>}
          </button>
        </div>

      </div>
    </div>
  );
};

export default CreateBusinessProfile;
