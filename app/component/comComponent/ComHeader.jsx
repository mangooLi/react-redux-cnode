import React, { Component } from 'react';
import {Link} from 'react-router'
import { connect } from 'react-redux';
import { browserHistory } from 'react-router'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

class ComHeader extends Component{
    constructor(props){
        super(props);
        
      
    }
    back=()=>{
        browserHistory.push('/home')
    }
 
    render(){
        const {title }=this.props;
        return(
            <MuiThemeProvider>
                <div className='com-header'>
                    <AppBar title={title} onLeftIconButtonTouchTap={this.back} iconElementLeft={
                        <span className='btn-back'>&lt;</span>
                    }>

                    </AppBar>
                </div>
            </MuiThemeProvider>
        )
    }
}
export default ComHeader;