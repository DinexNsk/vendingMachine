export const SET_ITEMS = 'SET_ITEMS';

export type ItemType = {
    companyName: string;
    productName: string;
    cost: number;
    productId: number;
};

export type Items = ItemType[];

export type ItemsState = {
    data: Items,
};

export type SetItemsAction = {
    type: typeof SET_ITEMS,
    payload: Items,
}