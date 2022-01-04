import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleWare from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'
import App from './App';
import { rootReducer } from './reducers';
import { rootSaga } from './sagas/index';
const sagaMiddleWare = createSagaMiddleWare();
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleWare)));
sagaMiddleWare.run(rootSaga);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


// 整个执行流程：
// 1.从redux中导出创建saga中间件的函数 createSagaMiddleWare
// 2.调用这个createSagaMiddleWare这个函数 创建中间件
// 3.执行run方法，去调用run方法（）中的函数 遍历
// 4.执行generator函数 
// 5.点击-->dispatch({type:ADDASYNC})-->去调用watchgaddAsync-->然后发送ADDASYNC到
// reducer进行比对   返回默认的state=0，再去调用gaddAsync这个工作generator函数，延迟两秒去转发同步ADD到
// reducer进行比对   和ADD对应  state+1;  之后进行重新render   显示出来


