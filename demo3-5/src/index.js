import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore } from "redux";
import { Provider } from 'react-redux'
import { counter } from "./reducers/counter";

const store = createStore(reducer);
store.subscribe(() => {
    console.log(store.getState());

})
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("app")
)