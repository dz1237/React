import { ADD, SUB, changeList, changeMouseEnter, changeMouseLeave, changePage } from './constants'

import axios from 'axios'
export const add = () => ({
    type: ADD
})
export const sub = () => ({
    type: SUB
})
export const changemouseenter = () => ({
    type: changeMouseEnter
})
export const changemouseleave = () => ({
    type: changeMouseLeave
})
export const changepage = (page) => ({
    type: changePage,
    page
})

export const getList = () => {
    return (dispatch) => {
        axios.get('/api/headerList.json')
            .then(res => {
                dispatch(changelist(res.data.data))
            })
            .catch(error => {
                console.log('error');
            })
    }
}
const changelist = (data) => ({
    type: changeList,
    data,
    totalPage: Math.ceil(data.length / 10)
})
