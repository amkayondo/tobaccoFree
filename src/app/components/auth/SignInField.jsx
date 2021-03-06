import React, { useState } from 'react';
import { useHistory, Redirect } from 'react-router-dom';

const REACT_APP_API = "http://192.168.43.84:5000/api/v1";


const SignInField = ({
  updateAuthStatus,
  authStatus,
  gotAnError,
  checkAuthError,
}) => {
  const [phoneNumber, setphoneNumber] = useState();
  const [userPin, setuserPin] = useState();
  const history = useHistory();
  const subMitData = (e) => {
    e.preventDefault();
    fetch(`${REACT_APP_API}/auth/signin`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        phoneNumber: String(781295406),
        pin: String(123456),
        // phoneNumber: String(phoneNumber),
        // pin: String(pin),
      }),
    })
      .then((res) => res.json())
      .then((data) => checkAuthError(
        data, gotAnError(data.error),
        updateAuthStatus(data.data.token),
      ));
  };
  return (
    <div>
      <div className="kdfnlsl">
        <div className="jdsf">
          Login to continue
        </div>
        <div className="lquths">
          <form
            onSubmit={subMitData}
            className="sgnfn_dib"
          >
            <input
              type="number"
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              placeholder="0781295406"
              onChange={(e) => (
                setphoneNumber(e.target.value)
              )}
              name="phoneNumber"
              id="sgnfn_inpt"
            />
            <input
              type="number"
              placeholder="Pin"
              name="pin"
              onChange={(e) => (
                setuserPin(e.target.value)
              )}
              id="sgnfn_inpt"
            />
            <input
              type="submit"
              className="btnfm"
              value="Login"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignInField;
