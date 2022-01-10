import { CHANGEDEITAL } from './constants';
const { fromJS } = require('immutable');
const defaultState = fromJS({
    title: '',
    content: ''
});


const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case CHANGEDEITAL:
            return state.merge({
                title: action.title,
                content: action.content
            })
        default:
            return state;
    }
}
export default reducer;