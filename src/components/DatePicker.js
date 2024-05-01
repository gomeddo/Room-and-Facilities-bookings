import { Popover, PopoverTrigger, PopoverContent } from "./popover";
import { Calendar } from "./calendar";
import { useState } from "react";

export default function DatePicker(props) {
  const [date, setDate] = useState(undefined);
  console.log(date);

  return (
    <Popover>
      <PopoverTrigger>
        <div className="w-full text-start bg-[#EEEEEE] px-3 py-2.5 rounded-lg text-[#444444] text-sm">
          {!!date?.from ? date.from.toDateString() : "From"}
          {" - "}
          {!!date?.to ? date.to.toDateString() : "To"}
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0 bg-white">
        <Calendar
          mode="range"
          initialFocus
          selected={date}
          onSelect={setDate}
        />
      </PopoverContent>
    </Popover>
  );
}
