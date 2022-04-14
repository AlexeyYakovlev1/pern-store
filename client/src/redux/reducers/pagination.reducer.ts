import { IActionPagination } from "interfaces/action.interface";

const SET_PAGE = "SET_PAGE";
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT";
const SET_LIMIT = "SET_LIMIT";

interface IDefaultState {
    page: number;
    totalCount: number;
    limit: number;
}

const defaultState: IDefaultState = {
    page: 1,
    totalCount: 0,
    limit: 3
}

export default function pagination(state = defaultState, action: IActionPagination) {
    switch (action.type) {
        case SET_PAGE:
            return {
                ...state,
                page: action.payload
            }
        case SET_TOTAL_COUNT:
            return {
                ...state,
                totalCount: action.payload
            }
        case SET_LIMIT:
            return {
                ...state,
                limit: action.payload
            }
        default: {
            return state;
        }
    }
}