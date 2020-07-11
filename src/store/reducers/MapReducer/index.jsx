const { UPDATE_GEO_LOCATION } = require("../../constants");

const initialState = {
  location: null,
};

const MapReducer = (state = initialState, action) => {
  console.log(action.payLoad)
  switch (action.type) {
    case UPDATE_GEO_LOCATION:
      return Object.assign(state, action.payLoad);
    default:
      return state;
  }
};

export default MapReducer;
