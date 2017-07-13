import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class Item extends Component{
    constructor(props){
        super(props);

      
    }
 
    render(){
      
        return(<div>
           <p >{this.props.text}</p>
           
        </div>)
    }
}