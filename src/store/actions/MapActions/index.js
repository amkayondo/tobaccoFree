/* eslint-disable no-global-assign */
/* eslint-disable no-multi-assign */
import { UPDATE_GEO_LOCATION, GET_USER_LOCATION } from "../../constants";
import getLocation from "../../../app/utils/map/getLocation";


export const UpdateMapLocation = (locationData) => (dispatch) => {
  console.log(locationData)
  dispatch({
    type: UPDATE_GEO_LOCATION,
    payLoad: locationData,
  });
};


export const FindMapLocation = (placeName) => dispatchEvent({
  type: GET_USER_LOCATION,
  payLoad: placeName,
});
