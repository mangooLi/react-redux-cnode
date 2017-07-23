
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router'
//ui组件
import {Tabs, Tab} from 'material-ui/Tabs';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlipMove from 'react-flip-move'
//内部组件
import Header from '../component/HomePage/Header';
import Topics from '../component/HomePage/topics';
import DataService from '../service/dataService.js';
import ComHeader from '../component/comComponent/ComHeader'
import './demo.less';

import {Get_article} from '../action/action.js'
import getSize from '../service/util.js';
class ArticlePage extends Component{
    constructor(){
        super();
       
    }
    
    componentWillMount(){
        let id=this.props.params.id;
        const {dispatch} =this.props;
        DataService.getArticle(id).then(res=>{
            dispatch(Get_article(res.data))
            
        })
    }
    back=()=>{
        browserHistory.push('/home')
    }
 
    render(){
        const {article} =this.props;
        // let _article= article?article:{title:"title",content:'content'};
        return(
            
            <MuiThemeProvider>
                
                <div className="article">
                    <ComHeader title='详情' back={this.back}></ComHeader>
                    <h3>{article.title}</h3>
                    <div dangerouslySetInnerHTML={{__html:article.content}}></div>
                </div>
            </MuiThemeProvider>
        )
    }
}
const mapStateToProps=(state)=>{
    const {article}=state;
    return {article}
}
export default connect(mapStateToProps)(ArticlePage);