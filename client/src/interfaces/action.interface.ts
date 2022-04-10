import { IProduct } from "./product.interface";
import { IUser } from "./user.interface";

export interface IActionType {
    type: string;
}

export interface IActionUser extends IActionType {
    payload: IUser | {};
}

export interface IActionProducts extends IActionType {
    payload: IProduct[] | [];
}

export interface IActionSelected extends IActionType {
    payload: string;
}