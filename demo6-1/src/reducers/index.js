import { combineReducer } from './combineReducer'
import { counter } from './counters'
import { user } from './user'
export const rootReducer = combineReducer({
    counter, user
})