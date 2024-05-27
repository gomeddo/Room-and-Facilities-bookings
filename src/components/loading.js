import { RotateCw } from "react-feather";
import { twMerge } from "tailwind-merge";

export default function Loading({ className }) {
  return (
    <div className={twMerge("p-8", className)}>
      <div className="bg-gray-200 animate-pulse w-full h-full rounded-3xl text-gray-600 flex items-center justify-center">
        <div className="mx-auto my-auto flex gap-2">
          <RotateCw className="animate-spin" /> Loading...
        </div>
      </div>
    </div>
  );
}
