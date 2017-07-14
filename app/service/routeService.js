

const baseUrl='https://cnodejs.org/api/v1/'
const RouteService={
    

    
    getTopics(page,tab,limit,mdrender){
        return baseUrl+`topics?page=${page}&tab=${tab}&limit=${limit}&mdrender=${mdrender}`
    },
    getArticle(id){
        return baseUrl+`topic/${id}`
    }

}

export default RouteService;