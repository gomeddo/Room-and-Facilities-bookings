import { twMerge } from "tailwind-merge";

// Input component definition
export default function Input(props) {
  // Destructuring props to extract className and rest props
  const { className, ...rest } = props;
  return (
    // Input element with tailwind classes merged with className prop
    <input
      {...rest}
      className={twMerge(
        // Default tailwind classes for input element
        "bg-[#EAE3FF] px-3 py-2 rounded-lg font-normal text-[#9B9B9B]",
        // Additional classes provided via className prop
        className
      )}
    />
  );
}
