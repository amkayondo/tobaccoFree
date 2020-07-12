import React, { useContext, Suspense, lazy } from "react";
import { MyAuthContext } from "../../../context/AuthContext";
import BottomNav from "../../components/nav/BottomNav";
import "./indexStyles.css";
import reportData from "../../../data/reports";
import SplashScreen from "../shared/SplashScreen";
import ReportCard from "../../components/admin/ReportCard";
import { Container, makeStyles } from "@material-ui/core";
const AdminPrimaryNav = lazy(() => import("../../components/admin/AdminNav"));

const TopNav = lazy(() => import("../../components/nav/TopNav"));
const TopHomeDiv = lazy(() => import("../../components/home/TopHomeDiv"));
const HomeReports = lazy(() => import("../../components/reports/HomeReports"));

const useStyles = makeStyles({
  ctn: {
    margin: "auto",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function IndexPage() {
  const context = useContext(MyAuthContext);
  const classes = useStyles();
  return (
    <div className="dasd">
      <Suspense fallback={<SplashScreen />}>
        <AdminPrimaryNav pageName="Hapana | Admin" />
        <Container class={classes.ctn}>
          <ReportCard />
        </Container>
      </Suspense>
    </div>
  );
}
