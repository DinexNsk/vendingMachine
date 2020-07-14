import {
    CurrentOperationActionTypes,
    SET_MONEY_AMOUNT,
    SET_CHANGE,
    SET_SELECTED_ITEM,
    CLEAR_CURRENT_OPERATION,
    SET_MONEY_LABEL,
    SET_PRODUCT_NUMBER_LABEL,
} from "./types";
import { ItemType } from "../items/types";

export const setMoneyAmount = (money: number): CurrentOperationActionTypes => ({
    type: SET_MONEY_AMOUNT,
    money,
});

export const setChange = (change: number): CurrentOperationActionTypes => ({
    type: SET_CHANGE,
    change,
});

export const setSelectedItem = (item: ItemType): CurrentOperationActionTypes => ({
    type: SET_SELECTED_ITEM,
    item,
});

export const clearCurrentOperation = (): CurrentOperationActionTypes => ({
    type: CLEAR_CURRENT_OPERATION,
});

export const setMoneyLabel = (text: string): CurrentOperationActionTypes => ({
    type: SET_MONEY_LABEL,
    text,
});

export const setProductNumberLabel = (text: string): CurrentOperationActionTypes => ({
    type: SET_PRODUCT_NUMBER_LABEL,
    text,
});