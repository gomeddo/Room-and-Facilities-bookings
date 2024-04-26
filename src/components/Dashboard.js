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
      type: "villa",
      from: "2021-10-01",
      to: "2021-10-05",
      location: "location 1",
      size: 10,
      price: 1000,
    },
    {
      title: "Full Furnished Smart Studio Apartments",
      image: room,
      alt: "product image",
      features: ["1 guests", "Heating and/or air conditioning", "Free Wi-Fi"],
      type: "flat",
      from: "2021-05-01",
      to: "2021-10-05",
      location: "location 2",
      size: 20,
      price: 2000,
    },
    {
      title: "Full Furnished Smart Studio Apartments",
      image: room,
      alt: "product image",
      features: ["2 guests", "Laundry facilities", "Free Wi-Fi"],
      type: "house",
      from: "2021-05-01",
      to: "2021-11-05",
      location: "location 3",
      size: 30,
      price: 3000,
    },
    {
      title: "Full Furnished Smart Studio Apartments",
      image: room,
      alt: "product image",
      features: ["2 guests", "Free Parking", "Free Wi-Fi"],
      type: "apartment",
      from: "2021-02-01",
      to: "2021-12-05",
      location: "location 4",
      size: 40,
      price: 4000,
    },
    {
      title: "Full Furnished Smart Studio Apartments",
      image: room,
      alt: "product image",
      features: ["4 guests", "Pool", "Free Wi-Fi", "Gym"],
      type: "villa",
      from: "2021-05-01",
      to: "2021-10-05",
      location: "location 1",
      size: 10,
      price: 1000,
    },
    // Add more card data objects as needed
  ];
  return (
    <div className="flex p-6 bg-gray-200 max-h-screen pt-10 pb-10">
      {/* Left portion taking 1/4 of the page */}
      <div className="w-1/4 bg-white shadow-lg rounded rounded-8  p-3 backdrop-blur-75 h-1/4">
        {/* Date Picker */}
        <input
          type="date"
          className="w-full mb-4 px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 relative"
        />

        <svg
          class="absolute top-1/2 right-3 transform -translate-y-1/2"
          width="20"
          height="20"
        ></svg>

        {/* Select Inputs */}
        <select className="w-full mb-4 px-3 py-2 border rounded-sm bg-gray-200  focus:outline-none focus:border-blue-500">
          <option value="">Option 1</option>
        </select>
        <select className="w-full mb-4 px-3 py-2 border rounded-sm bg-gray-200 focus:outline-none focus:border-blue-500">
          <option value="">Option 2</option>
        </select>
        <select className="w-full mb-4 px-3 py-2 border rounded-sm bg-gray-200 focus:outline-none focus:border-blue-500">
          <option value="">Option 3</option>
        </select>
        <select className="w-full mb-4 px-3 py-2 border rounded-sm bg-gray-200 focus:outline-none focus:border-blue-500">
          <option value="">Option 4</option>
        </select>
        <select className="w-full mb-4 px-3 py-2 border rounded-sm bg-gray-200 focus:outline-none focus:border-blue-500">
          <option value="">Option 5</option>
        </select>
        <select className="w-full mb-4 px-3 py-2 border rounded-sm bg-gray-200 focus:outline-none focus:border-blue-500">
          <option value="">Option 6</option>
        </select>

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