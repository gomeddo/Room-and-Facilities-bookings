import { useEffect, useState } from "react";
import {
  RESERVATION_FIELDS,
  ROOM_FIELDS,
  UNIVERSITY_RESOURCE_ID,
} from "./constants";
import useGoMeddo from "./useGoMeddo";
import { filterRooms, paresReservation, parseRoom } from "./utils";
import { useRoomContext } from "../context";

export function useRooms(filters) {
  const gm = useGoMeddo(); // Get the GoMeddo instance

  const [isLoading, setIsLoading] = useState(true); // Loading state
  const [rooms, setRooms] = useState([]); // State to store the rooms data

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true); // Set loading state to true while fetching data

      // Fetch resource data from GoMeddo
      const resourceResult = await gm
        .buildResourceRequest()
        .includeAllResourcesAt(UNIVERSITY_RESOURCE_ID)
        .includeAdditionalFields(ROOM_FIELDS)
        .getResults();

      const resourceIds = resourceResult.getResourceIds();
      const selectedResourceIds = resourceIds.slice(1, 13); // Select specific resource IDs

      // Map the selected resources to room objects
      setRooms(
        selectedResourceIds.map((resourceId) => {
          const roomInfo = resourceResult.getResource(resourceId);
          return parseRoom(roomInfo);
        })
      );

      setIsLoading(false); // Set loading state to false after fetching data
    };

    fetchData(); // Call the fetchData function when the component mounts or filters change
  }, [gm, filters]);

  // Filter the rooms based on the selected filters
  const filteredRooms = filterRooms(rooms, filters);

  return {
    rooms: rooms, // Return all rooms
    filteredRooms: filteredRooms, // Return filtered rooms
    isLoading: isLoading, // Return loading state
  };
}

export function useRoom(roomId) {
  const { rooms } = useRoomContext(); // Retrieving room details and duration from the room context
  const room = rooms.find((room) => room.id === roomId);

  return room;
}

export function useReservation(reservationId) {
  const [isLoading, setIsLoading] = useState(false);
  const [reservation, setReservation] = useState(undefined);
  const gm = useGoMeddo();

  useEffect(() => {
    const fetch = async () => {
      setIsLoading(true);

      const result = await gm
        .buildReservationRequest()
        .withIds(reservationId)
        .includeAdditionalFields(RESERVATION_FIELDS)
        .getResults();

      setReservation(paresReservation(result.getReservation(reservationId)));
      setIsLoading(false);
    };

    fetch();
  }, [gm, reservationId]);

  return { isLoading, reservation };
}
