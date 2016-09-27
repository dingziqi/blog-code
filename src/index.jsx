import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, hashHistory, browserHistory } from 'react-router'

import Home from './container/home/index';

let container = document.getElementById('app')

const router = (
    <Router history={browserHistory}>
        <Route path="/">
            <IndexRoute component={Home}></IndexRoute>
            <Route path="home" component={Home}></Route>
        </Route>
    </Router>
);

render(
    router
, container)
