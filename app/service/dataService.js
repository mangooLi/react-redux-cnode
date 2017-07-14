
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
        
    }
}

export default DataService;