// store.js
import { configureStore } from '@reduxjs/toolkit';
import headerReducer from "csp-header-ui/headerReducer";
import walletReducer from "csp-wallet-ui/walletReducer";
import headerMiddleware from '../middleware/headerMiddleware';

console.log(walletReducer)


const store = configureStore({
    reducer: {
        headerReducer,
        walletReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(headerMiddleware),
});

console.log(store.getState())

export default store;