import React, { useState, createContext } from "react";
import { useHistory } from "react-router-dom";
import checkAuthError from "../app/utils/auth/checkAuthError";


export const MyAuthContext = createContext({});

const AuthContext = ({ children }) => {
  const [authStatus, seTauthStatus] = useState({
    authStatus: {
      token: null,
      isLoggedIn: false,
    },
  });
  const gotAnError = (errorValue) => {
    seTauthStatus({
      authStatus: {
        token: null,
        isLoggedIn: false,
        authError: errorValue,
      },
    });
  };
  const updateAuthStatus = (tokenValue, isLoggedIn) => {
    seTauthStatus({
      authStatus: {
        token: tokenValue,
        isLoggedIn,
      },
    });
    localStorage.setItem("tbAuthIsL", true);
    localStorage.setItem("tbAuthtkn",
      tokenValue);
  };
  return (
    <MyAuthContext.Provider
      value={{
        authStatus,
        updateAuthStatus,
        gotAnError,
        checkAuthError,
      }}
    >
      { children }
    </MyAuthContext.Provider>
  );
};

export default AuthContext;
