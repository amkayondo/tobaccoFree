import { combineReducers } from "redux";
const { default: AuthReducer } = require("./AuthReducer");

const combinedReducers = combineReducers({
  auth: AuthReducer,
});

export default combinedReducers;
