import React from 'react';
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { rootReducer } from './reducers'
import App from './App'
import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger';
import thunk from 'redux-thunk'
//创建logger中间件
// const logger = store => next => action => {
//     console.log("action ", action)
//     console.log("state1", store.getState())
//     let res = next(action);
//     console.log("next(action)", res);
//     console.log("state2", store.getState())

// }
const store = createStore(rootReducer, { connect: { count: 100 } }, applyMiddleware(logger.apply, thunk));
store.subscribe(() => {
    console.log("reducer函数被调用了，state值是", store.getState())
})
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById("app")
)