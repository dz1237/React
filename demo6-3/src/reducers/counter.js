import { ADD, SUB } from '../constants/index'
export const counter = (state = { count: 0 }, action) => {
    switch (action.type) {
        case ADD:
            return { count: state.count + 1 };
        case SUB:
            return { count: state.count - 1 };
        default: return state
    }
}