import { createContext, useContext, useState } from "react";

export const ApiContext = createContext({
  apiKey: undefined,
  setApiKey: (apiKey) => {},
  resourceId: undefined,
  setResourceId: (resourceId) => {},
  resourceType: undefined,
  setResourceType: (resourceType) => {},
});

export function useApiContext() {
  return useContext(ApiContext);
}

export function ApiProvider({ children }) {
  const [apiKey, setApiKey] = useState(process.env.REACT_APP_GOMEDDO_API_KEY);
  const [resourceId, setResourceId] = useState(
    process.env.REACT_APP_UNIVERSITY_RESOURCE_ID
  );
  const [resourceType, setResourceType] = useState(
    process.env.REACT_APP_RESERVATION_TYPE_VALUE
  );

  return (
    <ApiContext.Provider
      value={{
        apiKey: apiKey,
        setApiKey: setApiKey,
        resourceId: resourceId,
        setResourceId: setResourceId,
        resourceType: resourceType,
        setResourceType: setResourceType,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
}
