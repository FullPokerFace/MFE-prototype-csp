import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Wallet from './components/Wallet';
import store from './redux/store';
import walletActions from './actions/walletActions';
import walletReducer from './reducers/walletReducer';

// const walletUI = {
//     Wallet: Wallet,
//     ReduxWallet: ReduxWallet,
//     walletActions,
//     walletReducer,
//     COMPANY: "ESCSP",
// };

// if (typeof window !== 'undefined') {
//     window.walletUI = walletUI;
// }

const COMPANY = "CSP";

export {
    Wallet,
    walletActions,
    walletReducer,
    COMPANY,
}