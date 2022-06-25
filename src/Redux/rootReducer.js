import { combineReducers } from "redux";
import productReducer from "./Products/productReducer";
import userReduce from "./Users/usersReducer";

const rootReducer = combineReducers({
  usersState: userReduce,
  productsState: productReducer,
});

export default rootReducer;
