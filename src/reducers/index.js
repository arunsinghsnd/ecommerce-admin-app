import { combineReducers } from "redux";
import authReducers from "./auth.reducers";

const rootreducers = combineReducers({
  auth: authReducers,
});

export default rootreducers;
