import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
// import Header from '../components/Header';
// import Navigation from '../components/Navigation';
import { addToDo } from './action/action.js';
// import './App.less';


class App extends Component{
    constructor(props){
        super(props);

        this.state={
            val:''
        }
    }
    enter=()=>{
        var value='e.target.value';
        this.setState({val:value})
    }
    submit=()=>{
        const {dispatch}=this.props;
        dispatch(addTodo(this.state.val));
    }

    render(){
        const {todoList} =this.props;
        
        let todos=todoList.map(todo=>{
            return <div>{todo.text}</div>
        })

        return(<div>
            {todos}
            <div className="addToDoIpt">
                <input type="text" onChange={this.enter}/>
                <button onClick={this.submit}/>
            </div>
        </div>)
    }
}

export default connect()(App);