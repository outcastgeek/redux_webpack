/**
 * Created by outcastgeek on 1/6/16.
 */

import { createStore, applyMiddleware, compose } from 'redux';

import { counter } from '../reducers/count_reducer';
import { todos } from '../reducers/todos_reducer';

import DevTools from '../dev/DevTools';

import { persistState } from 'redux-devtools';

const getDebugSessionKey = () => {
    // You can write custom logic here!
    // By default we try to read the key from ?debug_session=<key> in the address bar
    const matches = window.location.href.match(/[?&]debug_session=([^&]+)\b/);
    return (matches && matches.length > 0) ? matches[1] : null;
};

const finalCreateStore = compose(
    // Middleware you want to use in development:
    //applyMiddleware(d1, d2, d3),
    // Required! Enable Redux DevTools with the monitors you chose
    DevTools.instrument(),
    // Optional. Lets you write ?debug_session=<key> in the address bar to persist debug sessions
    persistState(getDebugSessionKey())
)(createStore);

const configureStore = (reducer, initialState) => {
    const store = finalCreateStore(reducer, initialState);

    // Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
    if (module.hot) {
        module.hot.accept('../reducers', () =>
            store.replaceReducer(require('../reducers')/* .default if you use Babel 6+ */)
        );
    }

    return store;
};

module.exports = {
    countStore: configureStore(counter),
    todoSore: configureStore(todos)
}
