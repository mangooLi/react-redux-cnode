
//常量
let index=0;
export const ADD_TODO='Add_Todo';
export const CHANGE_TOTO_TO_DOING='Change_todo_to_doing';
export const CHANGE_DOING_TO_DONE='Change_doing_to_done';
// export const 
// export const 


export const addToDo=(text)=>{
    return {
        type:ADD_TODO,
        text,
        id:index++
    }
}
export const changeTodoToDoing=(id)=>{
    return {
        type:CHANGE_TOTO_TO_DOING,
        id
    }
}

export const changeDoingToDone=(id)=>{
    return {
        type:CHANGE_DOING_TO_DONE,
        id
    }
}