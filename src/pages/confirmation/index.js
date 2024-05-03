import clsx from "clsx";
import { useSearchParams } from "react-router-dom";
import Button from "../../components/button";
import Card from "../../components/card";
import Chip from "../../components/chip";
import { cardsData } from "../../constants";
import { Star } from "react-feather";

function Confirmation(props) {
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
        <div className="font-bold text-4xl text-center">Booking Confirmed</div>
        <div className="font-bold text-3xl text-center">Enjoy Your Stay !</div>
        <div className="bg-[#C3C2C2] bg-opacity-30 px-4 py-6 rounded-lg text-center flex flex-col gap-4">
          <div className="text-[#3E4958] text-xl font-bold">{room.title}</div>
          <div className="bg-[#DBDBFE] rounded-full p-2 font-bold">
            {new Date(room.from).toLocaleDateString()} -{" "}
            {new Date(room.to).toLocaleDateString()}
          </div>
          <div className="justify-center flex items-center gap-2 text-[#444444]">
            <Star className="w-4 h-4 fill-current text-[#4200FF]" />
            <span className="font-bold">4.5</span>
            <span className="rounded">Tony Vito</span>
          </div>
          <div className="justify-center flex flex-wrap gap-2">
            {/* Buttons */}
            {room.features.map((feature, index) => (
              <Chip
                key={index}
                className="group-hover:bg-white transition-colors"
              >
                {feature}
              </Chip>
            ))}
          </div>
        </div>
        <div className="justify-end ml-auto">
          <Button
            onClick={() => {
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

export default function ConfirmationPage() {
  const [searchParams] = useSearchParams();
  const confirmationId = searchParams.get("confirmationId");

  return (
    <div
      className={clsx(
        "z-20 h-screen w-screen fixed top-0 left-0 bg-black bg-opacity-65",
        {
          hidden: confirmationId == null,
        }
      )}
    >
      <div className="flex justify-center">
        {confirmationId != null && <Confirmation id={confirmationId} />}
      </div>
    </div>
  );
}
