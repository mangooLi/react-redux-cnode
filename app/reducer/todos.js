import {
    ADD_TODO
} from '../action/action.js'


const todoList=(state=[],action)=>{
    console.log('reducing working');
    switch(action.type){
        case ADD_TODO:
        console.log(action)
        return [
            ...state,{
                todo:action.text,
                id:action.id,
                istodo:true,
                doing:false,
                done:false
            }
        ];

        default:return state;
        
    }
}

export default todoList;