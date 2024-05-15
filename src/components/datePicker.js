import { Popover, PopoverTrigger, PopoverContent } from "./popover"; // Importing Popover components from local file './popover'
import { Calendar } from "./calendar"; // Importing Calendar component from local file './calendar'
import { Calendar as CalendarIcon } from "react-feather"; // Importing Calendar icon component from react-feather library

export default function DatePicker({ date, setDate }) {
  // Defining a functional component named DatePicker which takes props as input
  return (
    <Popover>
      {/* Popover component used to display a popover */}
      <PopoverTrigger>
        {/* PopoverTrigger component defines the trigger for the popover */}
        <div className="flex items-center justify-between w-full text-start bg-[#EEEEEE] px-2.5 py-2.5 rounded-lg text-[#444444] text-sm">
          {/* Container for displaying selected date range */}
          {!!date?.from ? date.from.toDateString() : "From"}{" "}
          {/* Displaying start date*/}
          {" - "} {/* Separator between start and end dates */}
          {!!date?.to ? date.to.toDateString() : "To"}{" "}
          {/* Displaying end date */}
          <CalendarIcon className="h-4.1 w-4. text-violet-900" />{" "}
          {/* Calendar icon */}
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0 bg-white">
        {" "}
        {/* Content of the popover */}
        <Calendar
          mode="range" // Mode of the calendar, set to "range" for selecting a date range
          initialFocus // Initial focus on the calendar when it appears
          selected={date} // Currently selected date range
          onSelect={setDate} // Function to update the selected date range
        />
      </PopoverContent>
    </Popover>
  );
}
