import React, { Component } from 'react';
import "./navStyle.css";
import { Check } from 'react-feather';

export default function BottvgNav({
  locationName,
  componentMix,
}) {
  return (
    <div className="erwerwerws">
      <div className="comsptn">
        { componentMix }
      </div>
      <div className="rptjsd">
        <div className="askndal">LOCATION</div>
        <div className="msknsdf">KAWEMPE</div>
      </div>
      <div className="nsadkasd">
        <div className="rpsanifa">REPORT TO</div>
        <select name="lsjd" id="" className="dsfmas">
          <option value="KCCA">KCCA</option>
          <option value="POLICE">POLICE</option>
        </select>
      </div>
      <div className="indsfl">
        <Check className="asfnek" />
      </div>
    </div>
  );
}
