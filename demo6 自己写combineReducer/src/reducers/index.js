import {combineReducer} from './conbineReducer';
import {counter} from './counters'
import {user} from './user'
export const rootReducer=combineReducer({//进行合并
    counter,user//这是简写
})
// combineReducers功能：
// 返回一个合并后的reducer函数，赋值给rootReducer
//
// 合并后的reducer函数的功能：
// 1. 逐个调用合并前的reducer函数
// 2. 将每个redu er函数返回的state合并成一个state