

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

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import './header.less';



class Header extends Component{
    constructor(props){
        super(props);
        
      
    }
   
 
    render(){
        return(
            
                <MuiThemeProvider >
                    <div className="appbar">
                        <AppBar title = {<span>react-cnode</span>} onLeftIconButtonTouchTap={this.props.toggleDrawer} iconElementRight={
                            <div style={{marginTop:-8}}>
                                <Badge badgeContent={8} secondary={true} >
                                    <IconButton tooltip="未读消息">
                                        <NotificationsIcon/>
                                    </IconButton>
                                </Badge>


                            </div>
                        }/>
                       

                    </div>
                </MuiThemeProvider>
              
           
        )
    }
}

export default Header