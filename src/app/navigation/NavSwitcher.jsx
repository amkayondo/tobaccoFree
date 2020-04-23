import React, { useState, useEffect, useContext } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SplashScreen from '../pages/shared/SplashScreen';
import { MyAuthContext } from '../../context/AuthContext';
import IndexPage from '../pages/IndexPage/IndexPage';
import IndexAuthPage from '../pages/auth/IndexAuthPage';
import SignInPage from '../pages/auth/SignInPage';
import SignUpPage from '../pages/auth/SignUpPage';
import switchIndex from '../utils/auth/switchIndex';
import NotFoundPage from '../pages/shared/NotFoundPage';
import StatusScreen from '../pages/shared/StatusScreen';
import MoreScreen from '../pages/shared/MoreScreen';

export default function NavSwitcher() {
  const { authStatus } = useContext(MyAuthContext);
  return (
    <BrowserRouter>
      <Switch>
        <Route
          path="/"
          component={switchIndex(authStatus, IndexPage, IndexAuthPage)}
          exact
        />
        <Route
          path="/login"
          component={switchIndex(authStatus, NotFoundPage, SignInPage)}
        />
        <Route
          path="/status"
          component={StatusScreen}
        />
        <Route
          path="/more"
          component={MoreScreen}
        />
        <Route
          path="/home"
          component={IndexPage}
        />
        <Route
          path="/signup"
          component={switchIndex(authStatus, NotFoundPage, SignUpPage)}
        />
        <Route component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  );
}
