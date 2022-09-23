import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "./auth.provider";

const CatalogContext = createContext();
const CatalogProvider = ({ children }) => {
  const { token } = useContext(AuthContext);
  const [catalogs, setCatalogs] = useState([]);

  const getAll = async () => {
    const config = {
      method: "GET",
      url: process.env.REACT_APP_BASE_URL + "/catalog",
      headers: {
        "Content-Type": "application/json"
      },
    };

    await axios(config).then((response) => {
      const _catalogs = response.data;
      if (_catalogs != null) {
        console.log(_catalogs);
        setCatalogs(_catalogs);
      }
    });
  };

  useEffect(() => {
    getAll();
  }, []);

  const value = {
    catalogs,
  };
  return (
    <CatalogContext.Provider value={value}>{children}</CatalogContext.Provider>
  );
};

export { CatalogProvider, CatalogContext };
