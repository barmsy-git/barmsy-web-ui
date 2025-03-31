import { AiOutlineCheckCircle } from "react-icons/ai";

const CodeConfirmedPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-full max-w-xl  h-[500px] p-8 bg-white shadow-lg rounded-2xl flex flex-col items-center">
        {/* Checkmark Icon */}
        <AiOutlineCheckCircle className="text-orange-500 mt-40 " size={80}  />
      </div>
    </div>
  );
};

export default CodeConfirmedPage;
