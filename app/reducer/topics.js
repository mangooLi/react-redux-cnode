import {
    ADD_ALL_TOPICS,
    ADD_GOOD_TOPICS,
    ADD_SHARE_TOPICS,
    ADD_ASK_TOPICS,
    ADD_JOB_TOPICS,
} from '../action/action.js'


const initTopics={
    all:[],
    good:[],
    share:[],
    ask:[],
    job:[]
}

const topics=(state=initTopics,action)=>{
    // console.log('reducing working');
    switch(action.type){
        case ADD_ALL_TOPICS:{
            return {
                all:[...state.all,...action.topics],
                good:state.good,
                share:state.share,
                ask:state.ask,
                job:state.job
            }
        };break;
        case ADD_GOOD_TOPICS:{
            return {
                all:state.all,
                good:[...state.good,...action.topics],
                share:state.share,
                ask:state.ask,
                job:state.job
            }
        };break;
        case ADD_SHARE_TOPICS:{
            return {
                all:state.good,
                good:state.good,
                share:[...state.share,...action.topics],
                ask:state.ask,
                job:state.job
            }
        };break;
        case ADD_ASK_TOPICS:{
            return {
                all:state.all,
                good:state.good,
                share:state.share,
                ask:[...state.ask,...action.topics],
                job:state.job
            }
        };break;
        case ADD_JOB_TOPICS:{
            return {
                all:state.all,
                good:state.good,
                share:state.share,
                ask:state.ask,
                job:[...state.job,...action.topics]
            }
        };break;

        default:{
            return state;
        }
    }
    
}

export default topics;