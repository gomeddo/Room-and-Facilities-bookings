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
        "bg-palette-secondary-100 px-3 py-2 rounded-lg font-normal text-palette-gray-300",
        // Additional classes provided via className prop
        className
      )}
    />
  );
}
