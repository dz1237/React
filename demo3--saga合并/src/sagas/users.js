import { takeEvery, call, put } from 'redux-saga/effects'
import axios from 'axios'
import { FETCHUSER, FETCHUSERERROR, FETCHUSERSUCCESS } from '../constants'
function* gfetchUser() {
    try {
        let users = yield call(axios.get, "https://jsonplaceholder.typicode.com/users");
        yield console.log("users", users);
        yield put({ type: FETCHUSERSUCCESS, users: users })
    } catch (error) {
        yield put({ type: FETCHUSERERROR, error: error })
    }
}
function* watchgfetchUser() {
    yield takeEvery(FETCHUSER, gfetchUser);
}


function* gfetchPosts() {
    let posts = yield call(axios.get, "https://jsonplaceholder.typicode.com/posts")
    yield console.log("posts", posts);
};
function* watchgfetchPosts() {
    yield takeEvery(FETCHUSER, gfetchPosts)
}

export const fetchUserSagas = [
    watchgfetchUser(),
    watchgfetchPosts()
]
