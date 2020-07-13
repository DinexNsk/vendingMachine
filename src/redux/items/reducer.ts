import { ItemsState, SetItemsAction, SET_ITEMS } from "./types";
import { items } from '../../utils/data';


const initialState: ItemsState = {
    data: items,
};

export const itemsReducer = (state = initialState, action: SetItemsAction): ItemsState => {
    switch (action.type) {
        case SET_ITEMS:
            return {
                data: [...action.payload]
            }
        default:
            return state;
    }
}