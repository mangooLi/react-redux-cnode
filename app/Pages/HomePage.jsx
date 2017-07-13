
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from '../component/HomePage/Header';
class HomePage extends Component{
    constructor(props){
        super(props);
    }
   
 
    render(){
       
        return(
            <div className="homepage">
                <Header></Header>
            
            </div>
           
        )
    }
}
const mapStateToProps=(state)=>{
   
    return {todoList:state.todoList}
}
export default connect(mapStateToProps)(HomePage);