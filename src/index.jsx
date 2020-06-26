import "regenerator-runtime";
import React, { Component, Suspense, lazy } from 'react';
import { Provider } from 'react-redux';
import AuthContext from './context/AuthContext';
import SplashScreen from './app/pages/shared/SplashScreen';
import store from './store';


const NavSwitcher = lazy(() => import('./app/navigation/NavSwitcher'));

export default function index() {
  return (
    <Provider store={store}>
      <AuthContext>
        <Suspense fallback={<SplashScreen />}>
          <NavSwitcher />
        </Suspense>
      </AuthContext>
    </Provider>
  );
}
