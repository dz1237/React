import React from 'react'
import ReractDOM from 'react-dom'
import { createStore } from 'redux'
import App from './App'
import { conuter as reducer } from './reducers/counter'
import { Provider } from 'react-redux'
const store = createStore(reducer);
store.subscribe(() => {
    console.log("stroe中的state发生改变", store.getState());
})
ReractDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById("app")
)