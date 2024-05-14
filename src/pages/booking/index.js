import { useSearchParams } from "react-router-dom"; // Importing hook for accessing URL search parameters
import Card from "../../components/card"; // Importing Card component
import Label from "../../components/label"; // Importing Label component
import Input from "../../components/input"; // Importing Input component
import Button from "../../components/button"; // Importing Button component
import clsx from "clsx"; // Importing clsx library for conditional classes
import { useRoomContext } from "../../context";
import useGoMeddo from "../../hooks/useGoMeddo";
import { Contact, Reservation } from "@gomeddo/sdk";

// Functional component for booking details
function Booking(props) {
  const { rooms } = useRoomContext();
  const [, setSearchParams] = useSearchParams(); // Getting and setting URL search parameters
  const gm = useGoMeddo();

  const room = rooms.at(props.id);
  if (!room) {
    return <>Loading...</>;
  }

  return (
    <Card className="m-20 rounded-lg w-auto max-w-4xl">
      {" "}
      {/* Styling for Card */}
      <Card.Image
        src={room.image}
        //alt={room.alt}
        className="rounded-none rounded-l-lg h-full w-2/5" // Styling for Card Image
      />
      <Card.Body className="px-6 py-10 w-3/5">
        {/* Styling for Card Body */}
        <div className="font-bold text-2xl text-center">{room.title}</div>{" "}
        {/* Displaying room title */}
        <div className="bg-[#DBDBFE] rounded-full font-bold text-center p-1">
          {/* Displaying booking dates */}
          {new Date(room.from).toLocaleDateString()} -{" "}
          {new Date(room.to).toLocaleDateString()}
        </div>
        {/* Labels and Inputs for user information */}
        <Label className="flex flex-col">
          First Name
          <Input />
        </Label>
        <Label className="flex flex-col">
          Last Name
          <Input />
        </Label>
        <Label className="flex flex-col">
          Email
          <Input />
        </Label>
        <Label className="flex flex-col">
          Phone Number
          <Input />
        </Label>
        {/* Checkbox for data permission */}
        <div className="flex gap-4 text-xs pt-2">
          <input type="checkbox" />
          <div>
            I give permission to save the data I have entered here and use this
            data to contact me. More information in our privacy statement.
          </div>
        </div>
        {/* Buttons for cancelling or confirming booking */}
        <div className="flex gap-2 justify-end">
          <Button
            variant="secondary"
            onClick={() =>
              setSearchParams((params) => {
                params.delete("bookingId"); // Deleting bookingId parameter from URL
                return params;
              })
            }
          >
            Cancel
          </Button>
          <Button
            onClick={async () => {
              /*
              The reservation is being saved but neither the lead or the contact
              seem to be showing up against the reservation
              */
              const start = new Date();
              start.setDate(start.getDate() - 1);

              const reservation = new Reservation()
                .setContact(new Contact("Test", "Test", "test@test.com"))
                .setResource(room)
                .setStartDatetime(start)
                .setEndDatetime(new Date());

              reservation.setCustomProperty(
                "B25__Reservation_Type__c",
                "a0Ubn000000xq7REAQ"
              ); // Setting reservation type to "Student Housing" using the property ID

              await gm.saveReservation(reservation);
              const response = await gm.saveReservation(reservation);
              console.log(response);

              setSearchParams((params) => {
                params.delete("bookingId"); // Deleting bookingId parameter from URL
                params.set("confirmationId", props.id); // Setting confirmationId parameter in URL
                return params;
              });
            }}
          >
            Confirm
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

// Functional component for Booking page
export default function BookingPage() {
  const [searchParams] = useSearchParams(); // Getting URL search parameters
  const bookingId = searchParams.get("bookingId"); // Getting bookingId from URL

  return (
    <div
      className={clsx(
        "z-20 h-screen w-screen fixed top-0 left-0 bg-black bg-opacity-65", // Styling for overlay background
        {
          hidden: bookingId == null, // Hiding if bookingId is null
        }
      )}
    >
      <div className="flex justify-center">
        {bookingId != null && <Booking id={bookingId} />}{" "}
        {/* Displaying Booking component if bookingId exists */}
      </div>
    </div>
  );
}
