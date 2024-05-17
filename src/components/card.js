import { twMerge } from "tailwind-merge"; // Importing the twMerge function from the tailwind-merge library

// CardImage component: Renders an image with Tailwind CSS styling
function CardImage(props) {
  const { className, ...rest } = props; // Destructuring props to extract className, and rest of the props
  return (
    <img
      {...rest} // Spread operator to pass down any additional props to the img element
      className={twMerge(
        // Applying Tailwind CSS classes to the img element, merging existing className with Tailwind classes
        "rounded-lg overflow-hidden", // Styling for rounded corners and overflow behavior
        "object-cover w-60 h-40", // Styling for image size and object fit
        className // Custom className passed as prop
      )}
    />
  );
}

// CardBody component: Renders a div for the body of the card with Tailwind CSS styling
function CardBody(props) {
  const { className, ...rest } = props; // Destructuring props to extract className, and rest of the props
  return (
    <div
      {...rest} // Spread operator to pass down any additional props to the div element
      className={twMerge(
        // Applying Tailwind CSS classes to the div element, merging existing className with Tailwind classes
        "flex flex-col gap-4 p-4 justify-center", // Styling for flex layout, padding, and vertical alignment
        className
      )}
    />
  );
}

// Card component: Renders a div for the card with Tailwind CSS styling
function Card(props) {
  const { className, ...rest } = props; // Destructuring props to extract className, and rest of the props
  return (
    <div
      {...rest} // Spread operator to pass down any additional props to the div element
      className={twMerge(
        // Applying Tailwind CSS classes to the div element, merging existing className with Tailwind classes
        "w-full flex", // Styling for full width and flex layout
        "bg-white border border-gray-200 rounded-lg shadow-md", // Styling for background color, border, rounded corners, and shadow
        className
      )}
    />
  );
}

// Assigning CardBody and CardImage components as properties of the Card component for easy access
Card.Body = CardBody;
Card.Image = CardImage;

export default Card; // Exporting the Card component as default
