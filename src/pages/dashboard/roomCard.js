import { Link, useSearchParams } from "react-router-dom";
import Button from "../../components/button"; // Importing Button component
import Card from "../../components/card"; // Importing Card component
import Chip from "../../components/chip"; // Importing Chip component
import { Star } from "react-feather"; // Importing Star icon from react-feather library
import resources from "../constants";

export default function RoomCard(props) {
  const [, setSearchParams] = useSearchParams(); // Using the useSearchParams hook from react-router-dom

  return (
    <Link to={`/rooms/${props.id}`} state={props}>
      {/* Link to navigate to room details */}
      <Card className="group p-2 hover:bg-palette-secondary-200 cursor-pointer transition-colors">
        {/* Image */}
        <a href="#">
          <Card.Image src={props.image} alt={props.alt} className="h-full" />
          {/* Displaying room image */}
        </a>
        {/* Product Information */}
        <Card.Body className="flex-1 pt-2">
          <h5 className="font-bold text-base tracking-tight text-gray-900 font-ubuntu">
            {props.title} {/* Displaying room title */}
          </h5>
          <div className="flex items-center gap-2 text-palette-gray-800">
            <Star className="w-4 h-4 fill-current text-palette-accent" />
            {/* Star icon */}
            <span className="text-sm font-bold">{props.rating}</span>
            {/* Rating */}
            <span className="text-sm rounded">{props.location}</span>
            {/* location */}
          </div>
          <div className="flex flex-wrap gap-2">
            <Chip className="group-hover:bg-white transition-colors">
              {props.capacity} {resources.label_guests}
            </Chip>
            <Chip className="group-hover:bg-white transition-colors">
              € {props.price} {resources.label_per_day}
            </Chip>
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
          {/* Button to book the room */}
          <Button
            variant="primary"
            className="text-sm py-2"
            onClick={(e) => {
              e.preventDefault();
              setSearchParams((params) => {
                params.set("bookingId", props.id); // Setting bookingId parameter
                return params;
              });
            }}
          >
            {resources.label_book_now}
          </Button>
        </div>
      </Card>
    </Link>
  );
}
