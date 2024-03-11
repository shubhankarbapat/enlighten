import React, { useEffect, useState } from "react";
import UserContext from "./UserContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    setUser(JSON.parse(window.localStorage.getItem("user")));
  }, []);

  axios.interceptors.response.use(
    function (response) {
      // any status code that lie within the range of 2XX cause this function to regiter
      return response;
    },
    function (error) {
      // any status code that falls outside the range of 2XX cause this function to trigger
      let res = error.response;
      if (res.status === 401 && res.config && !res.config.__isRetryRequest) {
        return new Promise((resolve, reject) => {
          axios
            .get(`/api/logout`)
            .then((data) => {
              // console.log("/401 error > logout");
              setUser({ user: null });
              window.localStorage.removeItem("user");
              navigate("/login");
            })
            .catch((err) => {
              console.log("AXIOS INTERCEPTORS ERR", err);
              reject(error);
            });
        });
      }
      return Promise.reject(error);
    }
  );

  // useEffect(() => {
  //   const getCsrfToken = async () => {
  //     const { data } = await axios.get("/api/csrf-token");
  //     console.log("CSRF", data);
  //     axios.defaults.headers["X-CSRF-Token"] = data.getCsrfToken;
  //   };
  //   getCsrfToken();
  // }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
