import React, { useContext, Suspense, lazy } from 'react';
import BottomNav from '../../components/nav/BottomNav';
import "./indexStyles.css";
import reportData from '../../../data/reports';
import SplashScreen from '../shared/SplashScreen';

const TopNav = lazy(() => import('../../components/nav/TopNav'));
const TopHomeDiv = lazy(() => import("../../components/home/TopHomeDiv"));
const HomeReports = lazy(() => import('../../components/reports/HomeReports'));

export default function IndexPage() {
  return (
    <div className="dasd">
      <Suspense fallback={<SplashScreen />}>
        <TopNav pageName="Tobacco Reporter" />
        <TopHomeDiv />
        <TopNav pageName="Your Reports" />
        <div className="reptdivs_hm">
          {
          reportData.map((report) => (
            <HomeReports
              reportId={report.reportId}
              reportLocation={report.location}
              reportDate={report.reportedOn}
              reportTo={report.reportedTo}
              reportStatus={report.isActedOn}
            />
          ))
        }

        </div>
      </Suspense>
      <BottomNav />
    </div>
  );
}
