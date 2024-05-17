import { createContext, useContext, useState } from "react";
import { useRooms } from "./sdk/hooks";

// Create a context for room-related data and functions
export const RoomContext = createContext({
  isLoading: false, // Indicates if the room data is being loaded
  rooms: [], // Array to store all rooms
  filteredRooms: [], // Array to store filtered rooms based on user's preferences
  filters: {
    capacity: undefined, // Filter for room capacity
    roomType: undefined, // Filter for room type
    price: undefined, // Filter for room price
  },
  setFilters: ({ capacity, roomType, price }) => {}, // Function to update the filters
  duration: {
    from: undefined, // Start date of the booking duration
    to: undefined, // End date of the booking duration
  },
  setDuration: ({ from, to }) => {}, // Function to update the booking duration
});

// Custom hook to access the RoomContext
export function useRoomContext() {
  return useContext(RoomContext);
}

// Provider component to wrap the application and provide room data and functions
export function RoomProvider({ children }) {
  // State to store the current filters
  const [filters, setFilters] = useState({
    capacity: undefined,
    roomType: undefined,
    price: undefined,
  });

  // State to store the booking duration
  const [duration, setDuration] = useState({
    from: undefined,
    to: undefined,
  });

  // Custom hook to fetch room data based on the current filters
  const { rooms, filteredRooms, isLoading } = useRooms(filters);

  // Render the RoomContext.Provider and pass the necessary data and functions
  return (
    <RoomContext.Provider
      value={{
        isLoading: isLoading, // Indicates if the room data is being loaded
        rooms: rooms, // Array of all rooms
        filteredRooms: filteredRooms, // Array of filtered rooms based on user's preferences
        filters: filters, // Current filters applied
        setFilters: setFilters, // Function to update the filters
        duration: duration, // Current booking duration
        setDuration: setDuration, // Function to update the booking duration
      }}
    >
      {children}
    </RoomContext.Provider>
  );
}
