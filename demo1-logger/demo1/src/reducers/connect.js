import { ADD, SUB } from '../constants/index'
export const connect = (state = { count: 0 }, action) => {
    switch (action.type) {
        case ADD:
            // throw new Error("出现了错误")
            return { count: state.count + 1 }
        case SUB:
            return { count: state.count - 1 }
        default:
            return state
    }
}