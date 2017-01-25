import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import wrapper from './wrapper';

import Home from './container/home/index';
import Artical from './container/article/index';


export default
    <Router history={hashHistory}>
        <Route path="/">
            <IndexRoute component={wrapper(Home)}></IndexRoute>
            <Route path="/article/:path" component={wrapper(Artical)}></Route>
        </Route>
    </Router>
