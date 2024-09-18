// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import ModuleError from './components/ModuleError/ModuleError';
import createStore from './redux/store';
import { loadScript } from './utils/moduleUtils';

const renderApp = async () => {
    try {
        await Promise.all([
            loadScript('/wallet-ui.js'),
            loadScript('/header-ui.js')
        ]);

        // Get the walletReducer from the loaded script
        const { walletReducer } = window.walletUI;

        // Create the store with the walletReducer
        const store = createStore(walletReducer);

        ReactDOM.render(
            <Provider store={store}>
                <App />
            </Provider>,
            document.getElementById('root')
        );
    } catch (error) {
        console.error('Failed to load scripts:', error);
        ReactDOM.render(
            <ModuleError onRetry={renderApp} />,
            document.getElementById('root')
        );
    }
};

renderApp();