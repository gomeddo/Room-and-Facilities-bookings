import clsx from "clsx";
import { useState } from "react";

// Image component definition
export default function Image({ src, alt, className, onClick }) {
  // State variable to track the loading state of the image
  const [loading, setLoading] = useState(true);

  return (
    <div
      // Applying conditional classes to the container div
      className={clsx("bg-gray-200 rounded-lg duration-300", className, {
        "animate-pulse": loading, // Add 'animate-pulse' class if loading is true
      })}
    >
      {/* Actual image element */}
      <img
        src={src} // Source URL of the image
        alt={alt} // Alternate text for the image
        className={clsx(className, {
          "opacity-0": loading, // Set opacity to 0 if image is still loading
        })}
        onClick={onClick} // Event handler for click event
        onLoad={() => setLoading(false)} // Callback function triggered when image is fully loaded
      />
    </div>
  );
}
