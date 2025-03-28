import { FaRegCalendarAlt, FaRegComment } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import storyImage from "../../Assets/myImage.jpg";

const LatestStories = () => {
  return (
    <section className="max-w-7xl mx-auto px-6">
      <h2 className="text-4xl font-bold text-gray-900 text-center">Latest Stories</h2>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Featured Story (Left Side) */}
        <div className="bg-white p-6 rounded-lg shadow-xl">
          <div className="flex items-center text-gray-500 mt-12 text-[10px] space-x-4">
            <span className="flex items-center space-x-1">
              <FaRegCalendarAlt />
              <span>March 20, 2025</span>
            </span>
            <span className="flex items-center space-x-1">
              <FaRegComment />
              <span>0 comments</span>
            </span>
            <span className="flex items-center space-x-1">
              <FiUser />
              <span>by Sochima Onah</span>
            </span>
          </div>

          <h3 className="text-lg font-semibold text-gray-900 mt-4 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur. Nunc turpis pharetra ac cras eget dolor purus. Euismod nibh vitae. ac cras eget dolor purus. Euismod nibh vitae
          </h3>

          <a href="#" className="mt-4 inline-block text-gray-900 font-semibold border-b text-[10px] border-gray-900">
            Read More
          </a>
        </div>

        {/* Side Stories (Right Side) */}
        <div className="space-y-6">
          {[1, 2].map((_, index) => (
            <div key={index} className="flex items-center space-x-4 border-b pb-4 last:border-0">
              <img src={storyImage} alt="Story" className="w-24 h-24 rounded-md object-cover" />
              <div>
                <div className="flex items-center  text-[10px] space-x-2">
                  <span className="flex items-center space-x-1">
                    <FaRegCalendarAlt />
                    <span>March 20, 2025</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <FaRegComment />
                    <span>0 comments</span>
                  </span>
                </div>
                <span className="flex items-center space-x-1 text-[10px] mt-2">
              <FiUser />
              <span>by Sochima Onah</span>
            </span>

                <h4 className="text-gray-900 font-medium mt-2 text-sm">
                  Lorem ipsum dolor sit amet consectetur. Massa integer erat vulputate eget eu nec.
                </h4>

                <a href="#" className="mt-2 inline-block text-gray-900 font-semibold border-b border-gray-900 text-sm">
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestStories;
