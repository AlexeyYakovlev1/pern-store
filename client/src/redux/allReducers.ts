import { combineReducers } from "redux";
import user from "./reducers/user.reducer";
import products from "./reducers/product.reducer";
import selected from "./reducers/selected.reducer";
import pagination from "./reducers/pagination.reducer";
import basket from "./reducers/basket.reducer";

const allReducers = combineReducers({
    user, products, selected, pagination, basket
});

export default allReducers;