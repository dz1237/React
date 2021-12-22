import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { createStore } from "redux"
import './css/style.css'
//创建一个reducer函数   返回一个store中的state，只有reducer函数才能修改stroe中的state
//因为stroe中的state就是reducer函数的返回值
function reducer(state = 0, action) {
    console.log("reducer函数被调用了")
    switch (action.type) {
        case "ADD":
            return state + 1;
        case "SUB":
            return state - 1;
        default:
            return state
    }
}
//创建整个应用全局store
//1.创建全局store
//2.调用reducer函数，初始化store中的state值

const store = createStore(reducer);
//打印store中的state的值
console.log("store state1", store.getState())
//发送dispatch（{type:"add"}）   redux自动调用
//注册的reducer  返回新的state
store.dispatch({ type: "ADD" });
console.log("store state2", store.getState())
//再次发送
store.dispatch({ type: "ADD" });
console.log("stroe state3 ", store.getState())
//再次发送
store.dispatch({ type: "SUB" });
console.log("stroe state4", store.getState())
//再次发送
store.dispatch({ type: "" })
console.log("store state5", store.getState())
ReactDOM.render(<App />,
    document.getElementById("app")
);
