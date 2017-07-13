

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {  changeTodoToDoing} from '../action/action.js';
import Item from '../component/item'

class TodoPage extends Component{
    constructor(props){
        super(props);
        
    }
    changeToDoing=(id)=>{
        const {dispatch}=this.props;
        dispatch(changeTodoToDoing(id));
    }
 
    render(){
        const {todoList} =this.props;
        
        let todos=todoList.map(todo=>{
            if(todo.istodo){
                return (<div key={todo.id} ><button onClick={this.changeToDoing.bind(this,todo.id)}>to doing</button><Item  text={todo.todo}></Item></div>)
            }else{
                return true
            }
            
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
export default connect(mapStateToProps)(TodoPage);