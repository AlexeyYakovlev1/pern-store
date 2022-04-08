import { IActionUser } from "interfaces/action.interface";
import { IUser } from "interfaces/user.interface";

export function setUserRed(user: IUser): IActionUser {
    return {
        type: "SET_USER",
        payload: user
    }
}

export function logOut(user: {}): IActionUser {
    return {
        type: "SET_USER",
        payload: user
    }
}