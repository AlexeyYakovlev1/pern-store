import { IActionSelected } from "interfaces/action.interface";

const SELECTED_TYPE = "SELECTED_TYPE";
const SELECTED_BRAND = "SELECTED_BRAND";

interface IDefaultState {
    selectedType: string;
    selectedBrand: string;
}

const defaultState: IDefaultState = {
    selectedType: "",
    selectedBrand: ""
}

export default function selected(state = defaultState, action: IActionSelected) {
    switch (action.type) {
        case SELECTED_TYPE:
            return {
                ...state,
                selectedType: action.payload
            }
        case SELECTED_BRAND:
            return {
                ...state,
                selectedBrand: action.payload
            }
        default: {
            return state;
        }
    }
}