import {
    LOGIN_SUCCED
} from '../action/action.js';

const login_state={
    succed:false,
    
}

const login=(state=login_state,action)=>{
    switch(action.type){
        case LOGIN_SUCCED:{
            return {
                succed:true
            }
        };break;
        default:return state;
    }
}


export default login;