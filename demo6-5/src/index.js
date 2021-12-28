import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import {rootReducer} from './reducers'
import App from './App'
const store=createStore(rootReducer)
store.subscribeibe=(()=>{
    console.log("reducer函数被调用了，state值是",state.getState())
})
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById("app")
)