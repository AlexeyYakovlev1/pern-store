import { combineReducers } from "redux";
import user from "./reducers/user.reducer";

const allReducers = combineReducers({
    user
});

export default allReducers;