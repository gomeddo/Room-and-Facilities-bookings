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

export function parseRoom(roomInfo) {
  return {
    ...roomInfo,
    title: roomInfo.name,
    features:
      roomInfo.customProperties.get(FIELD_HOUSING_FEATURES)?.split(", ") ?? [],
    location: roomInfo.customProperties.get(FIELD_HOUSING_LOCATION),
    description: roomInfo.customProperties.get(FIELD_DESCRIPTION),
    price: roomInfo.customProperties.get(FIELD_DEFAULT_PRICE),
    capacity: roomInfo.customProperties.get(FIELD_CAPACITY),
    roomType: roomInfo.customProperties.get(FIELD_HOUSING_TYPE),
    image: roomInfo.customProperties.get(FIELD_IMAGE_URL),
    image2: roomInfo.customProperties.get(FIELD_IMAGE_URL_2),
    image3: roomInfo.customProperties.get(FIELD_IMAGE_URL_3),
    image4: roomInfo.customProperties.get(FIELD_IMAGE_URL_4),
    rating: roomInfo.customProperties.get(FIELD_HOUSING_RATING),
  };
}

export function filterRooms(rooms, filters) {
  return rooms
    .filter((room) =>
      !!filters.price
        ? room.price >= filters.price && room.price < filters.price + 50
        : true
    )
    .filter((room) =>
      !!filters.capacity ? room.capacity === filters.capacity : true
    )
    .filter((room) =>
      !!filters.roomType ? room.roomType === filters.roomType : true
    );
}

export function paresReservation(reservation) {
  console.log(reservation);
  return {
    ...reservation,
    totalPrice: reservation.customProperties.get(FIELD_TOTAL_PRICE),
    resourceId: reservation.customProperties.get(FIELD_RESOURCE),
    startDate: reservation.customProperties.get(FIELD_START_DATE),
    endDate: reservation.customProperties.get(FIELD_END_DATE),
    duration: reservation.customProperties.get(FIELD_DURATION),
  };
}
