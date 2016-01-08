/**
 * Created by outcastgeek on 1/6/16.
 */

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import DevTools from '../dev/DevTools';

import { CounterView } from './counter_view';

export default class Root extends Component {
    render() {
        const countStore = this.props.countStore;
        return (
            <Provider store={countStore}>
                <div>
                    <CounterView
                        value={countStore.getState()}
                        onIncrement={() => countStore.dispatch({ type: 'INCREMENT' })}
                        onDecrement={() => countStore.dispatch({ type: 'DECREMENT' })}
                    />
                    <DevTools />
                </div>
            </Provider>
        );
    };
}
