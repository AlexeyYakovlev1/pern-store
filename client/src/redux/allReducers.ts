import { combineReducers } from "redux";
import user from "./reducers/user.reducer";
import products from "./reducers/product.reducer";
import selected from "./reducers/selected.reducer";

const allReducers = combineReducers({
    user, products, selected
});

export default allReducers;