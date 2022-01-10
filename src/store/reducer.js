import { combineReducers } from "redux-immutable";
import { reducer as HomeReducer } from '../routers/Home/store'
import { reducer as HeaderReducer } from '../common/header/store';
import { reducer as DetialReducer } from '../routers/Detial/store';
const rootReducer = combineReducers({
    HeaderReducer, HomeReducer, DetialReducer
})
export default rootReducer; 