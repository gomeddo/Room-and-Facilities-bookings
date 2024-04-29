import { twMerge } from "tailwind-merge";

export default function Chip(props) {
  const { className, ...rest } = props;
  return (
    <span
      {...rest}
      className={twMerge(
        "bg-[#EAE3FF] rounded-full font-normal text-sm py-1 px-3",
        className
      )}
    />
  );
}
