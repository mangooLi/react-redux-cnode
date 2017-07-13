

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToDo } from '../action/action.js';
import Item from '../component/item'
class AllPage extends Component{
    constructor(props){
        super(props);
        this.state={
            val:'',
            ipt:null
        }
      
    }
   
 
    render(){
        const {todoList} =this.props;
        
        let todos=todoList.map(todo=>{
            return <Item key={todo.id} text={todo.todo}></Item>
        })
        return(
            <div className="allPage">
               {todos}
            </div>
           
        )
    }
}
const mapStateToProps=(state)=>{
   
    return {todoList:state.todoList}
}
export default connect(mapStateToProps)(AllPage);