import React, { useState } from "react";
import { X, Upload, ArrowLeft, CheckCircle } from "lucide-react";
import iconAddProduct from "../../../Assets/IconAddProduct.png"

const AddProductModal = ({ onClose }) => {
  const [step, setStep] = useState(1);
  const [imagePreview, setImagePreview] = useState(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const goToNextStep = () => {
    if (name.trim() !== "") setStep(2);
  };

  const goToPrevStep = () => setStep(1);

  const isStepOneValid = name.trim() !== "";
  const isStepTwoValid = price.trim() !== "" && category !== "" && subCategory !== "";

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-[1000]">
      <div className="bg-orange-50 p-6 rounded-lg w-[400px] shadow-lg relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
        >
          <X size={20} />
        </button>

        {/* Title and Subtitle with Dynamic Spacing */}
        <div className={`flex items-center ${step === 2 ? "ml-0" : ""}`}>
          {step === 2 && (
            <button
              onClick={goToPrevStep}
              className="text-gray-500 hover:text-gray-700 flex items-center mr-2"
            >
              <ArrowLeft size={18} className="mb-3" />
            </button>
          )}
          <div>
   <div className="flex justify-start space-x-1">
   <img src={iconAddProduct}  alt=""  className="h-5 w-5"/>
   <h2 className="text-sm font-bold">Add Product</h2>
   </div>
            <p className="text-gray-500 text-[10px]">Add a new Product</p>
          </div>
        </div>

        {/* Step Indicator */}
        <div className="flex items-center justify-start mt-3 space-x-2">
  {/* General Step */}
  <div className="flex items-center space-x-2">
    <div className="w-4 h-4 bg-orange-500 rounded-full flex items-center justify-center text-white text-[8px]">
      ✓
    </div>
    <span className="text-xs text-gray-700 font-medium">General</span>
  </div>

  {/* Shorter Orange Line */}
  <div className="w-6 border-t border-orange-500 mx-1"></div>

  {/* Price and Category Step */}
  <div className="flex items-center space-x-2">
    <div
      className={`w-4 h-4 rounded-full flex items-center justify-center text-white text-[8px] ${
        step === 2 ? "bg-orange-500" : "border border-gray-400 text-gray-400"
      }`}
    >
      ✓
    </div>
    <span
      className={`text-xs font-medium ${
        step === 2 ? "text-gray-700" : "text-gray-400"
      }`}
    >
      Price and Category
    </span>
  </div>
</div>


        {/* Step 1: General Details */}
        {step === 1 && (
          <div className="mt-5 space-y-4">
            <div className="bg-white p-4 rounded-lg">
              <div>
                <label className="text-[11px] font-semibold">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full text-xs mt-1 p-2 py-2 border rounded-full"
                  placeholder="Enter product name"
                />
              </div>

              <div>
                <label className="text-[11px] font-semibold">Description</label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full mt-1 text-xs p-2 border rounded-2xl resize-none outline-none"
                  placeholder="Enter product description"
                  rows="3"
                />
              </div>

              <div className="border border-dashed border-gray-300 rounded-lg py-6 flex flex-col items-center justify-center">
                {imagePreview ? (
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="w-16 h-16 object-cover rounded-lg mb-2"
                  />
                ) : (
                  <>
                    <Upload size={20} className="text-gray-500" />
                    <p className="text-[11px] text-gray-500">Drop an image here</p>
                  </>
                )}
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  id="fileInput"
                  onChange={handleImageUpload}
                />
                <label
                  htmlFor="fileInput"
                  className="mt-2 px-4 py-1 border rounded-full text-[10px] font-medium cursor-pointer"
                >
                  Click to Upload
                </label>
              </div>
            </div>

            <button
              onClick={goToNextStep}
              disabled={!isStepOneValid}
              className={`w-full mt-5 py-2 rounded-full text-[12px] font-medium ${
                isStepOneValid
                  ? "bg-orange-500 text-white cursor-pointer"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
            >
              Continue &rarr;
            </button>
          </div>
        )}

        {/* Step 2: Price and Category */}
        {step === 2 && (
          <div className="mt-5 space-y-4 ">
            <div className="bg-white p-4 rounded-lg">
            <div>
              <label className="text-[11px] font-semibold">
                Price <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="w-full mt-1 p-2 border rounded-full text-[10px]"
                placeholder="₦2,000"
              />
            </div>

            <div>
              <label className="text-[11px] font-semibold">
                Category <span className="text-red-500">*</span>
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full mt-1 p-2 border rounded-full text-[10px]"
              >
                <option value="">Select Category</option>
                <option value="pasta">Pasta</option>
                <option value="burger">Burger</option>
                <option value="drinks">Drinks</option>
              </select>
            </div>

            <div>
              <label className="text-[11px] font-semibold">
                Sub Category <span className="text-red-500">*</span>
              </label>
              <select
                value={subCategory}
                onChange={(e) => setSubCategory(e.target.value)}
                className="w-full mt-1 p-2 border rounded-full text-[10px] "
              >
                <option value="">Select Sub Category</option>
                <option value="spicy">Spicy</option>
                <option value="vegan">Vegan</option>
                <option value="grilled">Grilled</option>
              </select>
            </div>
            </div>

            <button
              onClick={onClose}
              disabled={!isStepTwoValid}
              className={`w-full mt-5  py-2 rounded-full text-sm font-medium ${
                isStepTwoValid
                  ? "bg-orange-500 text-white cursor-pointer"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
            >
              Finish
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddProductModal;
