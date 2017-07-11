import {combineReducers} from 'redux';
import todoList from './todos';


const reducer=combineReducers({
    todoList,
})

export default reducer;