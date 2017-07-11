import {
    ADD_TODO
} from '../action/action.js'


const todoList=(state=[],action)=>{
    switch(action.type){
        case ADD_TODO:
        return [
            ...state,{
                todo:action.text,
                istodo:true,
                doing:false,
                done:false
            }
        ];

        default:return state;
        
    }
}

export default todoList;