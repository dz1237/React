import { put, takeEvery, call, } from 'redux-saga/effects'
import { ADD, ADDASYNC } from '../constants/index'
// const delay = ms => {
//     new Promise(
//         resolve => {
//             setTimeout(resolve, ms);
//         }
//     )
// }
const delay = ms => (
    new Promise(resolve => {
        setTimeout(resolve, ms)
    })
)
function* gaddAsync() {
    yield console.log("gassAsync调用了");
    yield call(delay, 2000);
    yield put({ type: ADD })
}
function* watchgaddAsync() {
    yield console.log("watchgaddasync背调yongle");
    yield takeEvery(ADDASYNC, gaddAsync);
}
export const addAsyncSaga = [
    watchgaddAsync()
]

