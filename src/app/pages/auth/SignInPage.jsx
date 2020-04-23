import React, {
  Component, useState, useContext, useEffect,
} from 'react';
import '../../assets/css/auth.css';
import { Container, Avatar } from 'gestalt';
import { Link } from 'react-router-dom';
import { MyAuthContext } from '../../../context/AuthContext';

export default function SignInPage() {
  const userData = {};
  const {
    authStatus, updateAuthStatus,
    userAuthAction,
  } = useContext(MyAuthContext);
  const onSubmit = (event) => {
    event.preventDefault();
  };
  const getPhoneNumber = (number) => {
    const { value } = number.target;
    userData.phoneNumber = value;
  };
  const getPinNumber = (pin) => {
    const { value } = pin.target;
    userData.pin = value;
  };
  const logInUser = () => {
    // userAuthAction("signin", {
    //   phoneNumber: 781295406,
    //   pin: 123456
    // })
    // add login user route
    // updateAuthStatus(2345);
    // console.log(Props)
  };
  return (
    <div className="brht kdfk">
      <div className="hder">
        <Link id="acd" to="/">
          <div className="bckda">Cancel</div>
        </Link>
        {

        }
        <Link id="acd" to="/signup">
          <div className="bckda lgnf gjg">Create new account</div>
        </Link>
      </div>
      <div className="kdfnlsl">
        <div className="jdsf">
          Login to continue
        </div>
        <div className="lquths">
          <form onSubmit={onSubmit} className="sgnfn_dib">
            <input
              type="number"
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              placeholder="0781295406"
              onInput={getPhoneNumber}
              name="phoneNumber"
              id="sgnfn_inpt"
            />
            <input
              type="number"
              placeholder="Pin"
              name="pin"
              onInput={getPinNumber}
              id="sgnfn_inpt"
            />
            <input
              type="submit"
              className="btnfm"
              value="Login"
              onClick={logInUser}
            />
          </form>
        </div>
      </div>
    </div>
  );
}
