import { useParams, useNavigate } from "react-router-dom";
import star from "../../components/icons/star.svg";
import Chip from "../../components/chip";
import { cardsData } from "../../constants";
import X from "../../components/icons/x.svg";

export default function RoomPage() {
  const { roomId } = useParams();
  const room = cardsData[roomId];
  const navigate = useNavigate();

  const handleClose = () => {
    navigate("/"); // Navigate back to the home page or any other desired route
  };

  return (
    <div className="h-screen w-screen flex flex-row">
      <div className="bg-white w-1/3">
        <div className="h-full justify-center ml-auto flex flex-col p-20 gap-8 items-center text-center max-w-2xl">
          <div className="text-black text-6xl font-bold">{room.title}</div>
          <div className="flex flex-row gap-2 items-center text-[#444] text-2xl">
            <img src={star} className="w-8 h-8" alt="" />
            <span className="font-bold">4.5</span>
            <span className="rounded">Tony Vito</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {room.features.map((feature, index) => (
              <Chip key={index}>{feature}</Chip>
            ))}
          </div>
          <div className="text-[#595959] whitespace-pre-line">
            {room.description}
          </div>
        </div>
      </div>
      <div className="w-2/3 my-auto">
        <div className="absolute top-0 right-0 p-4" onClick={handleClose}>
          <img src={X} className="w-18 h-18" />
        </div>
        <div className="max-w-7xl p-20 h-full">
          <div className="w-full pb-8">
            <img
              src={room.image}
              alt={room.alt}
              className="rounded-lg object-cover w-full h-auto"
            />
          </div>
          <div className="flex flex-row gap-8 w-full">
            <div className="flex-1">
              <img
                src={room.image}
                alt={room.alt}
                className="rounded-lg object-cover"
              />
            </div>
            <div className="flex-1">
              <img
                src={room.image}
                alt={room.alt}
                className="rounded-lg object-cover"
              />
            </div>
            <div className="flex-1">
              <img
                src={room.image}
                alt={room.alt}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
