import { IActionUser } from "interfaces/action.interface";
import { IUser } from "interfaces/user.interface";

const SET_USER = "SET_USER";
const LOG_OUT = "LOG_OUT";

interface IDefaultState {
    infoUser: IUser;
    isAuth: boolean;
}

const defaultState: IDefaultState = {
    infoUser: {
        email: "", password: "", id: -1,
        role: "", createdAt: new Date()
    },
    isAuth: false
}

export default function user(state = defaultState, action: IActionUser) {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                infoUser: action.payload,
                isAuth: true
            }
        case LOG_OUT:
            return {
                ...state,
                infoUser: {},
                isAuth: false
            }
        default: {
            return state;
        }
    }
}