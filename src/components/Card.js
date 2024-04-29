import { twMerge } from "tailwind-merge";

function CardImage(props) {
  const { className, ...rest } = props;
  return (
    <img
      {...rest}
      className={twMerge(
        "rounded-lg overflow-hidden",
        "object-cover w-60 h-40",
        className
      )}
    />
  );
}

function CardBody(props) {
  const { className, ...rest } = props;
  return (
    <div
      {...rest}
      className={twMerge("flex flex-col gap-4 px-12 justify-center", className)}
    />
  );
}

function Card(props) {
  const { className, ...rest } = props;
  return (
    <div
      {...rest}
      className={twMerge(
        "w-full flex",
        "bg-white border border-gray-200 rounded-lg shadow-md",
        className
      )}
    />
  );
}

Card.Body = CardBody;
Card.Image = CardImage;

export default Card;
