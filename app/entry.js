/**
 * Created by outcastgeek on 12/31/15.
 */

import './style.css';

import'./text.scss';

import React, { Component } from 'react';

import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import Root from './containers/Root';

import { countStore, todoStore } from './store/configureStore';

const render = () => {
    ReactDOM.render(
        <Root countStore={countStore} />,
        document.getElementById('content')
    );
}

countStore.subscribe(render);

render();
