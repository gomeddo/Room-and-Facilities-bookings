import { ChevronLeft, ChevronRight, Star, X } from "react-feather";
import { useNavigate, useParams } from "react-router-dom";
import Chip from "../../components/chip";
import { cardsData } from "../../constants";
import apart1 from "../../assets/apart_1.jpg";
import apart2 from "../../assets/apart_2.jpg";
import apart3 from "../../assets/apart_3.jpg";
import { useState } from "react";

const photos = [apart1, apart2, apart3];

export default function RoomPage() {
  const { roomId } = useParams();
  const [selectedPhoto, setSelectedPhoto] = useState(0);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const room = cardsData[roomId];
  const navigate = useNavigate();

  const handleClose = () => {
    navigate("/");
  };

  const handleImageClick = (index) => {
    setSelectedPhoto(index);
    setIsImageModalOpen(true);
  };

  const handleModalClose = () => {
    setIsImageModalOpen(false);
  };

  return (
    <div className="h-screen w-screen flex flex-row overflow-hidden">
      <div className="bg-white w-1/3">
        <div className="h-full justify-center ml-auto flex flex-col p-20 gap-8 items-center text-center max-w-2xl">
          <div className="text-black text-5xl font-bold">{room.title}</div>
          <div className="flex flex-row gap-2 items-center text-[#444] text-2xl">
            <Star className="w-7 h-7 fill-current text-[#4200FF]" />
            <span className="font-bold">4.5</span>
            <span className="rounded">Tony Vito</span>
          </div>
          <div className="flex flex-wrap gap-2 justify-center">
            {room.features.map((feature, index) => (
              <Chip key={index}>{feature}</Chip>
            ))}
          </div>
          <div className="text-[#595959] whitespace-pre-line">
            {room.description}
          </div>
          <div className="text-1xl font-bold">
            Price per night :{" "}
            {room.pricePerNight ? "Price: €" + room.pricePerNight : "€120"}
          </div>
        </div>
      </div>
      <div className="w-2/3 my-auto relative">
        <div
          className="absolute top-0 right-0 p-2 cursor-pointer hover:bg-gray-200 hover:scale-110 rounded-full m-2 transition-all"
          onClick={handleClose}
        >
          <X className="w-18 h-18" />
        </div>
        <div className="max-w-7xl p-20 h-full">
          <div className="w-full pb-8 relative">
            <ChevronLeft
              onClick={() => {
                setSelectedPhoto((state) =>
                  state === 0 ? photos.length - 1 : state - 1
                );
              }}
              className="absolute top-[calc(50%-16px)] left-4 p-2 w-8 h-8 bg-white rounded-full opacity-75 hover:opacity-100 hover:scale-105 transition-all cursor-pointer"
            />
            <ChevronRight
              onClick={() =>
                setSelectedPhoto((state) =>
                  state === photos.length - 1 ? 0 : state + 1
                )
              }
              className="absolute top-[calc(50%-16px)] right-4 p-2 w-8 h-8 bg-white rounded-full opacity-75 hover:opacity-100 hover:scale-105 transition-all cursor-pointer"
            />
            <img
              src={photos[selectedPhoto]}
              alt={room.alt}
              className="rounded-lg object-cover w-full h-auto aspect-video select-none cursor-pointer"
              onClick={() => setIsImageModalOpen(true)}
            />
          </div>
          <div className="flex flex-row gap-8 w-full">
            {photos.map((photo, index) => (
              <div
                key={index}
                className="flex-1 cursor-pointer hover:scale-105 transition-all"
                onClick={() => handleImageClick(index)}
              >
                <img
                  src={photo}
                  alt={room.alt}
                  className="rounded-lg object-cover aspect-video"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Image Modal */}
      {isImageModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex justify-center items-center">
          <div className="max-w-screen-lg w-full relative">
            <img
              src={photos[selectedPhoto]}
              alt={room.alt}
              className="rounded-lg object-contain w-full h-full cursor-pointer"
              onClick={handleModalClose}
            />
            <div
              className="absolute top-1/2 -translate-y-1/2 left-4 cursor-pointer bg-white rounded-full opacity-75 hover:opacity-100 hover:scale-105"
              onClick={() => {
                setSelectedPhoto((state) =>
                  state === 0 ? photos.length - 1 : state - 1
                );
              }}
            >
              <ChevronLeft className="w-8 h-8 text-grey " />
            </div>
            <div
              className="absolute top-1/2 -translate-y-1/2 right-4 cursor-pointer bg-white rounded-full opacity-75 hover:opacity-100 hover:scale-105"
              onClick={() =>
                setSelectedPhoto((state) =>
                  state === photos.length - 1 ? 0 : state + 1
                )
              }
            >
              <ChevronRight className="w-8 h-8 text-grey" />
            </div>
            <div
              className="absolute top-4 right-4 cursor-pointer"
              onClick={handleModalClose}
            >
              <X className="w-8 h-8 text-white" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
