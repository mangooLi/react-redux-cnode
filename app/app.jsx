import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'antd';
// import Header from '../components/Header';
// import Navigation from '../components/Navigation';
import { addToDo } from './action/action.js';
import Item from './component/item';
import Ipt from './component/ipt';

// import './App.less';


class App extends Component{
    constructor(props){
        super(props);
    }
   

    render(){
        return(
            <div className='app'>{this.props.children}</div>
        )
    }
}



export default connect()(App);