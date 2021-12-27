import { combineReducers } from "./combineReducer";
import { counter } from './counters'
import { user } from './user'
export const rootReducer = combineReducers({
    counter, user
})