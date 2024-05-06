import { useSearchParams } from "react-router-dom";
import Card from "../../components/card";
import { cardsData } from "../../constants";
import Label from "../../components/label";
import Input from "../../components/input";
import Button from "../../components/button";
import clsx from "clsx";

function Booking(props) {
  const [, setSearchParams] = useSearchParams();
  const room = cardsData[props.id];

  return (
    <Card className="m-20 rounded-lg w-auto max-w-4xl">
      <Card.Image
        src={room.image}
        alt={room.alt}
        className="rounded-none rounded-l-lg h-full w-2/5"
      />
      <Card.Body className="px-6 py-10 w-3/5">
        <div className="font-bold text-2xl text-center">{room.title}</div>
        <div className="bg-[#DBDBFE] rounded-full font-bold text-center p-1">
          {new Date(room.from).toLocaleDateString()} -{" "}
          {new Date(room.to).toLocaleDateString()}
        </div>
        <Label className="flex flex-col pt-1">
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
        <div className="flex gap-4 text-xs pt-2">
          <input type="checkbox" />
          <div>
            I give permission to save the data I have entered here and use this
            data to contact me. More information in our privacy statement.
          </div>
        </div>
        <div className="flex gap-2 justify-end">
          <Button
            variant="secondary"
            onClick={() =>
              setSearchParams((params) => {
                params.delete("bookingId");
                return params;
              })
            }
          >
            Cancel
          </Button>
          <Button
            onClick={() => {
              setSearchParams((params) => {
                params.delete("bookingId");
                params.set("confirmationId", props.id);
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

export default function BookingPage() {
  const [searchParams] = useSearchParams();
  const bookingId = searchParams.get("bookingId");

  return (
    <div
      className={clsx(
        "z-20 h-screen w-screen fixed top-0 left-0 bg-black bg-opacity-65",
        {
          hidden: bookingId == null,
        }
      )}
    >
      <div className="flex justify-center">
        {bookingId != null && <Booking id={bookingId} />}
      </div>
    </div>
  );
}
