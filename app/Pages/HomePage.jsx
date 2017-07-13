
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
//ui组件
import {Tabs, Tab} from 'material-ui/Tabs';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlipMove from 'react-flip-move'
//内部组件
import Header from '../component/HomePage/Header';
import Topics from '../component/HomePage/topics';
import DataService from '../service/dataService.js'
import './homePage.less';
class HomePage extends Component{
    constructor(){
        super();
        this.state={
            charpters:['全部','精华','分享','问答','招聘'],
            test:0,
            topics:[]
        }
    }

    componentDidMount(){
        DataService.getTopic(1,'',20,true).then(res=>{
            console.log(res);
            this.setState({topics:res.data})
        })
    }
   
 
    render(){
        const {test,charpters}=this.state;
        let enterAnimation = {
            from: { transform: 'translateY(-80px)',opacity:0 },
            to:   { transform: 'translateY(0)',opacity:1 }
        }
        return(
            <MuiThemeProvider>
                <div className="homepage">
                    <Header></Header>
                    
                    <Tabs>
                        {charpters.map((item,index)=>{
                                return (<Tab key={index} label={item} >
                                    <FlipMove  enterAnimation={enterAnimation} easing='ease-out' duration='400' staggerDelayBy='40' staggerDurationBy='4'>
                                         <Topics key={index} topics={this.state.topics.slice(4*index,4*index+4)}/>
                                    </FlipMove>
                                       
                                    </Tab>)
                        })}

                    </Tabs>
                    
                </div>
            </MuiThemeProvider>
        )
    }
}
const mapStateToProps=(state)=>{
   
    return {todoList:state.todoList}
}
export default connect(mapStateToProps)(HomePage);