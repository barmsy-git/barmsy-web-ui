// import myImage from "../../Assets/myImage.jpg"

// const Testimonials = () => {
//     const testimonials = [
//       {
//         id: 1,
//         logo: "box", // Replace with actual logo URL if available
//         text: "Lorem ipsum dolor sit amet consectetur. Nisi quam neque augue sed aenean turpis dignissim arcu. Senectus eros id a laoreet nulla sit ut porta potenti. Eget nisi feugiat tristique ornare enim varius. Integer faucibus eget morbi est egestas eu elit sed.",
//         name: "Sochima Onah",
//         position: "CEO Sochima Restaurants",
//         img: myImage, // Replace with actual image URL
//         highlight: true,
//       },
//       ...Array(5).fill({
//         id: Math.random(),
//         text: "“Lorem ipsum dolor sit amet consectetur. Nulla eu mollis leo porttitor. Sagittis tellus dictum est ante.”",
//         name: "Sochima Onah",
//         position: "CEO Sochima Restaurants",
//         img: myImage, // Replace with actual image URL
//         highlight: false,
//       }),
//     ];
  
//     return (
//       <section className=" bg-gray-50 text-center   ">
//         {/* Title */}
//         <h2 className="text-3xl font-bold text-gray-800 pt-14">
//           Why People love <span className="text-orange-500">Barmsy</span>
//         </h2>
//         <p className="text-gray-600 mt-2 text-[11px]">
//           Join the growing number of customers and champions who trust Barmsy for restaurant and user management.
//         </p>
  
//         {/* Testimonials Grid */}
//         <div className="mt-10 grid grid-cols-3 gap-6 max-w-6xl mx-auto">
//           {testimonials.map((item) => (
//             <div
//               key={item.id}
//               className={`p-6 rounded-lg shadow-md ${
//                 item.highlight
//                   ? "bg-orange-500 text-white"
//                   : "bg-gray-50 border border-gray-200"
//               }`}
//             >
//               {/* Logo */}
//               <div className="text-left font-bold">{item.logo}</div>
  
//               {/* Quote */}
//               <p className="mt-10 text-[11px] text-left leading-relaxed">{item.text}</p>
  
//               {/* Profile */}
//               <div className="mt-6 flex items-center justify-between">
//                 <div className="text-left mt-10">
//                   <p className="font-bold text-[11px] mb-2">{item.name}</p>
//                   <p className="text-[11px]">{item.position}</p>
//                 </div>
//                 <img
//                   src={item.img}
//                   alt={item.name}
//                   className="w-10 h-10 rounded-full object-cover"
//                 />
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>
//     );
//   };
  
//   export default Testimonials;
  


import myImage from "../../Assets/myImage.jpg";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      logo: "box", // Replace with actual logo URL if available
      text: "Lorem ipsum dolor sit amet consectetur. Nisi quam neque augue sed aenean turpis dignissim arcu. Senectus eros id a laoreet nulla sit ut porta potenti. Eget nisi feugiat tristique ornare enim varius. Integer faucibus eget morbi est egestas eu elit sed.",
      name: "Sochima Onah",
      position: "CEO Sochima Restaurants",
      img: myImage,
      color: "bg-orange-500 text-white", // Orange Highlighted Card
      textColor: "text-white", // Ensures all text is white inside orange bg
    },
    {
      id: 2,
      text: "“Lorem ipsum dolor sit amet consectetur. Nulla eu mollis leo porttitor. Sagittis tellus dictum est ante.”",
      name: "Sochima Onah",
      position: "CEO Sochima Restaurants",
      img: myImage,
      color: "bg-gray-100 text-gray-800", // Gray Card
      textColor: "text-gray-800",
    },
    {
      id: 3,
      text: "“Lorem ipsum dolor sit amet consectetur. Nulla eu mollis leo porttitor. Sagittis tellus dictum est ante.”",
      name: "Sochima Onah",
      position: "CEO Sochima Restaurants",
      img: myImage,
      color: "bg-white border border-gray-200", // White Card
      textColor: "text-gray-800",
    },
    {
      id: 4,
      text: "“Lorem ipsum dolor sit amet consectetur. Nulla eu mollis leo porttitor. Sagittis tellus dictum est ante.”",
      name: "Sochima Onah",
      position: "CEO Sochima Restaurants",
      img: myImage,
      color: "bg-gray-100 text-gray-800", // Gray Card
      textColor: "text-gray-800",
    },
    {
      id: 5,
      text: "“Lorem ipsum dolor sit amet consectetur. Nulla eu mollis leo porttitor. Sagittis tellus dictum est ante.”",
      name: "Sochima Onah",
      position: "CEO Sochima Restaurants",
      img: myImage,
      color: "bg-gray-100 border border-gray-200", // Gray Card
      textColor: "text-gray-800",
    },
    {
      id: 6,
      text: "“Lorem ipsum dolor sit amet consectetur. Nulla eu mollis leo porttitor. Sagittis tellus dictum est ante.”",
      name: "Sochima Onah",
      position: "CEO Sochima Restaurants",
      img: myImage,
      color: "bg-gray-100 text-gray-800", // Gray Card
      textColor: "text-gray-800",
    },
  ];

  return (
    <section className="bg-gray-50 text-center py-16">
      {/* Title */}
      <h2 className="text-3xl font-bold text-gray-800">
        Why People love <span className="text-orange-500">Barmsy</span>
      </h2>
      <p className="text-gray-600 mt-2 text-sm">
        Join the growing number of customers and champions who trust Barmsy for restaurant and user management.
      </p>

      {/* Testimonials Grid */}
      <div className="mt-10 grid grid-cols-3 gap-6 max-w-6xl mx-auto">
        {testimonials.map((item) => (
          <div
            key={item.id}
            className={`p-6 rounded-lg shadow-lg flex flex-col justify-between ${item.color}`}
          >
            {/* Logo */}
            <div className={`text-left font-bold ${item.textColor}`}>{item.logo}</div>

            {/* Quote */}
            <p className={`mt-6 text-[10px] text-left leading-relaxed ${item.textColor}`}>
              {item.text}
            </p>

            {/* Profile */}
            <div className="mt-6 flex items-center justify-between">
              <div className="text-left">
                <p className={`font-bold text-[11px] mb-4 ${item.textColor}`}>{item.name}</p>
                <p className={`text-[10px] ${item.textColor}`}>{item.position}</p>
              </div>
              <img
                src={item.img}
                alt={item.name}
                className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-md"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
