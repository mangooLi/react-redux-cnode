import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class TodoItem extends Component{
    constructor(props){
        super(props);

      
    }
 
    render(){
      
        return(<div>
           <p>{this.props.text}<span>this is a tode item</span></p>
           
        </div>)
    }
}