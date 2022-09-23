import axios from "axios";
import { createContext, useEffect, useState } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const getAll = async () => {
    const config = {
      method: "GET",
      url: process.env.REACT_APP_BASE_URL + "/user",
      headers: {
        "Content-Type": "application/json",
      },
    };
    await axios(config).then((response) => {
      const _users = response.data;
      if (_users != null) {
        console.log(_users);
        setUsers(_users);
      }
    });
  };

  useEffect(() => {
    getAll();
  }, []);

  const value = { users };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export { UserProvider, UserContext };
