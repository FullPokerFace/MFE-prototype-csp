import { configureStore } from '@reduxjs/toolkit';
import walletReducer from '../reducers/walletReducer';

const rootReducer = {
    walletReducer
}

const store = configureStore({
    reducer: rootReducer,
});

export default store;