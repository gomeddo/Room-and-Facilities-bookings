import { createContext, useContext, useState } from "react";
import { useRooms } from "./hooks";

export const RoomContext = createContext({
  isLoading: false,
  rooms: [],
  filteredRooms: [],
  filters: {
    capacity: undefined,
    roomType: undefined,
    price: undefined,
  },
  setFilters: ({ capacity, roomType, price }) => {},
});

export function useRoomContext() {
  return useContext(RoomContext);
}

export function RoomProvider({ children }) {
  const [filters, setFilters] = useState({
    capacity: undefined,
    roomType: undefined,
    price: undefined,
  });
  const { rooms, filteredRooms, isLoading } = useRooms(filters);

  return (
    <RoomContext.Provider
      value={{
        isLoading: isLoading,
        rooms: rooms,
        filteredRooms: filteredRooms,
        filters: filters,
        setFilters: setFilters,
      }}
    >
      {children}
    </RoomContext.Provider>
  );
}
