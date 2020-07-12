import React, { useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
import "./mapStyles.css";
import { useDispatch, useSelector } from 'react-redux';
import { useCurrentPosition } from 'react-use-geolocation';
import getLocation from '../../utils/map/getLocation';
import { UpdateMapLocation } from '../../../store/actions/MapActions';


const MapComponent = ReactMapboxGl({
  accessToken:
    'pk.eyJ1Ijoia2F5b25kbyIsImEiOiJjazdnamllaTcwMGF0M25tbm8xYWZ3ZWRoIn0.2KHCrvWCY_enimfbjo844w',
});

const mapStyle = "mapbox://styles/mapbox/streets-v9";
const deviceHeight = window.innerHeight;

export default function Map() {
  // const [getLocationData, updateLocationData] = useState([]);
  // const dispatch = useDispatch();
  // const MapData = useSelector((state) => state);
  // const [positons, error] = useCurrentPosition();
  // console.log(positons)
  // useEffect(() => dispatch(UpdateMapLocation()));
  // useEffect(() => {
  //   dispatch(UpdateMapLocation(getLocation));
  //   return () => {
  //     null;
  //   };
  // }, [null]);
  // onload(dispatch(UpdateMapLocation()));
  return (
    <div className="mptnuiefni" id="mptcmpt">
      <MapComponent
        style={mapStyle}
        containerStyle={{
          height: deviceHeight * 300,
          width: '100vw',
        }}
      >
        {' '}
        {/* { console.log(JSON.parse(MapData)) }
        { console.log(`get Location data ${getLocation}`) } */}
        <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
          <Feature coordinates={[0.3802, 32.5571]} />
        </Layer>
      </MapComponent>
    </div>
  );
}
