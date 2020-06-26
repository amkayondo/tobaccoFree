import React, {
  Component, useState, useContext, useEffect,
} from 'react';
import '../../assets/css/auth.css';
import { Container, Avatar } from 'gestalt';
import { Link } from 'react-router-dom';
import SignInField from '../../components/auth/SignInField';

export default function SignInPage() {
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
          authStatus
          gotAnError
          checkAuthError
          updateAuthStatus
        />
      </div>
    </div>
  );
}
