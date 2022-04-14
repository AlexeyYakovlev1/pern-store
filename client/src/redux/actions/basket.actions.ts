import { IActionBasket } from "interfaces/action.interface"
import { IProduct } from "interfaces/product.interface"

export const addProductToBasket = (product: IProduct): IActionBasket => {
    return {
        type: "ADD_PRODUCT_TO_BASKET",
        payload: product
    }
}

export const removeProductFromBasket = (product: IProduct): IActionBasket => {
    return {
        type: "REMOVE_PRODUCT_FROM_BASKET",
        payload: product
    }
}

export const setBasket = (products: IProduct[]): IActionBasket => {
    return {
        type: "SET_BASKET",
        payload: products
    }
}