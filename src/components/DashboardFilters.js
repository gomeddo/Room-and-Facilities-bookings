import React from "react";

function DashboardFilters() {
    return (
        <>
            {/* <!-- Left portion taking 1/4 of the page --> */}
            <div className="w-1/4 bg-white shadow-lg rounded rounded-8 p-3 backdrop-blur-75 h-1/4 sticky top-20">
                {/* <!-- Date Picker --> */}
                <input
                    type="date"
                    className="w-full mb-4 px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 relative"
                />

                <svg
                    class="absolute top-1/2 right-3 transform -translate-y-1/2"
                    width="20"
                    height="20"
                ></svg>

                {/* <!-- Select Inputs --> */}
                <select className="w-full mb-4 px-3 py-2 border rounded-sm bg-gray-200 focus:outline-none focus:border-blue-500">
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

                {/* <!-- Apply and Cancel Buttons --> */}
                <div className="flex justify-end mx-1">
                    <button className="bg-white text-black px-4 py-2 rounded-md mb-2 mr-2 border border-gray-300">
                        Cancel
                    </button>
                    <button className="rounded-md border border-gray-300 bg-violet-800 text-white px-4 py-2 mb-2 mr-2">
                        Apply
                    </button>
                </div>
            </div>

            {/* Right portion taking 3/4 of the page */}
        </>
    );
}

export default DashboardFilters;