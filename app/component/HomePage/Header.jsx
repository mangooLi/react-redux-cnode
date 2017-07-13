

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
import {Tabs, Tab} from 'material-ui/Tabs';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import './header.less';



class Header extends Component{
    constructor(props){
        super(props);
        this.state={
            charpters:['全部','精华','分享','问答','招聘']
        }
      
    }
   
 
    render(){
        const {charpters} =this.state;

        return(
            
            <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
                <div className="appbar">
                    <AppBar title = {<span>react-cnode</span>} iconElementRight={
                        <div style={{marginTop:-8}}>
                            <Badge badgeContent={8} secondary={true} >
                                <IconButton tooltip="未读消息">
                                    <NotificationsIcon/>
                                </IconButton>
                            </Badge>


                        </div>
                    }/>
                    <Tabs>
                        {
                            charpters.map((item,index)=>{
                                return (<Tab key={index} label={item} value={index}></Tab>)
                            })
                        }

                    </Tabs>

                </div>
                <div>
                    {this.props.children}
                </div>
               
            
            </MuiThemeProvider>
              
           
        )
    }
}

export default connect()(Header);