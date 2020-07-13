export const SET_COINS = 'SET_COINS';

export type CoinsState = {
    data: number[],
};

export type SetCoinsAction = {
    type: typeof SET_COINS,
    coins: number[],
}