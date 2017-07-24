

const baseUrl='https://cnodejs.org/api/v1/'
const RouteService={
    

    
    getTopics(page,tab,limit,mdrender){
        return baseUrl+`topics?page=${page}&tab=${tab}&limit=${limit}&mdrender=${mdrender}`
    },
    getArticle(id){
        return baseUrl+`topic/${id}`
    },
    login(){
        return baseUrl+`accesstoken`;
    },
    getCollectedTopics(username){
        return baseUrl+`topic_collect/${username}`
    },
    getMessage(token){
        return baseUrl+`messages?accesstoken=${token}&mdrender=true`
    }

}

export default RouteService;