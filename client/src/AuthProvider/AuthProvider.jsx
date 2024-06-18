import React, { useState, useEffect } from "react";
import { AuthContext } from "../Context/AuthContext";
import { API, BEARER } from "../constant";
import { getToken } from "../helpers";
import axios from "axios";

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const authToken = getToken();

  const fetchLoggedInUser = async (token) => {
    setIsLoading(true);
    try {
      const response = await axios.create(`${API}/users/me`, {
        headers: {
          Authorization:
            `${BEARER} ${token}` +
            "3b315717616399174e1cbd2d61ec2b548b9968d22abd91d733ac903054adaeaf165326d5c142d959492095e0bd20221c1f132d88b9a7cdd81a81b583e258b1686f004628876ae00f1589ff38e32dd4ef741747a9ba7c5665881737c65de81b1cc7fd04f9b2a2f7d77c994fd049f83e36be67610b562724ac885c971dea04bab4",
        },
      });

      setUserData(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleUser = (user) => {
    setUserData(user);
  };

  useEffect(() => {
    if (authToken) {
      fetchLoggedInUser(authToken);
    }
  }, [authToken]);

  return (
    <AuthContext.Provider
      value={{ user: userData, setUser: handleUser, isLoading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
