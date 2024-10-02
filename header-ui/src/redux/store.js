// store.js
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import headerReducer from '../reducers/headerReducer';

export const loadWalletReducer = () => {
    return import('csp-wallet-ui/walletReducer')
        .then(module => module.default || module);
};

const staticReducers = {
    header: headerReducer,
};

const createReducer = (asyncReducers) => {
    return combineReducers({
        ...staticReducers,
        ...asyncReducers,
    });
};

const store = configureStore({
    reducer: createReducer(),
});

store.asyncReducers = {};

store.injectReducer = (key, asyncReducer) => {
    store.asyncReducers[key] = asyncReducer;
    store.replaceReducer(createReducer(store.asyncReducers));
};

export const initializeStore = async () => {
    const walletReducer = await loadWalletReducer();
    store.injectReducer('wallet', walletReducer);
};

console.log(store.getState())

export default store;