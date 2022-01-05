import { takeEvery, call } from 'redux-saga/effects'
import axios from 'axios'
import { FETCHTODO } from '../constants'
function* gfetchTodo() {
    let todos = yield call(axios.get, "https://jsonplaceholder.typicode.com/todos");
    yield console.log("todos", todos)
}
function* watchgfetchTodo() {
    yield takeEvery(FETCHTODO, gfetchTodo);
}
export const fetchTodoSaga = [
    watchgfetchTodo()
]