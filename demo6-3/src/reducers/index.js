import { counter } from "./counter";
import { user } from './user'
import { combineReducers } from "redux";
export const rootReducer = combineReducers({
    counter, user
})