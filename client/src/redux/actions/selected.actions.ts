import { IActionSelected } from "interfaces/action.interface"

export const selectedType = (id: number): IActionSelected => {
    return {
        type: "SELECTED_TYPE",
        payload: id
    }
}

export const selectedBrand = (id: number): IActionSelected => {
    return {
        type: "SELECTED_BRAND",
        payload: id
    }
}