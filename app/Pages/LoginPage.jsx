
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router'
//ui组件
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
//内部组件
import Header from '../component/HomePage/Header';
import Topics from '../component/HomePage/topics';
import DataService from '../service/dataService.js'
import ComHeader from '../component/comComponent/ComHeader'
import './demo.less';

import {Get_article} from '../action/action.js'
import getSize from '../service/util.js';
import {Login,Get_collected_topics} from '../action/action.js'

class LoginPage extends Component{
    constructor(){
        super();
       
    }
    
    componentWillMount(){
       
    }
    succedPanel=()=>{

        // return ()
    }
    handleLogin=()=>{
        const {dispatch} =this.props;
        console.log('i am loging',this.refs);
        let token=this.refs.input.input.value;
        DataService.login(token).then(res=>{
            if(res.success){
                dispatch(Login(token));
                DataService.getCollectedTopics(res.loginname).then(resp=>{
                    if(resp.success){
                        console.log(resp)
                        dispatch(Get_collected_topics(resp.data))
                    }
                })
            }
        },rej=>{
            console.log('loging failed')
        })


    }
    back=()=>{
        browserHistory.push('/home')
    }
    succedPanel=()=>{
        const {collected_topics} =this.props;
        return (<div>
            
            <MuiThemeProvider>
                <List>
                    <Subheader>收藏的话题</Subheader>
                    <Divider/>
                    <TopicList collected_topics={collected_topics}/>
                </List>
            </MuiThemeProvider>
        </div>)
    }
    unSuccedPanel=()=>{
        return (<div className='unLoginPanel'>
            <TextField hintText="请输入Access Token" floatingLabelText="请输入Access Token" ref='input'/>
            <div style={{display:'inline-block',margin:'0 auto'}}>
                <Toggle label="记住登陆信息" defaultToggled={true} onToggle={this.onToggle} style={{maxWidth: 200}}/>
            </div>
            <div style={{margin:'0 auto'}}>
                <RaisedButton  label="登陆" primary={true} onClick={this.handleLogin}/>
            </div>
        </div>)
    }
 
    render(){
        const {article,succed} =this.props;
        // let _article= article?article:{title:"title",content:'content'};
        return(
            
            <MuiThemeProvider>
               
                <div className="article">
                    <ComHeader title='登陆' back={this.back}></ComHeader>
                    {/* <p>9d886899-e5bd-42d5-a6d8-1f64631a1df2</p> */}
                    {!succed && this.unSuccedPanel()}
                    {succed && this.succedPanel()}

                </div>
            </MuiThemeProvider>
        )
    }
}

const TopicList=props=>{
    const {collected_topics}=props;

    return (<div>
        {collected_topics&&collected_topics.length === 0 && <ListItem primaryText="还没有相关话题" />}
        {collected_topics.map(item=>{
            return (<ListItem key={item.id} primaryText={item.title} leftAvatar={<Avatar src={item.author.avatar_url} />}/>)
        })}
    </div>)
}
const mapStateToProps=(state)=>{
    const {login,user}=state;
    const {succed}=login;
    const {collected_topics}=user
    return {login,succed,collected_topics}
}
export default connect(mapStateToProps)(LoginPage);