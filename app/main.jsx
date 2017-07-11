import React from 'react';
import ReactDOM from 'react-dom';
import { Route, IndexRoute, hashHistory, Router } from 'react-router';
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import App from './app';

import reducer from './reducer/index.js'
// import AllMemosRoute from './routes/AllMemosRoute';
// import TodoRoute from './routes/TodoRoute';
// import DoingRoute from './routes/DoingRoute';
// import DoneRoute from './routes/DoneRoute';

import './main.less';

const store = createStore(reducer)
ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route
                path="/"
                component={App}
            >
                {/*<IndexRoute component={AllMemosRoute} />
                <Route path="/todo" component={TodoRoute} />
                <Route path="/doing" component={DoingRoute} />
                <Route path="/done" component={DoneRoute} />*/}
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
);
