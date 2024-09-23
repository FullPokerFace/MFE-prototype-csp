import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import ModuleError from './components/ModuleError/ModuleError';
import createStore from './redux/store';

const renderApp = async () => {
    try {
        const { walletReducer } = await import('wallet-ui/walletReducer');
        const { Header } = await import('header-ui/Header');

        const store = createStore(walletReducer);

        ReactDOM.render(
            <Provider store={store}>
                <Header />
                <App />
            </Provider>,
            document.getElementById('root')
        );
    } catch (error) {
        console.error('Failed to load modules:', error);
        ReactDOM.render(
            <ModuleError onRetry={renderApp} />,
            document.getElementById('root')
        );
    }
};

renderApp();
