import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(window.sessionStorage.getItem("token"));
  const [user, setUser] = useState(null);

  const getUser = async (id) => {
    const config = {
      method: "GET",
      url: process.env.REACT_APP_BASE_URL + "/user/" + id,
      headers: {
        "Content-Type": "application/json",
        authorization: token,
      },
    };
    await axios(config).then((response) => {
      const _user = response.data;
      if (_user != null) {
        console.log("findUserById:=>" + _user._name);
        setUser(_user);
      }
    });
  };

  const resetUser = () => {
    window.sessionStorage.setItem("token", "");
    window.sessionStorage.setItem("user_id", "");
    setUser(null);
    setToken(null);
  };

  useEffect(() => {
    const _id = window.sessionStorage.getItem("user_id");
    const _token = window.sessionStorage.getItem("token");
    if (_token !== null && _token !== "" && _token !== "null") {
      setToken(_token);
    }
    if (_id !== null && _id !== "" && _id !== "null") {
      getUser(_id);
    }
  }, []);

  const value = {
    user,
    token,
    getUser,
    setToken,
    setUser,
    resetUser,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthProvider, AuthContext };
