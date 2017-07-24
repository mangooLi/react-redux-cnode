import {
    ADD_HASREAD_MESSAGE,
    ADD_UNREAD_MESSAGE
} from '../action/action.js';

const init_message={
    hasRead:[],
    unRead:[]
}
const message=(state=init_message,action)=>{
    switch(action.type){
        case ADD_HASREAD_MESSAGE:{
            return {
                hasRead:[...state.hasRead,...action.list],
                unRead:state.unRead
            }
        };break;
        case ADD_UNREAD_MESSAGE:{
            return {
                hasRead:state.hasRead,
                unRead:[...state.unRead,...action.list]
            }
        };break;
        default:return state;
    }
}

export default message;