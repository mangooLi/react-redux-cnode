import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
// import Header from '../components/Header';
// import Navigation from '../components/Navigation';
import { addToDo } from './action/action.js';
import TodoItem from './component/todoItem'
// import './App.less';


class App extends Component{
    constructor(props){
        super(props);

        this.state={
            val:''
        }
    }
    enter=(e)=>{
        var value=e.target.value;
        this.setState({val:value})
    }
    submit=()=>{
        const {dispatch}=this.props;
       
        dispatch(addToDo(this.state.val));
    }

    render(){
        
        const {todoList} =this.props;
        
        let todos=todoList.map(todo=>{
            return <TodoItem key={todo.id} text={todo.todo}></TodoItem>
        })

        return(<div>
            {todos}
            <div className="addToDoIpt">
                <input type="text" onChange={this.enter}/>
                <button onClick={this.submit}>提交</button>
            </div>
        </div>)
    }
}

const mapStateToProps=(state)=>{
   
    return {todoList:state.todoList}
}

export default connect(mapStateToProps)(App);