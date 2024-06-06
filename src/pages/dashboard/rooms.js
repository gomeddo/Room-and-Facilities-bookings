import RoomCard from "./roomCard";
import { useRoomContext } from "../../context";
import resources from "../constants";

export default function Rooms() {
  const { filteredRooms, isLoading, error } = useRoomContext();

  if (isLoading) {
    return (
      <div className="w-3/4 pl-8 py-12 flex flex-col gap-6">
        {Array.from(Array(5).keys()).map((i) => (
          <div
            key={i}
            className="h-48 bg-gray-200 w-full rounded-lg animate-pulse"
          />
        ))}
      </div>
    );
  }
  if (error) {
    return (
      <div className="w-3/4 pl-8 py-12 flex flex-col">
        <div className="text-red-500 text-lg font-bold">
          Error: Please check if your API Key is valid. <br />
          {error.name} {error.message} {error.status}
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Right portion taking 3/4 of the page */}
      <div className="w-3/4 pl-8 py-12">
        {/* Title indicating the number of homes for rent in Amsterdam */}
        <div className="text-xl text-palette-gray-500 font-semibold mb-6">
          {filteredRooms.length} {resources.label_properties_for_rent}
        </div>
        {/* Check if filteredRooms is empty */}
        {filteredRooms.length === 0 ? (
          <div className="text-center text-palette-gray-500 pt-5">
            {resources.error_properties_for_rent}
          </div>
        ) : (
          <div
            className="flex flex-col gap-6" // Styling for the container of the cards
          >
            {/* Mapping over the sliced portion of cardsData to render RoomCard components */}
            {filteredRooms.map((card, index) => (
              <RoomCard {...card} key={index} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
