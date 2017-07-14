import {combineReducers} from 'redux';
import topics from './topics';
import article from './article';


const reducer=combineReducers({
   topics,
   article
})

export default reducer;