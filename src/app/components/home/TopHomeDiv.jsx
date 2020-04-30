import React from 'react';
import "./home.css";
import { useHistory } from 'react-router-dom';

const TopHomeDiv = () => {
  const history = useHistory();
  return (
    <div className="tphmdv">
      <div className="inrtpfv">
        <div className="tprepts">
          <div className="tnrps">TOTAL REPORTS</div>
          <div className="trpnbrs">175,454</div>
        </div>
        <div className="reptbndv">
          <button
            onClick={() => history.push("report")}
            type="button"
            className="rptbtn_xc"
          >
            REPORT
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopHomeDiv;
