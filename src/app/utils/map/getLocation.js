const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};

const success = (pos) => {
  const data = {};
  data.location = {
    latitude: pos.coords.latitude,
    longitude: pos.coords.longitude,
  };
  console.log(data)
  return data;
};

const error = (err) => {
  const data = {};
  data.error = {
    code: err.code,
    message: err.message,
  };
  return data;
};

const getLocation = navigator.geolocation.getCurrentPosition(success, error, options);

export default getLocation;
