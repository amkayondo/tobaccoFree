import React from 'react';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl';

const TrackMap = () => {
  mapboxgl.accessToken = 'pk.eyJ1Ijoia2F5b25kbyIsImEiOiJjazdnamllaTcwMGF0M25tbm8xYWZ3ZWRoIn0.2KHCrvWCY_enimfbjo844w';
  const map = new mapboxgl.Map({
    container: 'mapDiv',
    style: 'mapbox://styles/mapbox/streets-v11',
  });
};

export default TrackMap;
