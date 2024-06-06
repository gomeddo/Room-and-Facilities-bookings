import clsx from "clsx"; // Importing the clsx library for conditional class names
import { twMerge } from "tailwind-merge"; // Importing the twMerge function from tailwind-merge library for merging Tailwind CSS classes

export default function Button(props) {
  // Destructuring props to extract variant and className
  const { variant = "primary", className, disabled, ...rest } = props;
  return (
    <button
      disabled={disabled}
      {...rest} // Spread operator to pass down any additional props
      className={twMerge(
        // Using twMerge to merge Tailwind CSS classes
        clsx(
          // Using clsx to conditionally generate class names
          // Base classes for the button
          "px-4 py-2 rounded-md border border-gray-300 whitespace-nowrap",
          "transition-colors", // Classes for hover effects
          "text-xs font-medium", // Additional text styles
          {
            // Conditional classes based on variant prop
            "bg-palette-primary text-white": variant === "primary", // Primary variant classes
            "bg-white text-black": variant === "secondary", // Secondary variant classes
            "hover:bg-palette-primary hover:bg-opacity-30 hover:text-black":
              !disabled, //Enabled classes
            "opacity-50": disabled, //Disabled classes
          }
        ),
        className // Additional classes passed as props
      )}
    />
  );
}
