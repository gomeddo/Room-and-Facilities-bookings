import clsx from "clsx"; // A utility for constructing className strings conditionally
import { useSearchParams } from "react-router-dom"; // Hook to access the URL query parameters
import Button from "../../components/button"; // Custom Button component
import Card from "../../components/card"; // Custom Card component
import Chip from "../../components/chip"; // Custom Chip component
import { Star } from "react-feather"; // Icon component for displaying a star
import { useRoomContext } from "../../context"; // Custom hook for accessing room context
import useGoMeddo from "../../hooks/useGoMeddo";
import { useEffect, useState } from "react";

// Function component for displaying booking confirmation details
function Confirmation() {
  const [searchParams, setSearchParams] = useSearchParams(); // Destructuring the setSearchParams hook from useSearchParams
  const { rooms } = useRoomContext(); // Retrieving room details and duration from the room context
  //const room = rooms.find((room) => room.id === props.id); // Getting the specific room based on the provided ID

  const reservationId = searchParams.get("confirmationId");

  const gm = useGoMeddo();
  const [reservation, setReservation] = useState(undefined);

  const room = rooms.find(
    (room) => room.id === reservation?.customProperties.get("B25__Resource__c")
  );

  useEffect(() => {
    const fetch = async () => {
      const result = await gm
        .buildReservationRequest()
        .withIds(reservationId)
        .includeAdditionalFields([
          "B25__Total_Price__c",
          "B25__Resource__c",
          "B25__Start_Date__c",
          "B25__End_Date__c",
          "Duration_in_Hours__c",
        ])
        .getResults();

      setReservation(result.getReservation(reservationId));
    };

    fetch();
  }, [gm, reservationId]);

  if (!room || !reservation) {
    return <>Loading...</>; // Display a loading message while the room data is being fetched
  }

  // Rendering the confirmation details
  return (
    <Card className="m-20 rounded-lg w-auto max-w-4xl">
      {/* Displaying room image */}
      <Card.Image
        src={room.image}
        alt={room.alt}
        className="rounded-none rounded-l-lg h-full w-2/5"
      />
      {/* Displaying confirmation details */}
      <Card.Body className="px-6 py-10 w-3/5">
        <div className="font-bold text-4xl text-center">Booking Confirmed</div>
        <div className="font-bold text-3xl text-center">Enjoy Your Stay !</div>
        <div className="bg-[#C3C2C2] bg-opacity-30 px-4 py-6 rounded-lg text-center flex flex-col gap-4">
          <div className="text-[#3E4958] text-2xl font-bold">{room.title}</div>
          {/* <div className="bg-[#DBDBFE] rounded-full p-2 font-bold w-6/12 mx-auto flex justify-center items-center"> */}
          <div className="bg-[#DBDBFE] rounded-full p-2 font-bold">
            {/* Displaying booking dates */}
            {new Date(
              reservation.customProperties.get("B25__Start_Date__c")
            ).toLocaleDateString()}{" "}
            -{" "}
            {new Date(
              reservation.customProperties.get("B25__End_Date__c")
            ).toLocaleDateString()}
          </div>
          <div className="justify-center flex items-center gap-2 text-[#444444]">
            {/* Displaying star rating */}
            <Star className="w-4 h-4 fill-current text-[#4200FF]" />
            <span className="font-bold">{room.rating}</span>
            <span className="rounded">{room.location}</span>
          </div>
          <div className="justify-center flex flex-wrap gap-2 pb-2">
            {/* Displaying room features as chips */}
            {room.features.map((feature, index) => (
              <Chip
                key={index}
                className="group-hover:bg-white transition-colors"
              >
                {feature}
              </Chip>
            ))}
          </div>
          {/* Horizontal rule for visual separation */}
          <hr className="h-0.5 border-t-0 bg-neutral-200" />
          {/* Displaying cost calculation */}
          <div className="text-m">
            Calculation: € {room.price} x{" "}
            {Math.floor(
              reservation.customProperties.get("Duration_in_Hours__c") / 24
            )}{" "}
            days
          </div>
          {/* Displaying total cost including taxes */}
          <div className="text-m font-bold">
            Total Cost (incl. Taxes): €{" "}
            {reservation.customProperties.get("B25__Total_Price__c")}
          </div>
        </div>
        {/* Button for navigating back to dashboard */}
        <div className="justify-end ml-auto">
          <Button
            onClick={() => {
              // Function to remove 'confirmationId' from URL parameters
              setSearchParams((params) => {
                params.delete("confirmationId");
                return params;
              });
            }}
          >
            Back To Dashboard
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

// Main component for the confirmation page
export default function ConfirmationPage() {
  const [searchParams] = useSearchParams(); // Retrieving search parameters from the URL
  const confirmationId = searchParams.get("confirmationId"); // Extracting 'confirmationId' from search parameters

  // Rendering the confirmation page or hiding it based on confirmationId presence
  return (
    <div
      className={clsx(
        "z-20 h-screen w-screen fixed top-0 left-0 bg-black bg-opacity-65",
        {
          hidden: confirmationId == null, // Hide the confirmation page if confirmationId is not present
        }
      )}
    >
      <div className="flex justify-center">
        {/* Rendering Confirmation component if confirmationId is present */}
        {confirmationId != null && <Confirmation id={confirmationId} />}
      </div>
    </div>
  );
}
