import React, { Component, useContext } from 'react';
import '../../assets/css/signup.css';
import { Link } from 'react-router-dom';
import { MyAuthContext } from '../../../context/AuthContext';
import SignUpField from '../../components/auth/SignUpField';

export default function SignInPage() {
  const {
    authStatus, updateAuthStatus,
    userAuthAction,
  } = useContext(MyAuthContext);
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
