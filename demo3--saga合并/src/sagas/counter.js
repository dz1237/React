import { put, takeEvery, call } from 'redux-saga/effects'
import { ADD, ADDASYNC } from '../constants/index'
const delay = ms => {
    new Promise(
        resolve => {
            setTimeout(resolve, ms);
        }
    )
}
function* gaddAsync() {
    yield console.log("gassAsybc调用了");
    yield call(delay, 2000);
    yield put({ type: ADD })
}
export function* watchgaddAsync() {
    yield console.log("watchgaddasync背调yongle");
    yield takeEvery(ADDASYNC, gaddAsync);
}