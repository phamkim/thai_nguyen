import axios from "axios";
import { createContext, useEffect, useState } from "react";

const PostContext = createContext();

const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  const getAll = async () => {
    const config = {
      method: "GET",
      url: process.env.REACT_APP_BASE_URL + "/post",
      headers: {
        "Content-Type": "application/json",
      },
    };
    await axios(config).then((response) => {
      const _posts = response.data;
      if (_posts != null) {
        console.log(_posts);
        setPosts(_posts);
      }
    });
  };

  useEffect(() => {
    getAll();
  }, []);

  const value = { posts };
  return <PostContext.Provider value={value}>{children}</PostContext.Provider>;
};

export { PostProvider, PostContext };
