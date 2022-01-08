import { changeHomeData, ADDHOMELIST, CHANGETOPSHOW } from './constants';
import axios from 'axios'
import { fromJS } from 'immutable'
const change_Home_Data = (result) => ({
    type: changeHomeData,
    topicList: result.topicList,
    articleList: result.articleList,
    recommenList: result.recommenList
})
const addHomeList = (list, nextPage) => {
    return {
        type: ADDHOMELIST,
        list: fromJS(list),
        nextPage
    }
}
export const getHomeInfo = () => {
    return (dispatch) => {
        axios.get('/api/home.json')
            .then((res) => {
                let result = res.data.data;
                dispatch(change_Home_Data(result));
            });
    }
}
export const getMoreList = (page) => {
    return (dispatch) => {
        axios.get('/api/homeList.json?page' + page)
            .then((res) => {
                let result = res.data.data;
                dispatch(addHomeList(result, page + 1))
            });

    }
}
export const changeTopShow = (show) => {
    return {
        type: CHANGETOPSHOW,
        show
    }
}