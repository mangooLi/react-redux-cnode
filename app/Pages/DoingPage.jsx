

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {  changeDoingToDone} from '../action/action.js';
import Item from '../component/item'

class DoingPage extends Component{
    constructor(props){
        super(props);
        
    }
    changeToDone=(id)=>{
        const {dispatch}=this.props;
        dispatch(changeDoingToDone(id));
    }
 
    render(){
        const {todoList} =this.props;
        
        let todos=todoList.map(todo=>{
            if(todo.doing){
                return (<div key={todo.id} ><button onClick={this.changeToDone.bind(this,todo.id)}>Done</button><Item  text={todo.todo}></Item></div>)
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
export default connect(mapStateToProps)(DoingPage);