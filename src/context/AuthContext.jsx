import React, { createContext, useState, Component } from 'react';

const REACT_APP_API = "http://192.168.43.84:5000/api/v1";

export const MyAuthContext = createContext();

export default class AuthContext extends Component {
  constructor() {
    super();
    this.state = {
      authStatus: {
        token: null,
        isLoggedIn: true,
      },
    };
    this.updateAuthStatus = (token) => {
      this.setState({
        authStatus: {
          token,
          isLoggedIn: true,
        },
      });
      localStorage.setItem("tobaccoAuth", {
        token: this.state.authStatus.token,
        isLoggedIn: this.state.authStatus.isLoggedIn,
      });
    };
    this.userAuthAction = (actionType, userInput) => {
      const { phoneNumber, pin } = userInput;
      fetch(`${REACT_APP_API}/auth/${actionType}`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          phoneNumber,
          pin,
        }),
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
    };
  }

  render() {
    return (
      <MyAuthContext.Provider value={{
        authStatus: this.state.authStatus,
        updateAuthStatus: this.updateAuthStatus,
        userAuthAction: this.userAuthAction,
      }}
      >
        { this.props.children }
      </MyAuthContext.Provider>
    );
  }
}
