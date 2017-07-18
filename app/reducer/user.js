import {
    COLLECTED_TOPICS
} from '../action/action.js';

const user_info={
    collected_topics:[],
    
}

const user=(state=user_info,action)=>{
    switch(action.type){
        case COLLECTED_TOPICS:{
            return {
                collected_topics:action.collected_topics
            }
        };break;
        default:return state;
    }
}


export default user;