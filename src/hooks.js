import useGoMeddo from "./hooks/useGoMeddo";
import { useEffect, useState } from "react";

export function useRooms(filters) {
  const gm = useGoMeddo(); // Get the GoMeddo instance
  const universityResourceId = "a0Zbn000000YISLEA4"; // University Resource ID

  const [isLoading, setIsLoading] = useState(true); // Loading state
  const [rooms, setRooms] = useState([]); // State to store the rooms data

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true); // Set loading state to true while fetching data

      // Fetch resource data from GoMeddo
      const resourceResult = await gm
        .buildResourceRequest()
        .includeAllResourcesAt(universityResourceId)
        .includeAdditionalFields([
          "Housing_Location__c",
          "B25__Description__c",
          "B25__Default_Price__c",
          "Housing_Features__c",
          "B25__Capacity__c",
          "Housing_Type__c",
          "B25__Image_Url__c",
          "Image_Url_2__c",
          "Image_Url_3__c",
          "Image_Url_4__c",
          "Housing_Rating__c",
        ])
        .getResults();

      const resourceIds = resourceResult.getResourceIds();
      const selectedResourceIds = resourceIds.slice(1, 13); // Select specific resource IDs

      // Map the selected resources to room objects
      setRooms(
        selectedResourceIds.map((resourceId) => {
          const roomInfo = resourceResult.getResource(resourceId);
          return {
            ...roomInfo,
            title: roomInfo.name,
            features: [
              `${roomInfo.customProperties.get("B25__Capacity__c")} Guest/s`,
              ...(roomInfo.customProperties
                .get("Housing_Features__c")
                ?.split(", ") ?? []),
            ],
            location: roomInfo.customProperties.get("Housing_Location__c"),
            description: roomInfo.customProperties.get("B25__Description__c"),
            price: roomInfo.customProperties.get("B25__Default_Price__c"),
            capacity: roomInfo.customProperties.get("B25__Capacity__c"),
            roomType: roomInfo.customProperties.get("Housing_Type__c"),
            image: roomInfo.customProperties.get("B25__Image_Url__c"),
            image2: roomInfo.customProperties.get("Image_Url_2__c"),
            image3: roomInfo.customProperties.get("Image_Url_3__c"),
            image4: roomInfo.customProperties.get("Image_Url_4__c"),
            rating: roomInfo.customProperties.get("Housing_Rating__c"),
          };
        })
      );

      setIsLoading(false); // Set loading state to false after fetching data
    };

    fetchData(); // Call the fetchData function when the component mounts or filters change
  }, [gm, filters]);

  // Filter the rooms based on the selected filters
  const filteredRooms = rooms
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

  return {
    rooms: rooms, // Return all rooms
    filteredRooms: filteredRooms, // Return filtered rooms
    isLoading: isLoading, // Return loading state
  };
}
