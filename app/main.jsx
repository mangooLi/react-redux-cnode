import React from 'react';
import ReactDOM from 'react-dom';
import { Route, IndexRoute, browserHistory, Router } from 'react-router';
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import App from './app';
import routes from './routes'
import reducer from './reducer/index.js'
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import './main.less';

const store = createStore(reducer)
ReactDOM.render(
    <Provider store={store}>
        <Router routes={routes} history={browserHistory}/>
    </Provider>,
    document.getElementById('root')
);
