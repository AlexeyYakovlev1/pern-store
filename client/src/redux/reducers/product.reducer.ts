import { IActionProducts } from "interfaces/action.interface";
import { IProduct } from "interfaces/product.interface";

interface IInitialState {
    list: IProduct[]
}

const SET_PRODUCTS = "SET_PRODUCTS";

const initialState: IInitialState = {
    list: []
}

export default function products(state = initialState, action: IActionProducts) {
    switch (action.type) {
        case SET_PRODUCTS:
            return {
                ...state,
                list: action.payload
            }
        default:
            return state;
    }
}