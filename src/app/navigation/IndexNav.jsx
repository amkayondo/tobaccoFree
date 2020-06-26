import React, { useState, useEffect, useContext } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import IndexAuthPage from '../pages/auth/IndexAuthPage';
import SignInPage from '../pages/auth/SignInPage';
import SignUpPage from '../pages/auth/SignUpPage';
import NotFoundPage from '../pages/shared/NotFoundPage';

export default function NavSwitcher() {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          path="/"
          component={IndexAuthPage}
          exact
        />
        <Route
          path="/login"
          component={SignInPage}
        />
        <Route
          path="/signup"
          component={SignUpPage}
        />
        <Route component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  );
}
