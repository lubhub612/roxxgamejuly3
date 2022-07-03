import React, { useCallback, useState } from "react";
import axios from "axios";

const GlobalContext = React.createContext();

const GlobalProvider = ({ children }) => {
  const [global, setGlobal] = useState({
    serverURL: "https://api.rox.run:2083",
    // serverURL: "https://localhost:2083",
  });

  const [reloadSaleCounter, setReloadSaleCounter] = useState(0);

  const reloadSales = useCallback(() => {
    setReloadSaleCounter((t) => t + 1);
  }, [reloadSaleCounter]);

  const invokeServer = useCallback(
    async (method, route, data) => {
      if (method === "post") {
        return axios.post(global.serverURL + route, data);
      } else if (method === "get") {
        return axios.get(global.serverURL + route);
      } else if (method === "put") {
        return axios.put(global.serverURL + route, data);
      }
    },
    [global.serverURL]
  );
  const refreshPage = () => {
    window.location.reload();
  };
  return (
    <GlobalContext.Provider
      value={{
        invokeServer,
        reloadSales,
        refreshPage,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
export { GlobalProvider };
