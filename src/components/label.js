import { twMerge } from "tailwind-merge"; // Importing the twMerge function from the "tailwind-merge" package

// Defining a functional component named Label, which takes props as input
export default function Label(props) {
  // Destructuring props to extract className and other props
  const { className, ...rest } = props;

  return (
    <label
      // Passing down any other props not explicitly destructured
      {...rest}
      // Merging tailwind classes with the provided className using twMerge function
      // This allows adding tailwind classes from the component's props
      className={twMerge("flex flex-col gap-1 font-bold text-sm", className)}
    />
  );
}
