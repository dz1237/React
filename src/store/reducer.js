const defaultState = {
    focused: false
};
const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'ADD':
            return {
                focused: true
            }
        case 'SUB':
            return {
                focused: false
            }
        default:
            return state;
    }
}
export default reducer;