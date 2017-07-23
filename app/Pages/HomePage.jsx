
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
//ui组件
import {Tabs, Tab} from 'material-ui/Tabs';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlipMove from 'react-flip-move'
//内部组件
import Header from '../component/HomePage/Header';
import Topics from '../component/HomePage/topics';
import DataService from '../service/dataService.js'
import MyDrawer from '../component/HomePage/drawer';
import './Page.less';

import {Add_all_topics,Add_good_topics,Add_share_topics,Add_ask_topics,Add_job_topics,Switch_show} from '../action/action.js'
import getSize from '../service/util.js';
class HomePage extends Component{
    constructor(){
        super();
        this.state={
            // charpters:['全部','精华','分享','问答','招聘'],
            charpters:[{text:'全部',tab:'all'},{text:'精华',tab:'good'},{text:'分享',tab:'share'},{text:'问答',tab:'ask'},{text:'招聘',tab:'job'}],
            test:0,
            topics:[],
           
            openDrawer:false
        }
    }
    selectedTab='all';
    fetching=false;
    componentDidMount(){
        this.loadMore('all')
        window.onscroll = () => {
            if(!this.fetching){
                this.loadMore(this.selectedTab);

            }
        }
    }
    componentWillUnmount(){
        window.onscroll=null;
        // console.log('destroyed')
    }
    handleTabsChange=(value)=>{
        
        const {dispatch,topics}=this.props;
        
        this.selectedTab=value;

        dispatch(Switch_show(value))
        if(!this.fetching){
            this.loadMore(value)
        }
        
    }
    loadMore=(tab,index)=>{
       
     
        let {windowH,contentH,scrollT} = getSize();
        
        
        if((windowH + scrollT + 100 > contentH)||this.props[tab+'_index']===0){
            this.loadData(tab)
        }
    }
    
    loadData=(tab)=>{
        this.fetching=true;
        
        const {dispatch,topics,all_index,share_index,ask_index,good_index,job_index} =this.props;
        
        switch(tab){
            case 'all':{
                
                DataService.getTopic(all_index+1,tab).then(res=>{
                    dispatch(Add_all_topics(res.data));
                    
                    this.fetching=false;
                   
                    
                })
            };break;
            case 'share':{
               
                DataService.getTopic(share_index+1,tab).then(res=>{
                    dispatch(Add_share_topics(res.data));
                    
                    this.fetching=false;
                })
            };break;
             case 'good':{
                
                DataService.getTopic(good_index+1,tab).then(res=>{
                    dispatch(Add_good_topics(res.data));
                    
                    this.fetching=false;
                })
            };break; 
            case 'ask':{
                
                DataService.getTopic(ask_index+1,tab).then(res=>{
                    dispatch(Add_ask_topics(res.data));
                    
                    this.fetching=false;
                })
            };break; 
            case 'job':{
                
                DataService.getTopic(job_index+1,tab).then(res=>{
                    dispatch(Add_job_topics(res.data));
                    
                    this.fetching=false;
                })
            };break;
            default:break;
        }
    }
    toggleDrawer=()=>{
        this.setState({openDrawer:!this.state.openDrawer})
    }
    render(){
        const {test,charpters}=this.state;
        let enterAnimation = {
            from: { transform: 'translateY(-80px)',opacity:0 },
            to:   { transform: 'translateY(0)',opacity:1 }
        }
        const {topics,login}=this.props;

        return(
            
            <MuiThemeProvider>
                <div className="homepage">
                    <Header toggleDrawer={this.toggleDrawer}></Header>
                    <Tabs onChange={this.handleTabsChange} >
                        {charpters.map((item,index)=>{
                                return (<Tab key={index} label={item.text} value={item.tab}>
                                  
                                       
                                    </Tab>)
                        })}

                    </Tabs>
                    <FlipMove  enterAnimation={enterAnimation} easing='ease-out' duration='400' staggerDelayBy='40' staggerDurationBy='4'>
                            <Topics  />
                    </FlipMove>

                    <MyDrawer openDrawer={this.state.openDrawer} toggleDrawer={this.toggleDrawer} succed={login.succed}></MyDrawer>
                    
                </div>
            </MuiThemeProvider>
        )
    }
}
const mapStateToProps=(state)=>{
    const {topics,login}=state;
    const {all_index,share_index,ask_index,good_index,job_index}=topics;
    return {topics,login,all_index,share_index,ask_index,good_index,job_index}
}
export default connect(mapStateToProps)(HomePage);