import('./index');
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import Header from './components/Header';
import rootReducer from './reducers';

const store = configureStore({
  reducer: rootReducer
});

const App = () => (
  <Provider store={store}>
    <div>
      <Header />
    </div>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));
