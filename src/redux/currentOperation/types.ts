import { ItemType } from "../items/types";

export const SET_MONEY_AMOUNT = 'SET_MONEY_AMOUNT';
export const SET_SELECTED_ITEM = 'SET_SELECTED_ITEM';
export const SET_CHANGE = 'SET_CHANGE';
export const CLEAR_CURRENT_OPERATION = 'CLEAR_CURRENT_OPERATION';
export const SET_MONEY_LABEL = 'SET_MONEY_LABEL';
export const SET_PRODUCT_NUMBER_LABEL = 'SET_PRODUCT_NUMBER_LABEL';

export type SetMoneyAmountAction = {
    type: typeof SET_MONEY_AMOUNT,
    money: number,
};

export type SetSelectedItemAction = {
    type: typeof SET_SELECTED_ITEM,
    item: ItemType,
};

export type SetChangeAction = {
    type: typeof SET_CHANGE,
    change: number,
};

export type ClearCurrentOperationAction = {
    type: typeof CLEAR_CURRENT_OPERATION,
};


export type SetMoneyLabel = {
    type: typeof SET_MONEY_LABEL,
    text: string,

};

export type SetProductNumberLabel = {
    type: typeof SET_PRODUCT_NUMBER_LABEL,
    text: string,
};


export type CurrentOperationState = {
    selectedItem: Partial<ItemType>,
    moneyAmount: number,
    changeAmount: number | null,
    moneyLabel: string,
    productNumberLabel: string,
};

export type CurrentOperationActionTypes = SetMoneyAmountAction | SetSelectedItemAction |
    SetChangeAction | ClearCurrentOperationAction | SetMoneyLabel | SetProductNumberLabel;