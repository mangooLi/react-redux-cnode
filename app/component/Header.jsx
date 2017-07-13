

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { addToDo } from '../action/action.js';
class Header extends Component{
    constructor(props){
        super(props);
        this.state={
            val:'',
            ipt:null
        }
      
    }
   
 
    render(){
      
        return(
            <div className="navigation">
                <Row className='navbar' type="flex" justify="center" align="middle">
                    <Col span={6}><Link to='/'>All</Link></Col>
                    <Col span={6}><Link to='/todo'>Todo</Link></Col>
                    <Col span={6}><Link to='/doing'>Doing</Link></Col>
                    <Col span={6}><Link to='/done'>Done</Link></Col>
                </Row>
            </div>
           
        )
    }
}

export default connect()(Header);