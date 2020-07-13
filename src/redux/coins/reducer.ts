import { CoinsState, SetCoinsAction, SET_COINS } from "./types";
import { coins } from '../../utils/data'


const initialState: CoinsState = {
    data: coins,
};

export const coinsReducer = (state = initialState, action: SetCoinsAction): CoinsState => {
    switch (action.type) {
        case SET_COINS:
            return {
                data: [...action.coins]
            }
        default:
            return state;
    }
}