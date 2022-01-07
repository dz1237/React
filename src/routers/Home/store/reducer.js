import { changeHomeData } from './constants';
const { fromJS } = require('immutable')
const defaultState = fromJS({
    topicList: [],
    articleList: [],
    recommenList: []
});
const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case changeHomeData:
            return state.merge({
                topicList: fromJS(action.topicList),
                articleList: fromJS(action.articleList),
                recommenList: fromJS(action.recommenList)
            })
        default:
            return state;
    }
}
export default reducer;