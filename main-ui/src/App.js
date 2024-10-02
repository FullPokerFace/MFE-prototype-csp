import React, { Suspense } from "react";
import { Provider } from "react-redux";
import createStore from "./redux/store";
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from "./components/Main";


const App = () => {
  return (
    <>
      <Provider store={createStore}>
        <Main />
      </Provider>
    </>
  );
};

export default App;
