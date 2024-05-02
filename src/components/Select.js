import React from "react";
import { ChevronDown } from "react-feather";

export default function Select(props) {
  const { className, ...rest } = props;
  return (
    <div className="relative">
      <select
        {...rest}
        className={`appearance-none w-full rounded-lg px-3 py-2.5 pl-3 pr-10 bg-[#EEEEEE] text-gray-700 text-sm ${className}`}
      >
        {props.children}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-violet-900">
        <ChevronDown className="h-6 w-6" />
      </div>
    </div>
  );
}
