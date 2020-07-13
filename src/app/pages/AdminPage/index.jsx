import React, { useContext, Suspense, lazy } from "react";
import { MyAuthContext } from "../../../context/AuthContext";
import BottomNav from "../../components/nav/BottomNav";
import "./indexStyles.css";
import reportData from "../../../data/reports";
import SplashScreen from "../shared/SplashScreen";
const ReportCard = lazy(() => import("../../components/admin/ReportCard"));
import { Container, makeStyles } from "@material-ui/core";
const ReportCtner = lazy(() => import("../../components/admin/ReportCtner"));
import { useState } from "react";
import { useEffect } from "react";
const AdminPrimaryNav = lazy(() => import("../../components/admin/AdminNav"));

const TopNav = lazy(() => import("../../components/nav/TopNav"));
const TopHomeDiv = lazy(() => import("../../components/home/TopHomeDiv"));
const HomeReports = lazy(() => import("../../components/reports/HomeReports"));

const useStyles = makeStyles({
  ctn: {
    margin: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "93px",
  },
});

export default function IndexPage() {
  const context = useContext(MyAuthContext);
  const classes = useStyles();
  const [reportNumber, setReportNumber] = useState({ data: 0 });
  useEffect(() => setReportNumber({ data: reportData.length }));
  return (
    <div className="dasd">
      <Suspense fallback={<SplashScreen />}>
        <AdminPrimaryNav pageName="Hapana | Admin" />
        <Container class={classes.ctn}>
          <ReportCard
            reportBgColor="aquamarine"
            reportTitle="TOTAL REPORTS"
            reportNumber={reportNumber.data}
          />
          <ReportCard
            reportBgColor="rgb(0, 255, 161)"
            reportTitle="TOTAL ACTED ON REPORTS "
            reportNumber={reportData.filter((x) => x.isActedOn === true).length}
          />
          <ReportCard
            reportBgColor="orange"
            reportTitle="TOTAL PENDING REPORTS "
            reportNumber={
              reportData.filter((x) => x.isActedOn === false).length
            }
          />
        </Container>
        <ReportCtner>
          {reportData.map((report) => (
            <HomeReports
              reportId={report.reportId}
              reportLocation={report.location}
              reportDate={report.reportedOn}
              reportTo={report.reportedTo}
              reportStatus={report.isActedOn}
            />
          ))}
        </ReportCtner>
      </Suspense>
    </div>
  );
}
