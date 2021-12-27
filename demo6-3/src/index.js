import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { rootReducer } from "./reducers";
const store = createStore(rootReducer);
store.subscribe(() => {
    console.log("reducer函数被调用了，state值是", store.getState())
})
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("app")
)