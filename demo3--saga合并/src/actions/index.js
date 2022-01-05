import { ADD, SUB, ADDASYNC, FETCHUSER, FETCHTODO } from '../constants/index'
export const add = () => {
    return {
        type: ADD
    }
}
export const sub = () => {
    return {
        type: SUB
    }
}
export const addasync = () => {
    return {
        type: ADDASYNC
    }
}
export const fetchUser = () => {
    return {
        type: FETCHUSER
    }
}
export const fetchTodo = () => {
    return {
        type: FETCHTODO
    }
}