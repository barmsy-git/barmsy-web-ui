import React, { useState, useRef } from "react";
import { FiUpload } from "react-icons/fi"; // For upload icon
import { FaMapMarkerAlt } from "react-icons/fa"; // Location icon for input
import { IoIosArrowDown } from "react-icons/io";
import AddLocation from "./AddLocation"
import Subscription from "../../Onboarding/OnboardingSteps3"
import BillingPage from "../../Onboarding/OnboardinBillingPage";
import Modal from "../../../components/Modal"


const CustomDropdown = ({ options, selected, setSelected, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
  };

  return (
    <div className="relative w-full">
      <div
        className="w-full border border-gray-300 rounded-full px-3 py-2 mt-1 outline-none text-gray-700 text-xs cursor-pointer bg-white flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{selected ? selected : placeholder}</span>
        <IoIosArrowDown className={`text-gray-500 transition-transform ${isOpen ? "rotate-180 text-[10px]" : ""}`} />
      </div>

      {isOpen && (
        <div className="absolute w-full bg-white border border-gray-300 rounded-lg shadow-md mt-1 z-10">
          {options.map((option, index) => (
            <div
              key={index}
              className="px-3 py-2  text-gray-700 text-xs cursor-pointer hover:bg-gray-200"
              onClick={() => handleSelect(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const AddLocationModal = ({ isOpen, onClose, code,fetchDetails }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const [showSuccess, setShowSuccess] = useState(false)

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50" ref={modalRef}>
      <div className="bg-white p-8 rounded-xl shadow-lg w-[600px]">
        <div className=" flex flex-col items-center justify-center">
          <AddLocation setShowSuccess={setShowSuccess} onClose={onClose} code={code} fetchDetails={fetchDetails} />
          

        </div>
      </div>
    </div>
  );
};

export default AddLocationModal;
