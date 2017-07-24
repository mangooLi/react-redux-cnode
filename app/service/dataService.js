
import RouteService from './routeService';


const DataService={

    /**
     * 获取主题数量
     * @param {*number} pageIndex 页数
     * @param {*string} tab 主题类型。现在有ask share job good
     */
    getTopic(pageIndex,tab){
        return new Promise((resolve,reject)=>{

            fetch(RouteService.getTopics(pageIndex,tab,20,true)).then(resp=>{
                resolve(resp.json())
            }).catch(err=>{
                reject(err);
            })
        })
        
    },
    getArticle(id){
        return new Promise((resolve,reject)=>{
            fetch(RouteService.getArticle(id)).then(res=>{
                resolve(res.json())
            }).catch(err=>{
                reject(err)
            })
        })
    },
    //登陆
    login(token){
        let url=RouteService.login();
        return new Promise((resolve,reject)=>{
            fetch(url,{
                method:'POST',
                 headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                body: `accesstoken=${token}`
                
            }).then(res=>{
                resolve(res.json());
            }).catch(err=>{
                reject(err)
            })
        })
    },
    getCollectedTopics(username){
        let url=RouteService.getCollectedTopics(username);
        return new Promise((resolve,reject)=>{
            fetch(url).then(res=>{
                resolve(res.json())
            }).catch(err=>{
                reject(err)
            })
        })
    },
    getMessage(token){
        let url=RouteService.getMessage('9d886899-e5bd-42d5-a6d8-1f64631a1df2');
        return new Promise((resolve,reject)=>{
            fetch(url).then(res=>{
                resolve(res.json())
            }).catch(err=>{reject(err)});
        })
    }
}

export default DataService;