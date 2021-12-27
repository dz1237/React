
import { ADD, SUB } from '../constants/index'
export const add = (data) => {
    return {
        type: ADD,
        data
    }
}
export const sub = (data) => {
    return {
        type: SUB,
        data
    }
}