import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleWare from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'
import App from './App';
import { rootReducer } from './reducers';
import { helloSaga } from './sagas/helloSaga';
const sagaMiddleWare = createSagaMiddleWare();
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleWare)));
sagaMiddleWare.run(helloSaga);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

