import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'antd';
// import Header from '../components/Header';



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