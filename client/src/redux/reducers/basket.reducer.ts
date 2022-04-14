import { IActionBasket } from "interfaces/action.interface";
import { IProduct } from "interfaces/product.interface";

const ADD_PRODUCT_TO_BASKET = "ADD_PRODUCT_TO_BASKET";
const REMOVE_PRODUCT_FROM_BASKET = "REMOVE_PRODUCT_FROM_BASKET";
const SET_BASKET = "SET_BASKET";

interface IDefaultState {
    list: IProduct[]
}

const defaultState: IDefaultState = {
    list: []
}

export default function basket(state = defaultState, action: IActionBasket) {
    switch (action.type) {
        case ADD_PRODUCT_TO_BASKET:
            if (!Array.isArray(action.payload)) {
                state.list.unshift(action.payload)
            }

            return { ...state };
        case REMOVE_PRODUCT_FROM_BASKET:
            if (!Array.isArray(action.payload)) {
                state.list.splice(1, action.payload.id)
            }

            return { ...state };
        case SET_BASKET:
            return {
                ...state,
                list: state.list.concat(action.payload)
            }
        default: {
            return state;
        }
    }
}