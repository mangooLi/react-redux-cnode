

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

//自定义组件
import './topic.less'






class Topics extends Component{
    constructor(){
        
        super();
        
      
    }
    componentDidMount(){
       
    }
   
 
    render(){
        const {topics,show} =this.props;
        
       
        const tabChn ={all:'全部',good:'精华',share:'分享',ask:'问答',job:'招聘'}
        const topicList= topics[show].map((topic,index)=>{
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
                        <span>{tabChn[show]}</span>
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

const mapStateToProps=(state)=>{
    const {topics}=state;
    const {show}=topics;
    return {topics,show}
}

export default connect(mapStateToProps)(Topics);