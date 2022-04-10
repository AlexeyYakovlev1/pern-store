import { IActionProducts } from "interfaces/action.interface";
import { IProduct } from "interfaces/product.interface";

interface IInitialState {
    list: IProduct[]
}

const SET_PRODUCTS = "SET_PRODUCTS";

const initialState: IInitialState = {
    list: [
        {
            name: "Xiaomi Redmi 9A",
            price: 9990,
            id: 1,
            img: "/30062792bb.jpg",
            brandId: 6,
            typeId: 1,
            rating: 3
        },
        {
            name: "Xiaomi Redmi Note 10S",
            price: 21990,
            id: 2,
            img: "/30059567bb.jpg",
            brandId: 6,
            typeId: 1,
            rating: 3
        },
        {
            name: "Xiaomi Redmi 9A",
            price: 9990,
            id: 3,
            img: "/phone-2.jpg",
            brandId: 6,
            typeId: 1,
            rating: 3
        },
        {
            name: "REALME 8",
            price: 21990,
            id: 4,
            img: "/phone.jpg",
            brandId: 6,
            typeId: 1,
            rating: 3
        },
        {
            name: "Lenovo IP Gaming 3 15ACH6",
            price: 79990,
            id: 5,
            img: "/1595005_v01_b.jpg",
            brandId: 1,
            typeId: 3,
            rating: 3
        },
        {
            name: "Apple MacBook Air 13.3",
            price: 145690,
            id: 6,
            img: "/1441984_v01_b.jpg",
            brandId: 3,
            typeId: 3,
            rating: 3
        },
        {
            name: "Samsung RT22HAR4DSA/WT двухкамерный",
            price: 59430,
            id: 7,
            img: "/20036154b.jpg",
            brandId: 5,
            typeId: 2,
            rating: 3
        },
        {
            name: "Samsung UE43AU7100UXRU, 43, Ultra HD 4K",
            price: 54990,
            id: 8,
            img: "/1517219_v01_b.jpg",
            brandId: 5,
            typeId: 4,
            rating: 3
        },
    ]
}

export default function products(state = initialState, action: IActionProducts) {
    switch (action.type) {
        case SET_PRODUCTS:
            return {
                ...state,
                list: state.list.concat(action.payload)
            }
        default:
            return state;
    }
}