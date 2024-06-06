import React from "react";
import { ChevronDown } from "react-feather"; // Importing ChevronDown icon from react-feather library

export default function Select(props) {
  const { className, ...rest } = props; // Destructuring props to get className and other props

  return (
    <div className="relative">
      {/* Container div for relative positioning */}
      <select
        {...rest} // Spread operator to pass all other props to the select element
        className={`appearance-none w-full rounded-lg px-3 py-2.5 pl-3 pr-10 bg-palette-gray-100 text-gray-700 text-sm ${className}`} // Setting className dynamically using props
      >
        {props.children}
        {/* Rendering child elements within the select element */}
      </select>
      {/* Dropdown icon container */}
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-violet-900">
        <ChevronDown className="h-6 w-6" />
        {/* Rendering the ChevronDown icon */}
      </div>
    </div>
  );
}
