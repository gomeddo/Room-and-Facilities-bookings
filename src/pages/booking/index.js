import { useSearchParams } from "react-router-dom"; // Importing hook for accessing URL search parameters
import Card from "../../components/card"; // Importing Card component
import Label from "../../components/label"; // Importing Label component
import Input from "../../components/input"; // Importing Input component
import Button from "../../components/button"; // Importing Button component
import clsx from "clsx"; // Importing clsx library for conditional classes
import { useRoomContext } from "../../context"; // Context hook for room data
import useGoMeddo from "../../hooks/useGoMeddo"; // Custom hook for GoMeddo API
import { Contact, Reservation } from "@gomeddo/sdk"; // SDK for GoMeddo service
import { useState } from "react"; // Importing useState hook for managing form state

// Functional component for booking details
function Booking(props) {
  const { rooms, duration } = useRoomContext();
  const [, setSearchParams] = useSearchParams(); // Getting and setting URL search parameters
  const gm = useGoMeddo();

  // State variables for form fields and errors
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [dataPermission, setDataPermission] = useState(false); // State variable for data permission checkbox
  const [errors, setErrors] = useState({}); // State variable for storing error messages

  const room = rooms.at(props.id);
  if (!room) {
    return <>Loading...</>; // Display while room data is loading
  }

  const areDatesSelected = !!duration?.from && !!duration?.to; // Determine if dates are selected

  // Function to validate form fields
  const validateForm = () => {
    let formErrors = {};

    if (!firstName.trim()) {
      formErrors.firstName = "First Name is required";
    }
    if (!lastName.trim()) {
      formErrors.lastName = "Last Name is required";
    }
    if (!email.trim()) {
      formErrors.email = "Email is required";
    }
    if (!phoneNumber.trim()) {
      formErrors.phoneNumber = "Phone Number is required";
    }
    if (!dataPermission) {
      formErrors.dataPermission = "Data permission is required"; // Error message for data permission checkbox
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  return (
    <Card className="m-20 rounded-lg w-auto max-w-4xl">
      {/* Styling for Card */}
      <Card.Image
        src={room.image}
        className="rounded-none rounded-l-lg h-full w-2/5" // Styling for Card Image
      />
      {/* Styling for Card Body */}
      <Card.Body className="px-6 py-10 w-3/5">
        {/* Displaying room title */}
        <div className="font-bold text-2xl text-center">{room.title}</div>
        {/* Conditional rendering for booking duration messages */}
        <div
          className={clsx("rounded-full font-bold text-center p-1", {
            "bg-[#DBDBFE]": areDatesSelected, // Keep background if dates are selected
            "text-red-500 font-bold": !areDatesSelected, // Make text red and bold if dates are not selected
          })}
        >
          {areDatesSelected ? (
            <>
              {new Date(duration?.from).toLocaleDateString()} -{" "}
              {new Date(duration?.to).toLocaleDateString()}
            </>
          ) : (
            <> Please select your stay duration before making a booking ! </> // Display when no duration is selected
          )}
        </div>
        {/* Labels and Inputs for user information, disabled if dates not selected */}
        <Label className="flex flex-col">
          First Name
          <Input
            disabled={!areDatesSelected}
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required // Making the input required
          />
          {errors.firstName && (
            <div className="text-red-500">{errors.firstName}</div> // Display error message for first name
          )}
        </Label>
        <Label className="flex flex-col">
          Last Name
          <Input
            disabled={!areDatesSelected}
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required // Making the input required
          />
          {errors.lastName && (
            <div className="text-red-500">{errors.lastName}</div> // Display error message for last name
          )}
        </Label>
        <Label className="flex flex-col">
          Email
          <Input
            disabled={!areDatesSelected}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required // Making the input required
          />
          {errors.email && (
            <div className="text-red-500">{errors.email}</div> // Display error message for email
          )}
        </Label>
        <Label className="flex flex-col">
          Phone Number
          <Input
            disabled={!areDatesSelected}
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required // Making the input required
          />
          {errors.phoneNumber && (
            <div className="text-red-500">{errors.phoneNumber}</div> // Display error message for phone number
          )}
        </Label>
        {/* Checkbox for data permission, disabled if dates not selected */}
        <div className="flex gap-4 text-xs pt-2">
          <input
            type="checkbox"
            disabled={!areDatesSelected}
            checked={dataPermission}
            onChange={(e) => setDataPermission(e.target.checked)}
            required // Making the checkbox required
          />
          <div>
            I give permission to save the data I have entered here and use this
            data to contact me. More information in our privacy statement.
          </div>
        </div>
        {errors.dataPermission && (
          <div className="text-red-500">{errors.dataPermission}</div> // Display error message for data permission checkbox
        )}
        {/* Buttons for cancelling or confirming booking, disable Confirm if dates not selected */}
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
            disabled={!areDatesSelected}
            onClick={async () => {
              if (validateForm()) {
                // Proceed with booking if form is valid
                const reservation = new Reservation()
                  // Using user input to set contact information
                  .setContact(
                    new Contact(firstName, lastName, email, phoneNumber)
                  )
                  .setResource(room)
                  .setStartDatetime(new Date(duration.from))
                  .setEndDatetime(new Date(duration.to));

                reservation.setCustomProperty(
                  "B25__Reservation_Type__c",
                  "a0Ubn000000xq7REAQ"
                ); // Setting reservation type to "Student Housing" using the property ID

                try {
                  const response = await gm.saveReservation(reservation);
                  console.log(response);

                  setSearchParams((params) => {
                    params.delete("bookingId"); // Deleting bookingId parameter from URL
                    params.set("confirmationId", props.id); // Setting confirmationId parameter in URL
                    return params;
                  });
                } catch (error) {
                  console.error("Failed to save reservation:", error);
                }
              }
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
  const [searchParams] = useSearchParams(); // Access URL search parameters
  const bookingId = searchParams.get("bookingId"); // Retrieve bookingId from URL

  return (
    <div
      className={clsx(
        "z-20 h-screen w-screen fixed top-0 left-0 bg-black bg-opacity-65", // Styling for overlay background
        {
          hidden: bookingId == null, // Hide if there is no bookingId
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
