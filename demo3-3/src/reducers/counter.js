import { ADD, SUB } from '../constants/index'
export const conuter = (state = 0, action) => {
    switch (action.type) {
        case ADD:
            return state + 1;
        case SUB:
            return state - 1;
        default:
            return state
    }
}