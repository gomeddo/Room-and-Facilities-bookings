import { Popover, PopoverTrigger, PopoverContent } from "./popover";
import { Calendar } from "./calendar";
import { useState } from "react";
import { Calendar as CalendarIcon } from "react-feather";

export default function DatePicker(props) {
  const [date, setDate] = useState(undefined);

  return (
    <Popover>
      <PopoverTrigger>
        <div className="flex items-center justify-between w-full text-start bg-[#EEEEEE] px-2.5 py-2.5 rounded-lg text-[#444444] text-sm">
          {!!date?.from ? date.from.toDateString() : "From"}
          {" - "}
          {!!date?.to ? date.to.toDateString() : "To"}
          <CalendarIcon className="h-4.1 w-4. text-violet-900" />
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
