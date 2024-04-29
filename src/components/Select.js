import { twMerge } from "tailwind-merge";

export default function Select(props) {
  const { className, ...rest } = props;
  return (
    <select
      {...rest}
      className={twMerge(
        "w-full bg-[#EEEEEE] px-3 py-2.5 rounded-lg text-[#444444] text-sm",
        className
      )}
    />
  );
}
