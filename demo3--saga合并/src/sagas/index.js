
import { all } from 'redux-saga/effects';
// takeLatest防止重复提交，如果使用takeEvery连续点击多次  两秒后会连续加多次
import { addAsyncSaga } from './counter'
import { fetchUserSagas } from './users'
import { fetchTodoSaga } from './todo';

//合并saga
export function* rootSaga() {
    yield all([
        ...addAsyncSaga,
        ...fetchUserSagas,
        ...fetchTodoSaga,


    ])
}