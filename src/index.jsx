import React from 'react';
import { render } from 'react-dom';
import RouterConfig from './route.config';

import reducer from './reducers/index';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';

import Style from './asserts/css/base.scss';

let middleware = [thunk];

if(process.env.NODE_ENV === 'development'){
    const logger = createLogger();
    middleware.push(logger);
}

const container = document.getElementById('app');
let store = createStore(reducer, applyMiddleware(...middleware));


render(
    <Provider store={store}>
        {RouterConfig}
    </Provider>
, container)
