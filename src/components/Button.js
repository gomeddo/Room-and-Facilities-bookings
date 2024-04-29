import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export default function Button(props) {
  const { variant = "primary", className, ...rest } = props;
  return (
    <button
      {...rest}
      className={twMerge(
        clsx(
          "px-4 py-2 rounded-md border border-gray-300 whitespace-nowrap",
          "transition-colors hover:bg-[#3A0CA3] hover:bg-opacity-30 hover:text-black",
          "text-xs font-medium",
          {
            "bg-[#3A0CA3] text-white": variant === "primary",
            "bg-white text-black": variant === "secondary",
          }
        ),
        className
      )}
    />
  );
}
