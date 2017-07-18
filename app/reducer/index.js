import {combineReducers} from 'redux';
import topics from './topics';
import article from './article';
import login from './login';
import user from './user'

const reducer=combineReducers({
   topics,
   article,
   login,
   user
})

export default reducer;