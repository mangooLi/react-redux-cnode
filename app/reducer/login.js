import {
    LOGIN_SUCCED
} from '../action/action.js';

const login_state={
    succed:false,
    token:''
    
}

const login=(state=login_state,action)=>{
    switch(action.type){
        case LOGIN_SUCCED:{
            return {
                succed:true,
                token:action.token
            }
        };break;
        default:return state;
    }
}


export default login;