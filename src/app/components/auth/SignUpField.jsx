import React, { useState } from 'react';

const SignUpField = ({
  userAuthAction,
}) => {
  const [phoneNumber, setphoneNumber] = useState();
  const [userPin, setuserPin] = useState();
  const subMitData = (e) => {
    e.preventDefault();
    userAuthAction("signup", {
      phoneNumber,
      pin: userPin,
    });
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

export default SignUpField;
