import { ADD, SUB } from './constants'
const { fromJS } = require('immutable');
const defaultState = fromJS({
    focused: false
});
const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD:
            return (
                state.set('focused', true)
            );
        // immutabble对象的set方法会结合之前immutable对象的值和设置的值
        // 返回一个全新的对象
        case SUB:
            return (
                state.set('focused', false)
            );
        default:
            return state;
    }
}
export default reducer;