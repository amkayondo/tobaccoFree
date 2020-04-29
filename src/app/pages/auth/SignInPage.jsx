import React, {
  Component, useState, useContext, useEffect,
} from 'react';
import '../../assets/css/auth.css';
import { Container, Avatar } from 'gestalt';
import { Link } from 'react-router-dom';
import { MyAuthContext } from '../../../context/AuthContext';
import SignInField from '../../components/auth/SignInField';

export default function SignInPage() {
  const {
    authStatus, updateAuthStatus,
    gotAnError,
    checkAuthError,
  } = useContext(MyAuthContext);
  return (
    <div className="brht kdfk">
      <div className="hder">
        <Link id="acd" to="/">
          <div className="bckda">Cancel</div>
        </Link>
        <Link id="acd" to="/signup">
          <div className="bckda lgnf gjg">Create new account</div>
        </Link>
        <SignInField
          authStatus={authStatus}
          gotAnError={gotAnError}
          checkAuthError={checkAuthError}
          updateAuthStatus={updateAuthStatus}
        />
      </div>
    </div>
  );
}
