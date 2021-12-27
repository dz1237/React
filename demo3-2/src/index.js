import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { createStore } from 'redux'
import { counters as reducer } from './reducers/counters'
import { Provider } from 'react-redux'
const store = createStore(reducer);
store.subsrcibe = () => {
    console.log("store中的state发生改变", store.getState())
}
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("app")
)