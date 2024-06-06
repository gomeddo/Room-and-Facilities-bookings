// Importing constants related to room and reservation fields
import {
  FIELD_CAPACITY,
  FIELD_DEFAULT_PRICE,
  FIELD_DESCRIPTION,
  FIELD_DURATION,
  FIELD_END_DATE,
  FIELD_HOUSING_FEATURES,
  FIELD_HOUSING_LOCATION,
  FIELD_HOUSING_RATING,
  FIELD_HOUSING_TYPE,
  FIELD_IMAGE_URL,
  FIELD_IMAGE_URL_2,
  FIELD_IMAGE_URL_3,
  FIELD_IMAGE_URL_4,
  FIELD_RESOURCE,
  FIELD_START_DATE,
  FIELD_TOTAL_PRICE,
} from "./constants";

// Function to parse room information
export function parseRoom(roomInfo) {
  return {
    ...roomInfo, // Spread operator to copy all properties from roomInfo
    title: roomInfo.name, // Assigning 'name' property of roomInfo to 'title'
    features:
      roomInfo.customProperties.get(FIELD_HOUSING_FEATURES)?.split(", ") ?? [], // Extracting and splitting features from custom properties
    location: roomInfo.customProperties.get(FIELD_HOUSING_LOCATION), // Extracting location from custom properties
    description: roomInfo.customProperties.get(FIELD_DESCRIPTION), // Extracting description from custom properties
    price: roomInfo.customProperties.get(FIELD_DEFAULT_PRICE), // Extracting price from custom properties
    capacity: roomInfo.customProperties.get(FIELD_CAPACITY), // Extracting capacity from custom properties
    roomType: roomInfo.customProperties.get(FIELD_HOUSING_TYPE), // Extracting room type from custom properties
    image: roomInfo.customProperties.get(FIELD_IMAGE_URL), // Extracting image URL from custom properties
    image2: roomInfo.customProperties.get(FIELD_IMAGE_URL_2), // Extracting second image URL from custom properties
    image3: roomInfo.customProperties.get(FIELD_IMAGE_URL_3), // Extracting third image URL from custom properties
    image4: roomInfo.customProperties.get(FIELD_IMAGE_URL_4), // Extracting fourth image URL from custom properties
    rating: roomInfo.customProperties.get(FIELD_HOUSING_RATING), // Extracting rating from custom properties
  };
}

// Function to filter rooms based on provided filters
export function filterRooms(rooms, filters) {
  let filteredRooms = rooms; // Initialize filteredRooms with all rooms

  if (filters.price != null) {
    // Filtering by price range
    // The +50 is the range of price that the filters are based on eg 50 -> 100
    filteredRooms = filteredRooms.filter(
      (room) => room.price >= filters.price && room.price < filters.price + 50
    );
  }

  if (filters.capacity != null) {
    // Filtering by capacity
    filteredRooms = filteredRooms.filter(
      (room) => room.capacity === filters.capacity
    );
  }

  if (filters.roomType != null) {
    // Filtering by room type
    filteredRooms = filteredRooms.filter(
      (room) => room.roomType === filters.roomType
    );
  }

  return filteredRooms; // Return the filtered list of rooms
}

// Function to parse reservation information
export function parseReservations(reservation) {
  return {
    ...reservation, // Spread operator to copy all properties from reservation
    totalPrice: reservation.customProperties.get(FIELD_TOTAL_PRICE), // Extracting total price from custom properties
    resourceId: reservation.customProperties.get(FIELD_RESOURCE), // Extracting resource ID from custom properties
    startDate: reservation.customProperties.get(FIELD_START_DATE), // Extracting start date from custom properties
    endDate: reservation.customProperties.get(FIELD_END_DATE), // Extracting end date from custom properties
    duration: reservation.customProperties.get(FIELD_DURATION), // Extracting duration from custom properties
  };
}
