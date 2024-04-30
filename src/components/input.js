import { twMerge } from "tailwind-merge";

export default function Input(props) {
  const { className, ...rest } = props;
  return (
    <input
      {...rest}
      className={twMerge(
        "bg-[#EAE3FF] px-3 py-2 rounded-lg font-normal text-[#9B9B9B]",
        className
      )}
    />
  );
}