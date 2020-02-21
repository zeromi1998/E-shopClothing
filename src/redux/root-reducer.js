import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";

/// this method will create root reducer object
export default combineReducers({
  user: userReducer
});
