import React from "react";
import ReactDOM from "react-dom";
import App from './App'
import { createStore } from "redux";
import { Provider } from "react-redux";
import { counter as reducer } from './reducers/counter'
const store = createStore(reducer);
store.subscribe(() => {
    console.log("reducer函数被调用了,state的值是", store.getState())
})
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("app")
)