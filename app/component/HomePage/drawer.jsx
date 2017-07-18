import React, { Component } from 'react';
import {Link} from 'react-router'
import { connect } from 'react-redux';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Drawer from 'material-ui/Drawer';
import Avatar from 'material-ui/Avatar';

import getSize from '../../service/util.js';

class MyDrawer extends Component{
    constructor(props){
        super(props);
        
      
    }
   
 
    render(){
        let {contentW} = getSize()
        if(contentW > 800){
            contentW = 640
        }else{
            contentW = 0.8*contentW
        }
        const {openDrawer,toggleDrawer,succed}=this.props;
        return(
            
            <MuiThemeProvider >
                <Drawer docked={false} width={contentW} open={openDrawer} onRequestChange={toggleDrawer}>
                    <p>this is drawer</p>
                    {!succed&&<div className='loginBox'>
                        <Link to='/login'>
                            <Avatar  backgroundColor={'rgb(0,188,212)'} size={80}>
                                <i className="iconfont" dangerouslySetInnerHTML={{__html: '&#xe60f;'}}></i>
                            </Avatar>
                        </Link>
                            <p>点击头像登陆</p>
                        </div>}
                    

                </Drawer>
                
            </MuiThemeProvider>
              
           
        )
    }
}
export default MyDrawer;