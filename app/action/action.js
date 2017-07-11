
//常量
export const ADD_TODO='Add_Todo';
// export const 


export const addToDo=(text)=>{
    return {
        type:ADD_TODO,
        text
    }
}
