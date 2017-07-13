import {
    ADD_TODO,
    CHANGE_TOTO_TO_DOING,
    CHANGE_DOING_TO_DONE
} from '../action/action.js'


const todoList=(state=[],action)=>{
    // console.log('reducing working');
    switch(action.type){
        case ADD_TODO:{
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
        };break;
        case CHANGE_TOTO_TO_DOING:{
            //不要在reducer里做修改传入的参数的操作
            return [
                ...state.slice(0, action.id),
                {
                    todo:state[action.id].todo,
                    id:action.id,
                    istodo: false,
                    doing: true,
                    done: false
                },
                ...state.slice(parseInt(action.id) + 1)
            ];
        };break;
        case CHANGE_DOING_TO_DONE:{
            return [
                ...state.slice(0, action.id),
                {
                    todo:state[action.id].todo,
                    id:action.id,
                    istodo: false,
                    doing: false,
                    done: true
                },
                ...state.slice(parseInt(action.id) + 1)
            ];
        }

        default:return state;
        
    }
}

export default todoList;