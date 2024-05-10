import { Link, useSearchParams } from "react-router-dom";
import Button from "../../components/button"; // Importing Button component
import Card from "../../components/card"; // Importing Card component
import Chip from "../../components/chip"; // Importing Chip component
import { Star } from "react-feather"; // Importing Star icon from react-feather library

export default function RoomCard(props) {
  const [, setSearchParams] = useSearchParams(); // Using the useSearchParams hook from react-router-dom

  return (
    <Link to={`/rooms/${props.id}`} state={props}>
      {" "}
      {/* Link to navigate to room details */}
      <Card className="group p-2 hover:bg-[#DBDBFE] cursor-pointer transition-colors">
        {/* Image */}
        <a href="#">
          <Card.Image src={props.image} alt={props.alt} />{" "}
          {/* Displaying room image */}
        </a>
        {/* Product Information */}
        <Card.Body className="flex-1 pt-2">
          <h5 className="font-bold text-base tracking-tight text-gray-900 font-ubuntu">
            {props.title} {/* Displaying room title */}
          </h5>
          <div className="flex items-center gap-2 text-[#444444]">
            <Star className="w-4 h-4 fill-current text-[#4200FF]" />{" "}
            {/* Star icon */}
            <span className="text-sm font-bold">{props.rating}</span>{" "}
            {/* Rating */}
            <span className="text-sm rounded">{props.location}</span>{" "}
            {/* location */}
          </div>
          <div className="flex flex-wrap gap-2">
            {/* Displaying room features */}
            {props.features.map((feature, index) => (
              <Chip
                key={index}
                className="group-hover:bg-white transition-colors"
              >
                {feature}
              </Chip>
            ))}
          </div>
        </Card.Body>

        {/* Verify Button */}
        <div className="flex flex-col justify-center gap-4 px-4">
          {/* Button to view room info */}
          <Button variant="secondary">View Info</Button>
          {/* Button to book the room */}
          <Button
            variant="primary"
            onClick={(e) => {
              e.preventDefault();
              setSearchParams((params) => {
                params.set("bookingId", props.id); // Setting bookingId parameter
                return params;
              });
            }}
          >
            Book Now
          </Button>
        </div>
      </Card>
    </Link>
  );
}
