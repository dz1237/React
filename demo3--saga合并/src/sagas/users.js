import { takeEvery, call } from 'redux-saga/effects'
import axios from 'axios'
import { FETCHUSER } from '../constants'
function* gfetchUser() {
    let users = yield call(axios.get, "https://jsonplaceholder.typicode.com/users");
    yield console.log("users", users)
}
export function* watchgfetchUser() {
    yield takeEvery(FETCHUSER, gfetchUser);
}