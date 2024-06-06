import { createContext, useContext, useState } from "react";

// Create a context to hold API-related state and functions
export const ApiContext = createContext({
  apiKey: undefined, // API key for authentication
  setApiKey: (apiKey) => {}, // Function to update the API key
  resourceId: undefined, // Resource ID for identifying resources
  setResourceId: (resourceId) => {}, // Function to update the resource ID
  reservationType: undefined, // Type of reservation
  setReservationType: (reservationType) => {}, // Function to update the reservation type
});

// Custom hook to use the ApiContext
export function useApiContext() {
  return useContext(ApiContext); // useContext hook to access context values
}

// Provider component to supply context values to its children
export function ApiProvider({ children }) {
  // State hooks to manage the API context values, initializing with environment variables
  const [apiKey, setApiKey] = useState(process.env.REACT_APP_GOMEDDO_API_KEY);
  const [resourceId, setResourceId] = useState(
    process.env.REACT_APP_UNIVERSITY_RESOURCE_ID
  );
  const [reservationType, setReservationType] = useState(
    process.env.REACT_APP_RESERVATION_TYPE_VALUE
  );

  return (
    // Provide the state values and update functions to the context
    <ApiContext.Provider
      value={{
        apiKey: apiKey, // Current API key
        setApiKey: setApiKey, // Function to update the API key
        resourceId: resourceId, // Current resource ID
        setResourceId: setResourceId, // Function to update the resource ID
        reservationType: reservationType, // Current reservation type
        setReservationType: setReservationType, // Function to update the reservation type
      }}
    >
      {children} {/* Render children components wrapped by the provider */}
    </ApiContext.Provider>
  );
}
