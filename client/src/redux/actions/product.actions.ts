import { IActionProducts } from "interfaces/action.interface";
import { IProduct } from "interfaces/product.interface";

export function setProductsRed(products: IProduct[]): IActionProducts {
    return {
        type: "SET_PRODUCTS",
        payload: products
    }
}