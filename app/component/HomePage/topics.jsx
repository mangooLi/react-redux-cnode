

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




class Topics extends Component{
    constructor(props){
        super(props);
        
      
    }
   
 
    render(){
        const {topics} =this.props;
        const tabChn ={all:'全部',good:'精华',share:'分享',ask:'问答',job:'招聘'}
        const topicList= topics.map((topic,index)=>{
            return (<ListItem
                key={topic.id}
                leftAvatar={<Avatar src={topic.author.avatar_url}/>}
                primaryText={
                    <div>
                        {topic.top&&<span style={{color:'blue'}}>顶</span>}
                        {topic.good&&<span style={{color:'red'}}>精</span>}
                        <span>{topic.title}</span>
                    </div>
                }
                secondaryText={
                    <div>
                        <span>{topic.reply_count+'/'+topic.visit_count}</span>
                        <span>{tabChn[topic.tab]}</span>
                        <span style={{float:'right'}}>{topic.create_at}</span>
                    </div>
                }
            ></ListItem>)
        });
        return(
            
                <MuiThemeProvider >
                    <div className="topics">
                        <List>
                            {topicList}
                        </List>
                    </div>
                </MuiThemeProvider>
              
           
        )
    }
}

export default connect()(Topics);