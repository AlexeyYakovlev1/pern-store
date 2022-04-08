import { IUser } from "./user.interface";

export interface IActionUser {
    type: string;
    payload: IUser | {};
}