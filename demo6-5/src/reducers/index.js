import {combineReducers} from 'redux'
import {connect} from './connect'
import {user} from './user'
export const rootReducer=combineReducers({
    connect,user
})