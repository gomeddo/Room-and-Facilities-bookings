import { twMerge } from "tailwind-merge"; // Importing the twMerge function from the tailwind-merge library

export default function Chip(props) {
  // Declaring a functional component named Chip which takes props as input
  const { className, ...rest } = props; // Destructuring props to extract className, and rest of the props
  return (
    <span
      {...rest} // Spread operator to pass down any additional props to the span element
      className={twMerge(
        // Applying Tailwind CSS classes to the span element, merging existing className with Tailwind classes
        "bg-palette-secondary-100 rounded-full font-normal text-sm py-1 px-3", // Background color, rounded corners, font size, padding
        className // Custom className passed as prop
      )}
    />
  );
}
