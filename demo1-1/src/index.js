import React from "react";
import ReactDOM from "react-dom";
import App from './App'
import { createStore } from 'redux'
//创建一个reducer函数   返回store中的state
//只有reducer函数才能修改store中的state值
function reducer(state = 0, action) {
    switch (action.type) {
        case "ADD":
            return state + 1
        case "SUB":
            return state - 1
        default:
            return state
    }
}
const store = createStore(reducer);
console.log("store state1", store.getState());
store.dispatch({ type: "ADD" })
ReactDOM.render(
    <App />,
    document.getElementById("app")
)