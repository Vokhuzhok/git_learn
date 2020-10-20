import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from './serviceWorker';
import store from './redux/store';

let rerenderEntityTree = (state) => {
    ReactDOM.render(
      <React.StrictMode>
        <App store={store}
             dispatch = {store.dispatch.bind(store)} />
      </React.StrictMode>,
      document.getElementById("root")
    );
  };

rerenderEntityTree(store.getState () );

store.subscribe(() => {
  // let state = store.getState();
  rerenderEntityTree(store);
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
