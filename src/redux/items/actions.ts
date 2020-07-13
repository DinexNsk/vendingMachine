import { Items, SetItemsAction, SET_ITEMS} from "./types";

export const setItems = (items: Items): SetItemsAction => ({
    type: SET_ITEMS,
    payload: items,
})