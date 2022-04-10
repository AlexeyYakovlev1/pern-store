import { IActionSelected } from "interfaces/action.interface"

export const selectedType = (name: string): IActionSelected => {
    return {
        type: "SELECTED_TYPE",
        payload: name
    }
}

export const selectedBrand = (name: string): IActionSelected => {
    return {
        type: "SELECTED_BRAND",
        payload: name
    }
}