import React from 'react';
import Dom from 'react-dom';
import Router from './router/router';
import TopBar from './container/topBar'
import './assets/common/common.css';
import reducer from './reducers/reducers';
import {createStore} from 'redux';
import {Provider} from 'react-redux'

let store = createStore(reducer);

Dom.render(
    <Provider store={store}>
        <div>
            <TopBar/>
            <Router/>
        </div>
    </Provider>,
    document.getElementById("app")
);