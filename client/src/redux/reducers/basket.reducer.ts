import { IActionBasket } from "interfaces/action.interface";
import { IProduct } from "interfaces/product.interface";

const ADD_PRODUCT_TO_BASKET = "ADD_PRODUCT_TO_BASKET";
const REMOVE_PRODUCT_FROM_BASKET = "REMOVE_PRODUCT_FROM_BASKET";
const SET_BASKET = "SET_BASKET";

interface IDefaultState {
    list: IProduct[];
    totalPrice: number;
}

const defaultState: IDefaultState = {
    list: [],
    totalPrice: 0
}

export default function basket(state = defaultState, action: IActionBasket) {
    switch (action.type) {
        case ADD_PRODUCT_TO_BASKET:
            if (!Array.isArray(action.payload)) {
                state.list.unshift(action.payload);
                state.totalPrice += action.payload.price;
            }

            return { ...state };
        case REMOVE_PRODUCT_FROM_BASKET:
            if (!Array.isArray(action.payload)) {
                let currentProductId = null;

                state.totalPrice -= action.payload.price;

                currentProductId = state.list.findIndex((item: IProduct) => {
                    const payload: any = action.payload;

                    return item.id === payload.id;
                })

                state.list.splice(currentProductId, 1);
            }

            return { ...state };
        case SET_BASKET:
            if (Array.isArray(action.payload)) {
                for (let i = 0; i < action.payload.length; i++) {
                    state.totalPrice += action.payload[i].price;
                }
            }

            return { ...state, list: state.list.concat(action.payload) };
        default: {
            return state;
        }
    }
}