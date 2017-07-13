import React,{Component} from 'react';
import {Route,IndexRoute} from 'react-router';
import App from './app';
import HomePage from './Pages/HomePage'


const routers=(
    <Route path='/' component={App}>
        <IndexRoute component={HomePage}/>
    </Route>
)

export default routers;