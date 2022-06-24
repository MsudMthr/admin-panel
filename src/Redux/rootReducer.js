import { combineReducers } from "redux";
import userReduce from "./Users/usersReducer";

const rootReducer = combineReducers({
  usersState: userReduce,
});

export default rootReducer;
