import React from 'react';
import "./reportSyltes.css";
import { ArrowUpRight } from 'react-feather';

export default function HomeReports({
  reportUrl,
  reportLocation,
  reportDate,
  reportId,
  reportTo,
  reportStatus,
}) {
  return (
    <div className="rptcvbd" key={reportId}>
      <div className="isdfni">
        <ArrowUpRight
          className="sdfsdf"
        />
      </div>
      <div className="repdtasd">
        <div className="lcton">{ reportLocation }</div>
        <div className="dtarw">{ reportDate }</div>
        <div className="retoda">{ reportTo }</div>
      </div>
      <div
        className="ksdka"
        style={{
          background: (
            reportStatus === true ? "#00ffa1" : "orange"
          ),
        }}
      >
        <div
          className="apprwd"
        >
          { reportStatus === true ? "ACTED ON" : "PENDDING" }
        </div>
      </div>
    </div>
  );
}
