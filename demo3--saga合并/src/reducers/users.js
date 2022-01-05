import { FETCHUSERSUCCESS, FETCHUSERERROR, FETCHUSER } from '../constants'
const initialState = {
    isLoding: false,
    users: null,
    error: null
}
export const users = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
        case FETCHUSER:
            return {
                isLoading: true,
                users: null,
                error: null
            };
        case FETCHUSERSUCCESS:
            return {
                isLoading: false,
                users: action.users,
                error: null
            };
        case FETCHUSERERROR:
            return {
                isLoading: false,
                users: null,
                error: action.error
            }
        default:
            return state
    }
}