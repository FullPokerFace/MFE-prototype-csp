// store.js
import { configureStore } from '@reduxjs/toolkit';
import headerMiddleware from '../middleware/headerMiddleware';

const createStore = (walletReducer) => {
    const rootReducer = {
        walletReducer,
        // Your other reducers here
    };

    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(headerMiddleware),
    });
};

export default createStore;