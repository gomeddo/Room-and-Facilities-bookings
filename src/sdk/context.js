import { createContext, useContext, useState } from "react";

export const ApiContext = createContext({
  apiKey: undefined,
  setApiKey: (apiKey) => {},
  resourceId: undefined,
  setResourceId: (resourceId) => {},
  reservationType: undefined,
  setReservationType: (reservationType) => {},
});

export function useApiContext() {
  return useContext(ApiContext);
}

export function ApiProvider({ children }) {
  const [apiKey, setApiKey] = useState(process.env.REACT_APP_GOMEDDO_API_KEY);
  const [resourceId, setResourceId] = useState(
    process.env.REACT_APP_UNIVERSITY_RESOURCE_ID
  );
  const [reservationType, setReservationType] = useState(
    process.env.REACT_APP_RESERVATION_TYPE_VALUE
  );

  return (
    <ApiContext.Provider
      value={{
        apiKey: apiKey,
        setApiKey: setApiKey,
        resourceId: resourceId,
        setResourceId: setResourceId,
        reservationType: reservationType,
        setReservationType: setReservationType,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
}
