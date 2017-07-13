

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToDo } from '../action/action.js';
class Ipt extends Component{
    constructor(props){
        super(props);
        this.state={
            val:'',
            ipt:null
        }
      
    }
    componentDidMount(){
        this.setState({ipt:document.querySelector('#ipt')})
    }
    enter=(e)=>{
        var value=e.target.value;
        this.setState({val:value})
    }
    submit=()=>{
        const {dispatch}=this.props;
       
        dispatch(addToDo(this.state.val));
        this.state.ipt.value='';
    }
 
    render(){
      
        return(
            <div className="addToDoIpt">
                <input id='ipt' type="text" onChange={this.enter}/>
                <button onClick={this.submit}>提交</button>
            </div>
           
        )
    }
}

export default connect()(Ipt);