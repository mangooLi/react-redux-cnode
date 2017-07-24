import React, { Component } from 'react';
import { connect } from 'react-redux';

//ui组件
import {Tabs, Tab} from 'material-ui/Tabs';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SwipeableViews from 'react-swipeable-views';
//自定义组件
import DataService from '../service/dataService.js';
import {Add_hasRead_message,Add_unRead_message} from '../action/action.js'

class MessagePage extends Component{
    constructor(){
        super();
        this.state={
            slideIndex:0
        }
    }
    componentDidMount(){
        const {succed,token,dispatch}=this.props;
        console.log(succed,token);
        DataService.getMessage(token).then(res=>{
            console.log(res);
            if(res.sucess){
                dispatch(Add_hasRead_message(res.data.has_read_messages));
                dispatch(Add_unRead_message(res.data.hasnot_read_messages));
            }
        })
    }
    handleChange=(value)=>{
        this.setState({slideIndex:value})
    }


    render(){
        return (<div>
            <MuiThemeProvider>
                <Tabs onChange={this.handleChange} value={this.state.slideIndex}>
                    <Tab label={<h2>未读消息</h2>} value={0}></Tab>
                    <Tab label={<h2>已读消息</h2>} value={1}></Tab>
                </Tabs>
            </MuiThemeProvider>
            <SwipeableViews index={this.state.slideIndex} >
                <div>暂无未读消息</div>
                <div>你还未读取任何消息哦</div>
            </SwipeableViews>
            
        </div>)
    }
}
const mapStateToProp=(prop)=>{
    const {login,message}=prop;
    const {token,succed}=login;
    const {hasRead,unRead}=message
    return {token,succed,hasRead,unRead}
}

export default connect(mapStateToProp)(MessagePage)