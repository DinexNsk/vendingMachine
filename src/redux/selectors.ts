import { ItemsState } from "./items/types";
import { CurrentOperationState } from "./currentOperation/types";
import { CoinsState } from "./coins/types";

interface AppState {
    items: ItemsState,
    currentOperation: CurrentOperationState,
    coins: CoinsState,
}

export const selectors = {
    items: (state: AppState) => state.items,
    currentOperation: (state: AppState) => state.currentOperation,
    coins: (state: AppState) => state.coins,
};