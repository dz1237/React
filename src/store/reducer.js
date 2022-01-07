import { combineReducers } from "redux-immutable";
import { reducer as HomeReducer } from '../routers/Home/store'
import { reducer as HeaderReducer } from '../common/header/store';
const rootReducer = combineReducers({
    HeaderReducer, HomeReducer
})
export default rootReducer; 