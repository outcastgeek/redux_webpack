/**
 * Created by outcastgeek on 1/6/16.
 */

import { createStore, applyMiddleware, compose } from 'redux';

import { counter } from '../reducers/count_reducer';
import { todos } from '../reducers/todos_reducer';

import DevTools from '../dev/DevTools';

import { persistState } from 'redux-devtools';

const finalCreateStore = compose(
    // Middleware you want to use in production
    //applyMiddleware(p1, p2, p3)
    // Other store enhancer if you use any
)(createStore);

const configureStore = (reducer, initialState) => {
    return finalCreateStore(reducer, initialState);
};

module.exports = {
    countStore: configureStore(counter),
    todoSore: configureStore(todos)
}
