
import RouteService from './routeService';

const DataService={

    /**
     * 获取主题数量
     * @param {*number} page 页数
     * @param {*string} tab 主题类型。现在有ask share job good
     * @param {*number} limit 每一页的数量
     * @param {*boolean} mdrender 当为 false 时，不渲染。默认为 true，渲染出现的所有 markdown 格式文本。
     */
    getTopic(page,tab,limit,mdrender){
        return new Promise((resolve,reject)=>{
            fetch(RouteService.getTopics(page,tab,limit,mdrender)).then(resp=>{
                resolve(resp.json())
            }).catch(err=>{
                reject(err);
            })
        })
        
    }
}

export default DataService;