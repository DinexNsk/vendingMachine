import { combineReducers, createStore, compose } from 'redux'

import { itemsReducer } from './items/reducer';
import { currentOperationReducer } from './currentOperation/reducer';
import { coinsReducer } from './coins/reducer';

const rootReducer = combineReducers({
    items: itemsReducer,
    currentOperation: currentOperationReducer,
    coins: coinsReducer,
});

declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer,composeEnhancers());