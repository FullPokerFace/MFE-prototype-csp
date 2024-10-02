import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import store, { initializeStore } from './redux/store';

const App = () => {

    useEffect(() => {
        initializeStore();
    }, []);

    return (
        <Provider store={store}>
            <Header />
        </Provider>
    )
}

export default App;