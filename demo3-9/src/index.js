import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react";
import { counter as reducer } from "./reducers/counter";
import { createStore } from 'redux'
import App from "./App";
import { Provider } from "react-redux";
const store = createStore(reducer);
store.subscribe(() => {
    console.log("store中的state发生改变", store.getState())
})
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("app")
)