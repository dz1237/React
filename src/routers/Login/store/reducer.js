import { CHANGELOGIN, CHANGELOGINOUT } from './constants';
const { fromJS } = require('immutable')
const defaultState = fromJS({
    login: false
});

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case CHANGELOGIN:
            return state.set('login', action.value);
        case CHANGELOGINOUT:
            return state.set('login', action.value)
        default:
            return state;
    }
}
export default reducer;