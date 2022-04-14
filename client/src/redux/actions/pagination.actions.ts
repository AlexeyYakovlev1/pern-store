import { IActionPagination } from "interfaces/action.interface"

export const setPage = (number: number): IActionPagination => {
    return {
        type: "SET_PAGE",
        payload: number
    }
}

export const setTotalCount = (number: number): IActionPagination => {
    return {
        type: "SET_TOTAL_COUNT",
        payload: number
    }
}

export const setLimit = (number: number): IActionPagination => {
    return {
        type: "SET_LIMIT",
        payload: number
    }
}