import clsx from "clsx";
import { useState } from "react";

export default function Image({ src, alt, className, onClick }) {
  const [loading, setLoading] = useState(true);
  return (
    <div
      className={clsx("bg-gray-200 rounded-lg duration-300", className, {
        "animate-pulse": loading,
      })}
    >
      <img
        src={src}
        alt={alt}
        className={clsx(className, {
          "opacity-0": loading,
        })}
        onClick={onClick}
        onLoad={() => setLoading(false)}
      />
    </div>
  );
}
