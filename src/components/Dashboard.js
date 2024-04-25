import React from "react";
import room from "../assets/apart.jpeg";
import star from "../assets/star.jpg";

function Dashboard() {
  const cardsData = [
    {
      title: "Full Furnished Smart Studio Apartments",
      image: room,
      alt: "product image",
      features: ["2 guests", "Free Parking", "Wifi"],
    },
    {
      title: "Full Furnished Smart Studio Apartments",
      image: room,
      alt: "product image",
      features: ["2 guests", "Free Parking", "Wifi"],
    },
    {
      title: "Full Furnished Smart Studio Apartments",
      image: room,
      alt: "product image",
      features: ["2 guests", "Free Parking", "Wifi"],
    },
    {
      title: "Full Furnished Smart Studio Apartments",
      image: room,
      alt: "product image",
      features: ["2 guests", "Free Parking", "Wifi"],
    },
    {
      title: "Full Furnished Smart Studio Apartments",
      image: room,
      alt: "product image",
      features: ["2 guests", "Free Parking", "Wifi"],
    },
    // Add more card data objects as needed
  ];
  return (
    <div className="flex p-6 bg-slate-400 max-h-screen" style={{ backgroundColor: '#EEEEEE', paddingTop: '40px', paddingBottom: '40px' }}>
      {/* Left portion taking 1/4 of the page */}
      <div className="w-1/4 bg-white shadow-lg rounded p-3">
        {/* Date Picker */}
        <input
          type="date"
          className="w-full mb-4 px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
        />

        {/* Select Inputs */}
        {[...Array(6)].map((_, index) => (
          <select
            key={index}
            className="w-full mb-4 px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          >
            <option value="">Option {index + 1}</option>
          </select>
        ))}
      </div>

      {/* Right portion taking 3/4 of the page */}
      <div className="w-3/4  p-6">
      {cardsData.map((card, index) => (
        <div key={index} className="w-full mb-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex">
          {/* Image */}
          <a href="#">
            <img
              className="p-4 rounded-lg w-72 h-52 object-cover"
              src={card.image}
              alt={card.alt}
            />
          </a>
          {/* Product Information */}
          <div className="flex flex-col  px-5 my-2 w-full">
            <h5 className="text-xl py-2 font-semibold tracking-tight text-gray-900 dark:text-white font-ubuntu text-left">
              {card.title}
            </h5>
            <div className="flex items-center py-2">
              <img src={star} className="w-6 h-6" alt="" />
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
                Mercedes Vito
              </span>
            </div>
            <div className="flex items-center space-x-2 my-2 ">
              {/* Buttons */}
              {card.features.map((feature, index) => (
                <button key={index} className="bg-slate-300 rounded-full p-2">
                  {feature}
                </button>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}

export default Dashboard;
