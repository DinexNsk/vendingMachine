import {
    CurrentOperationState,
    SET_CHANGE,
    SET_MONEY_AMOUNT,
    SET_SELECTED_ITEM,
    CLEAR_CURRENT_OPERATION, 
    CurrentOperationActionTypes, 
    SET_MONEY_LABEL,
    SET_PRODUCT_NUMBER_LABEL
} from "./types";


const initialState: CurrentOperationState = {
    selectedItem: {},
    moneyAmount: 0,
    changeAmount: null,
    moneyLabel: 'Insert banknotes...',
    productNumberLabel: '.'
};

export const currentOperationReducer = (
    state = initialState,
    action: CurrentOperationActionTypes,
): CurrentOperationState => {
    switch (action.type) {
        case SET_MONEY_AMOUNT:
            return {
                ...state,
                moneyAmount: action.money
            }
        case SET_CHANGE:
            return {
                ...state,
                changeAmount: action.change
            }
        case SET_MONEY_LABEL:
            return {
                ...state,
                moneyLabel: action.text
            }
        case SET_PRODUCT_NUMBER_LABEL:
            return {
                ...state,
                productNumberLabel: action.text
            }
        case SET_SELECTED_ITEM:
            return {
                ...state,
                selectedItem: { ...state.selectedItem, ...action.item },
            }
        case CLEAR_CURRENT_OPERATION:
            return initialState;
        default:
            return state;
    }
}