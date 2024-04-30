import { Link, useSearchParams } from "react-router-dom";
import star from "../../components/icons/star.svg"
import Button from "../../components/button";
import Card from "../../components/card";
import Chip from "../../components/chip";

export default function RoomCard(props) {
    const [, setSearchParams] = useSearchParams();

    return (
        <Link to={`/rooms/${props.id}`}>
            <Card className="group p-2 hover:bg-[#DBDBFE] cursor-pointer transition-colors">
                {/* Image */}
                <a href="#">
                    <Card.Image src={props.image} alt={props.alt} />
                </a>
                {/* Product Information */}
                <Card.Body className="flex-1">
                    <h5 className="font-bold text-base tracking-tight text-gray-900 font-ubuntu">
                        {props.title}
                    </h5>
                    <div className="flex items-center gap-2 text-[#444444]">
                        <img src={star} className="w-4 h-4" alt="" />
                        <span className="text-sm font-bold">4.5</span>
                        <span className="text-sm rounded">Tony Vito</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {/* Buttons */}
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
                    <Button variant="secondary">View Info</Button>
                    <Button
                        variant="primary"
                        onClick={(e) => {
                            e.preventDefault();
                            setSearchParams((params) => {
                                params.set("bookingId", props.id);
                                return params;
                            });
                        }}
                    >
                        Book Class
                    </Button>
                </div>
            </Card>
        </Link>
    );
}