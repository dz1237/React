import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import rootReducer from './reducer';
import { composeWithDevTools } from 'redux-devtools-extension'
// 在这个包已经装上了
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
export default store; 