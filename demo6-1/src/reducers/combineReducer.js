export function combineReducer(reducers){
    return function(state={},action){
        let newState={};
        Object.keys(reducers).forEach(key=>{
            let  childState=state[key];
            newState[key]=reducers[key](childState,action)
        })
        return newState
    }
}