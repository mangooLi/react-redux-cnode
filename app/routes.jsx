import React,{Component} from 'react';
import {Route,IndexRoute } from 'react-router';
import App from './app';
import HomePage from './Pages/HomePage'
import ArticlePage from './Pages/Article'
import LoginPage from './Pages/LoginPage'
// import

const routers=(
    <Route path='/' component={App}>
        <IndexRoute component={HomePage}/>
        <Route path='home' component={HomePage}/>
        <Route path='topic/:id' component={ArticlePage}/>
        <Route path='login' component={LoginPage}/>
       
    </Route>
)

export default routers;