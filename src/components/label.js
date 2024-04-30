import { twMerge } from "tailwind-merge";

export default function Label(props) {
  const { className, ...rest } = props;
  return (
    <label
      {...rest}
      className={twMerge("flex flex-col gap-1 font-bold text-sm", className)}
    />
  );
}