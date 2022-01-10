import axios from 'axios'
import { CHANGEDEITAL } from './constants'
const changeDetial = (title, content) => ({
    type: CHANGEDEITAL,
    title,
    content

})
export const getDetial = (id) => {
    return (dispatch) => {
        axios.get('/api/detial.json?=' + id)
            .then((res) => {
                dispatch(changeDetial(res.data.data.title, res.data.data.content))

            })
    }
} 