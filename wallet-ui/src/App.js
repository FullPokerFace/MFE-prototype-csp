import React from 'react';
import { Provider } from 'react-redux';
import Wallet from './components/Wallet'
import store from './redux/store';

const App = () => {
    return (
        <Provider store={store}>
            <Wallet />
        </Provider>
    )
}

export default App;