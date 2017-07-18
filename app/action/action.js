
//常量
let index=0;
//topics
export const ADD_ALL_TOPICS='ADD_ALL_TOPICS';
export const ADD_GOOD_TOPICS='ADD_GOOD_TOPICS';
export const ADD_SHARE_TOPICS='ADD_SHARE_TOPICS';
export const ADD_ASK_TOPICS='ADD_ASK_TOPICS';
export const ADD_JOB_TOPICS='ADD_JOB_TOPICS';
export const SWITCH_SHOW='SWITCH_SHOW'
//article
export const GET_ARTICLE ='GET_ARTICLE';
//login
export const LOGIN_SUCCED='LOGIN_SUCCED';
export const COLLECTED_TOPICS='COLLECTED_TOPICS';

//topics
export const Add_all_topics=(topics)=>{
    return {
        type:ADD_ALL_TOPICS,
        topics,
        
    }
}
export const Add_good_topics=(topics)=>{
    return {
        type:ADD_GOOD_TOPICS,
        topics,
        
    }
}
export const Add_share_topics=(topics)=>{
    return {
        type:ADD_SHARE_TOPICS,
        topics,
        
    }
}
export const Add_ask_topics=(topics)=>{
    return {
        type:ADD_ASK_TOPICS,
        topics,
        
    }
}
export const Add_job_topics=(topics)=>{
    return {
        type:ADD_JOB_TOPICS,
        topics,
    }
}
export const Switch_show=(tab)=>{
    return {
        type:SWITCH_SHOW,
        show:tab
    }
} 
//article
export const Get_article=(article)=>{
    return {
        type:GET_ARTICLE,
        article
    }
}
//login
export const Login=()=>{
    return {
        type:LOGIN_SUCCED
    }
}
export const Get_collected_topics=(collected_topics)=>{
    return {
        type:COLLECTED_TOPICS,
        collected_topics
    }
}