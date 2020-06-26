import React, { useState, useEffect, useContext } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SplashScreen from '../pages/shared/SplashScreen';
import IndexPage from '../pages/IndexPage/IndexPage';
import NotFoundPage from '../pages/shared/NotFoundPage';
import StatusScreen from '../pages/shared/StatusScreen';
import MoreScreen from '../pages/shared/MoreScreen';
import ReportPage from '../pages/report/ReportPage';

export default function NavSwitcher() {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          path="/"
          component={IndexPage}
          exact
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
          path="/report"
          component={ReportPage}
        />
        <Route component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  );
}
