import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import Home from './container/home/index';


export default (
    <Router history={browserHistory}>
        <Route path="/">
            <IndexRoute component={Home}></IndexRoute>
            <Route path="home" component={Home}></Route>
        </Route>
    </Router>
)
