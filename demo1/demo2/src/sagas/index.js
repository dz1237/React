import { takeLatest, call, put, delay, takeEvery } from 'redux-saga/effects';
// takeLatest防止重复提交，如果使用takeEvery连续点击多次  两秒后会连续加多次

import { ADD, ADDASYNC } from '../constants/index'


function* gaddAsync() {
    yield console.log("gaddAsync被调用了");
    yield delay(2000);
    // yield call(delay, 2000);//call阻塞执行   call(异步函数，异步函数的参数)
    yield put({ type: ADD })
}
export function* watchgaddAsync() {
    yield console.log("watchgaddAsync被调用了")
    yield takeLatest(ADDASYNC, gaddAsync);
    //takeEvery功能：简历ADDASYNC和gaddAsync的关系
} 