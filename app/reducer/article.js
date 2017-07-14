import {
    GET_ARTICLE
} from '../action/action.js';

const emptyArticle={
    title:'',
    content:''
}

const article=(state=emptyArticle,action)=>{
    return {...action.article}
}


export default article;