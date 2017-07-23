import {
    ADD_ALL_TOPICS,
    ADD_GOOD_TOPICS,
    ADD_SHARE_TOPICS,
    ADD_ASK_TOPICS,
    ADD_JOB_TOPICS,
    SWITCH_SHOW
} from '../action/action.js'


const initTopics={
    all:[],
    all_index:0,
    good:[],
    good_index:0,
    share:[],
    share_index:0,
    ask:[],
    ask_index:0,
    job:[],
    job_index:0,
    show:'all'
}

const topics=(state=initTopics,action)=>{
    // console.log('reducing working');
    switch(action.type){
        case ADD_ALL_TOPICS:{
            return Object.assign({},state,{
                all:[...state.all,...action.topics],
                all_index:state.all_index+1
            })

        };break;
        case ADD_GOOD_TOPICS:{
            return Object.assign({},state,{
                good:[...state.good,...action.topics],
                good_index:state.good_index+1
            })
        };break;
        case ADD_SHARE_TOPICS:{
            return Object.assign({},state,{
                share:[...state.share,...action.topics],
                share_index:state.share_index+1
            })
        };break;
        case ADD_ASK_TOPICS:{
           return Object.assign({},state,{
                ask:[...state.ask,...action.topics],
                ask_index:state.ask_index+1
            })
        };break;
        case ADD_JOB_TOPICS:{
            return Object.assign({},state,{
                job:[...state.job,...action.topics],
                job_index:state.job_index+1
            })
        };break;
        case SWITCH_SHOW:{
            return Object.assign({},state,{
              show:action.show
            })
        }
        default:{
            return state;
        }
    }
    
}

export default topics;