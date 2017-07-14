

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

//ui 组件
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Badge from 'material-ui/Badge';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';
import IconButton from 'material-ui/IconButton';
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';

import './topic.less'




class Topics extends Component{
    constructor(props){
        
        super(props);
        
      
    }
    componentDidMount(){
       
    }
   
 
    render(){
        const {topics,tab} =this.props;
        let _topics;
        //筛选
        switch(tab){
            case 'all':_topics=topics;break;
            case 'good':_topics=topics.filter(item=>{return item.good});break;
            default:_topics=topics.filter(item=>{return item.tab==tab});break;
           
        }
        const tabChn ={all:'全部',good:'精华',share:'分享',ask:'问答',job:'招聘'}
        const topicList= _topics.map((topic,index)=>{
            return ( <Link key={topic.id} to={`/topic/${topic.id}`}>
            <ListItem
                
                leftAvatar={<Avatar src={topic.author.avatar_url}/>}
                primaryText={
                    <div className='text'>
                        {topic.top&&<span style={{color:'blue'}}>顶</span>}
                        {topic.good&&<span style={{color:'red'}}>精</span>}
                        <span className='title'>{topic.title}</span>
                    </div>
                }
                secondaryText={
                    <div className='text'>
                        <span>{topic.reply_count+'/'+topic.visit_count}</span>
                        <span>{tabChn[topic.tab]}</span>
                        <span style={{float:'right'}}>{topic.create_at}</span>
                    </div>
                }
            ></ListItem></Link>)
        });
        
        return(
            <div style={{position:'relative'}}>
                <div className={'lists'}>   
                    <MuiThemeProvider >
                        
                            <div className="topics">
                                <List>
                                    {topicList}
                                </List>
                            </div>
                        
                    </MuiThemeProvider>
                </div>
            </div>
           
        )
    }
}

export default connect()(Topics);