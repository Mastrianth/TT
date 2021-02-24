import { combineReducers } from "redux";
import registration from "./registrationReducer";
import modal from "./modalReducer";
import users from "./usersReducer";
import toggleIsFetchingReducer from "./toggleIsFetchingReducer";

const rootReducer = combineReducers({
  registration,
  modal,
  users,
  toggleIsFetchingReducer,
});

export default rootReducer;
