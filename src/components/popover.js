// Importing necessary modules and components from React and Radix UI
import * as React from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";

// Importing utility functions for styling
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

// Creating an alias for Popover.Root component for ease of use
const Popover = PopoverPrimitive.Root;

// Creating an alias for Popover.Trigger component for ease of use
const PopoverTrigger = PopoverPrimitive.Trigger;

// Defining PopoverContent component as a forwardRef component
const PopoverContent = React.forwardRef(
  // Destructuring props and setting default values for className, align, and sideOffset
  ({ className, align = "center", sideOffset = 4, ...props }, ref) => (
    // Wrapping the content of PopoverContent in a Portal component from Radix UI
    <PopoverPrimitive.Portal>
      {/* Rendering the Popover content */}
      <PopoverPrimitive.Content
        // Setting a ref for the Popover content
        ref={ref}
        // Specifying alignment and side offset for the Popover content
        align={align}
        sideOffset={sideOffset}
        // Applying Tailwind CSS classes and merging with any additional classes passed in
        className={twMerge(
          // Applying default Tailwind CSS classes for styling the Popover
          clsx(
            "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
            // Adding any additional classes passed in as props
            className
          )
        )}
        // Passing down any additional props to the Popover content
        {...props}
      />
    </PopoverPrimitive.Portal>
  )
);

// Setting the displayName property for PopoverContent for easier debugging
PopoverContent.displayName = PopoverPrimitive.Content.displayName;

// Exporting the Popover, PopoverTrigger, and PopoverContent components
export { Popover, PopoverTrigger, PopoverContent };
