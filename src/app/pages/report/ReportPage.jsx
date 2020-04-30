import React, { Suspense, lazy } from 'react';
import BottomNav from '../../components/nav/BottomNav';
import "./reportStyles.css";
import SplashScreen from '../shared/SplashScreen';

const NavgNav = lazy(() => import('../../components/nav/NavgNav'));
const BottvgNav = lazy(() => import('../../components/nav/BottvgNav'));
const ReportMap = lazy(() => import('../../components/maps/ReportMap'));
const MapControls = lazy(() => import('../../components/maps/MapControls'));

export default function ReportPage() {
  return (
    <Suspense fallback={<SplashScreen />}>
      <NavgNav pageName="Create Report" />
      <div className="knsdalmk">
        <ReportMap />
      </div>
      <BottvgNav componentMix={<MapControls />} />
    </Suspense>
  );
}
