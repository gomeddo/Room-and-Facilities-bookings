// Room fields
export const FIELD_HOUSING_LOCATION = "Housing_Location__c"; // Location of the housing (Custom Field)
export const FIELD_HOUSING_FEATURES = "Housing_Features__c"; // Features of the housing (Custom Field)
export const FIELD_HOUSING_TYPE = "Housing_Type__c"; // Type of housing (Custom Field)
export const FIELD_HOUSING_RATING = "Housing_Rating__c"; // Rating of the housing (Custom Field)
export const FIELD_DESCRIPTION = "B25__Description__c"; // Description of the housing
export const FIELD_DEFAULT_PRICE = "B25__Default_Price__c"; // Default price of the housing
export const FIELD_CAPACITY = "B25__Capacity__c"; // Capacity of the housing
export const FIELD_IMAGE_URL = "B25__Image_Url__c"; // Image URL of the housing
export const FIELD_IMAGE_URL_2 = "Image_Url_2__c"; // Additional image URL 1 (Custom Field)
export const FIELD_IMAGE_URL_3 = "Image_Url_3__c"; // Additional image URL 2 (Custom Field)
export const FIELD_IMAGE_URL_4 = "Image_Url_4__c"; // Additional image URL 3 (Custom Field)

// Reservation fields
export const FIELD_TOTAL_PRICE = "B25__Total_Price__c"; // Total price of the reservation
export const FIELD_RESOURCE = "B25__Resource__c"; // Resource ID of the reservation
export const FIELD_START_DATE = "B25__Start_Date__c"; // Start date of the reservation
export const FIELD_END_DATE = "B25__End_Date__c"; // End date of the reservation
export const FIELD_DURATION = "Duration_in_Hours__c"; // Duration of the reservation
export const FIELD_BASE_PRICE = "B25__Base_Price__c"; // Base price of the reservation
export const FIELD_RESERVATION_TYPE = "B25__Reservation_Type__c"; // Type of reservation

// Fields to retrieve for rooms
export const ROOM_FIELDS = [
  FIELD_HOUSING_LOCATION,
  FIELD_HOUSING_FEATURES,
  FIELD_HOUSING_TYPE,
  FIELD_HOUSING_RATING,
  FIELD_DESCRIPTION,
  FIELD_DEFAULT_PRICE,
  FIELD_CAPACITY,
  FIELD_IMAGE_URL,
  FIELD_IMAGE_URL_2,
  FIELD_IMAGE_URL_3,
  FIELD_IMAGE_URL_4,
];

// Fields to retrieve for reservations
export const RESERVATION_FIELDS = [
  FIELD_TOTAL_PRICE,
  FIELD_RESOURCE,
  FIELD_START_DATE,
  FIELD_END_DATE,
  FIELD_DURATION,
];
