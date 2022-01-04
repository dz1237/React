import { ADD, SUB, ADDASYNC, FETCHUSER } from '../constants/index'
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