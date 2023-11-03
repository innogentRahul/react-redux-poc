import { combineReducers } from "redux";
import user from "./slices/UserSlice";

const rootSlice = combineReducers({
  user
});

export default rootSlice;
