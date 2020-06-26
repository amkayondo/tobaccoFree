import React, { useState } from 'react';
import "./mapStyles.css";
import ReactMapGL from 'mapbox-gl';
import MapControls from './MapControls';
import Map from './Map';

export default function ReportMap() {
  const [viewport, setViewport] = useState({
    latitude: 0.3675209,
    longitude: 32.5778644,
    zoom: 10,
    width: '100vw',
    height: '100vh',
  });
  return (
    <div className="khadoijowqe">
      <ReactMapGL>
        dfdf
      </ReactMapGL>
    </div>
  );
}
