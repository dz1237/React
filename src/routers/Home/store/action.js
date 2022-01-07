import { changeHomeData } from './constants';
import axios from 'axios'
const change_Home_Data = (result) => ({
    type: changeHomeData,
    topicList: result.topicList,
    articleList: result.articleList,
    recommenList: result.recommenList
})
export const getHomeInfo = () => {
    return (dispatch) => {
        axios.get('/api/home.json')
            .then((res) => {
                let result = res.data.data;
                dispatch(change_Home_Data(result));
            });
    }
}