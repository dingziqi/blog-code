import React from 'react'
import { render } from 'react-dom'
import RouterConfig from './route.config'

import reducer from './reducers/index'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import createLogger from 'redux-logger'
import thunk from 'redux-thunk'

import Style from './asserts/css/base.scss';

const container = document.getElementById('app')
const logger = createLogger()
let store = createStore(reducer, applyMiddleware(thunk, logger));

console.log(store.getState());

render(
    <Provider store={store}>
        {RouterConfig}
    </Provider>
, container)