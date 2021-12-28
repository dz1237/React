import {combineReducers} from 'redux'
import {user} from './user'
import {connect} from './connect'
 export  const rootReducer=combineReducers({
     connect,user
 })