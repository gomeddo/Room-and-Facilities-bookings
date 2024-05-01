import { X } from "react-feather";
import { Star } from "react-feather";
import { useNavigate, useParams } from "react-router-dom";
import Chip from "../../components/chip";
import { cardsData } from "../../constants";

export default function RoomPage() {
  const { roomId } = useParams();
  const room = cardsData[roomId];
  const navigate = useNavigate();

  const handleClose = () => {
    navigate("/"); // Navigate back to the home page or any other desired route
  };

  return (
    <div className="h-screen w-screen flex flex-row overflow-hidden">
      <div className="bg-white w-1/3">
        <div className="h-full justify-center ml-auto flex flex-col p-20 gap-8 items-center text-center max-w-2xl">
          <div className="text-black text-6xl font-bold">{room.title}</div>
          <div className="flex flex-row gap-2 items-center text-[#444] text-2xl">
            <Star className="w-7 h-7 fill-current text-[#4200FF]" />
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
        <div
          className="absolute top-0 right-0 p-2 cursor-pointer hover:bg-gray-200 hover:scale-110 rounded-full m-2 transition-all"
          onClick={handleClose}
        >
          <X className="w-18 h-18" />
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
