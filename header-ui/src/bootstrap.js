import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Header from './components/Header';
import store from './redux/store';

const App = () => (
  <Provider store={store}>
    <div>
      <Header />
    </div>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));
