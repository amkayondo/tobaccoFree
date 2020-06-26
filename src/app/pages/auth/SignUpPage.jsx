import React, { Component, useContext } from 'react';
import '../../assets/css/signup.css';
import { Link } from 'react-router-dom';
import SignUpField from '../../components/auth/SignUpField';

export default function SignInPage() {
  return (
    <div className="brht kdfk">
      <div className="hder">
        <Link className="asg" to="/">
          <div className="bckda">Cancel</div>
        </Link>
        <Link className="asg" to="/login">
          <div className="bckda lgnf">Login</div>
        </Link>
      </div>
      <SignUpField userAuthAction={userAuthAction} />
    </div>
  );
}
