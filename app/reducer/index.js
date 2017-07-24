import {combineReducers} from 'redux';
import topics from './topics';
import article from './article';
import login from './login';
import user from './user';
import message from './message';

const reducer=combineReducers({
   topics,
   article,
   login,
   user,
   message
})

export default reducer;