import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Home from './container/home/index';
import Artical from './container/artical/index';


export default
    <Router history={hashHistory}>
        <Route path="/">
            <IndexRoute component={Home}></IndexRoute>
            <Route path="/artical/:path" component={Artical}></Route>
        </Route>
    </Router>
