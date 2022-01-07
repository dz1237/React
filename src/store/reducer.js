import { combineReducers } from "redux-immutable";

import { reducer as HeaderReducer } from '../common/header/store';
const rootReducer = combineReducers({
    HeaderReducer
})
export default rootReducer; 