import { combineReducers } from 'redux';
import MapReducer from './MapReducer';

const AllReuducers = combineReducers({
  MapState: MapReducer,
});

export default AllReuducers;
