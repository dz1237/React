import { ADD, SUB, changeList, changeMouseEnter, changeMouseLeave, changePage } from './constants' // immutabble对象的set方法会结合之前immutable对象的值和设置的值// 返回一个全新的对象
const { fromJS } = require('immutable');
const defaultState = fromJS({
    focused: true,
    mouseIn: false,
    list: [],//初始值是一个immutable数组
    page: 1,
    totalPage: 1
});
const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD:
            return (
                state.set('focused', true)
            );
        case SUB:
            return (
                state.set('focused', false)
            );
        case changeList:
            return state.merge({
                list: action.data,
                totalPage: action.totalPage
                // state.set('list',action.data).set('totalPage', action.totalPage)
            });
        case changeMouseEnter:
            return (
                state.set('mouseIn', true)
            );
        case changeMouseLeave:
            return (
                state.set('mouseIn', false)
            );
        case changePage:
            return (
                state.set('page', action.page)
            );
        default:
            return state;
    }
}
export default reducer;