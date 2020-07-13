import { SetCoinsAction, SET_COINS } from "./types";

export const setCoins = (coins: number[]): SetCoinsAction => ({
    type: SET_COINS,
    coins,
})