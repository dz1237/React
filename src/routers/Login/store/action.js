import axios from 'axios'
import { CHANGELOGIN } from './constants'
const changeLogin = () => {
    return {
        type: CHANGELOGIN,
        value: true
    }
}
export const logout = () => {
    return {
        type: CHANGELOGIN,
        value: false
    }
}
export const login = (account, password) => {
    return (dispatch) => {
        axios.get('/api/login.json?account' + account + '&password=' + password)
            .then((res) => {
                if (res.data.data) {
                    dispatch(changeLogin())
                } else {
                    alert("登陆失败")
                }
            })
    }
}