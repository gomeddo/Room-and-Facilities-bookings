import { createContext, useContext, useState } from "react";

export const ApiContext = createContext({
  apiKey: undefined,
  setApiKey: (apiKey) => {},
});

export function useApiContext() {
  return useContext(ApiContext);
}

export function ApiProvider({ children }) {
  const [apiKey, setApiKey] = useState(process.env.REACT_APP_GOMEDDO_API_KEY);

  return (
    <ApiContext.Provider
      value={{
        apiKey: apiKey,
        setApiKey: setApiKey,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
}
