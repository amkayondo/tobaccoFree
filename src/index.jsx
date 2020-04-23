import React, { Component, Suspense, lazy } from 'react';
import AuthContext from './context/AuthContext';
import SplashScreen from './app/pages/shared/SplashScreen';

const NavSwitcher = lazy(() => import('./app/navigation/NavSwitcher'));

export default function index() {
  return (
    <AuthContext>
      <Suspense fallback={<SplashScreen />}>
        <NavSwitcher />
      </Suspense>
    </AuthContext>
  );
}
