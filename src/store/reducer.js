import { combineReducers } from "redux";
import { reducer as HeaderReducer } from '../common/header/store';
const rootReducer = combineReducers({
    HeaderReducer
})
export default rootReducer;