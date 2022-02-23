import counterReducer from "./counter";
import goldReducer from "./gold";

import { combineReducers } from "redux";

const allReducers = combineReducers({
  health: counterReducer,
  gold: goldReducer,
});

export default allReducers;
