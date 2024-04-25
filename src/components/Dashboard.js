import React from "react";
import room from "../assets/apart.jpeg";
import star from "../assets/star.jpg";

function Dashboard() {
  const cardsData = [
    {
      title: "Full Furnished Smart Studio Apartments",
      image: room,
      alt: "product image",
      features: ["2 guests", "Bicycle storage", "Free Wi-Fi"],
    },
    {
      title: "Full Furnished Smart Studio Apartments",
      image: room,
      alt: "product image",
      features: ["1 guests", "Heating and/or air conditioning", "Free Wi-Fi"],
    },
    {
      title: "Full Furnished Smart Studio Apartments",
      image: room,
      alt: "product image",
      features: ["2 guests", "Laundry facilities", "Free Wi-Fi"],
    },
    {
      title: "Full Furnished Smart Studio Apartments",
      image: room,
      alt: "product image",
      features: ["2 guests", "Free Parking", "Free Wi-Fi"],
    },
    {
      title: "Full Furnished Smart Studio Apartments",
      image: room,
      alt: "product image",
      features: ["4 guests", "Pool", "Free Wi-Fi", "Gym"],
    },
    // Add more card data objects as needed
  ];
  return (
    <div className="flex p-6 bg-gray-200 max-h-screen pt-10 pb-10">
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

        {/* Apply and Cancel Buttons */}
        <div className="flex justify-end mx-1">
          <button className="bg-blue-500 text-white p-2 rounded-md mb-2 mr-2">
            Apply
          </button>
          <button className="bg-gray-500 text-white p-2 rounded-md mb-2 mr-2">
            Cancel
          </button>
        </div>
      </div>

      {/* Right portion taking 3/4 of the page */}
      <div className="w-3/4  p-6">
        {cardsData.map((card, index) => (
          <div
            key={index}
            className="w-full mb-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex"
          >
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
                <span className="text-solid-neutral-700 text-xs font-semibold px-2.5 py-0.5 rounded dark:text-solid-neutral-700 ms-3">
                  Mercedes Vito
                </span>
              </div>
              <div className="flex items-center space-x-2 my-2 ">
                {/* Features */}
                {card.features.map((feature, index) => (
                  <span key={index} className="bg-violet-100 rounded-full p-2">
                    {feature}
                  </span>
                ))}
              </div>
            </div>

            {/* Verify Button */}
            <div className="flex flex-col justify-center m-2 items-center space-y-2">
              <button className="text-black bg-white shadow-lg px-4 py-2 rounded-lg">
                Verify
              </button>
              {/* Cancel Button */}
              <button className=" bg-blue-900 hover:bg-blue-800 text-white shadow-lg focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Cancel
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
