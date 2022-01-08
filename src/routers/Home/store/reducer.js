import { changeHomeData, ADDHOMELIST, CHANGETOPSHOW } from './constants';
const { fromJS } = require('immutable')
const defaultState = fromJS({
    topicList: [],
    articleList: [],
    recommenList: [],
    articlePage: 1,
    showScorll: false,
});

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case changeHomeData:
            return state.merge({
                topicList: fromJS(action.topicList),
                articleList: fromJS(action.articleList),
                recommenList: fromJS(action.recommenList)
            })
        case ADDHOMELIST:
            return state.merge({
                'articleList': state.get('articleList').concat(action.list),
                'articlePage': action.nextPage
            })
        case CHANGETOPSHOW:
            return (
                state.set('showScorll', action.show)
            )
        default:
            return state;
    }
}
export default reducer;