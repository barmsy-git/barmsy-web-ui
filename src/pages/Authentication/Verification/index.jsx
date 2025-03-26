

const VerificationWizard = () => {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="w-full max-w-xl h-[500px] p-8 bg-white shadow-lg rounded-2xl flex flex-col items-center justify-center">
          {/* Animated Spinner */}
          <div
            className="w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"
          ></div>
  
          {/* Loading Text */}
          <p className="mt-4 text-lg font-semibold text-gray-700">Please wait</p>
        </div>
      </div>
    );
  };
  
  export default VerificationWizard;
  