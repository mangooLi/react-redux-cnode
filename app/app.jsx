import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'antd';
// import Header from '../components/Header';
// import Navigation from '../components/Navigation';
import { addToDo } from './action/action.js';
import Item from './component/item';
import Ipt from './component/ipt';
import Header from './component/Header';
// import './App.less';


class App extends Component{
    constructor(props){
        super(props);

        this.state={
            val:''
        }
    }
   

    render(){
        
       

        return(<Row justify="center" align=" middle">
            <Col span={12} offset={6} >
                <Header/>
                {this.props.children}
                <Ipt/>
            </Col>
            
            
        </Row>)
    }
}

const mapStateToProps=(state)=>{
   
    return {todoList:state.todoList}
}

export default connect(mapStateToProps)(App);