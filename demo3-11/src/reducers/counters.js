import {SUB,ADD} from '../constants/index'
export const counters =(state=0,action)=>{
    switch (action.type){
        case ADD:
            return state+1;
        case SUB :
            return state-1;
        default :
            return state;
    }
}