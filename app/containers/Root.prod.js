/**
 * Created by outcastgeek on 1/6/16.
 */

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { CounterView } from './counter_view';

export default class Root extends Component {
    render() {
        const countStore = this.props.countStore;
        return (
            <CounterView
                value={countStore.getState()}
                onIncrement={() => countStore.dispatch({ type: 'INCREMENT' })}
                onDecrement={() => countStore.dispatch({ type: 'DECREMENT' })}
            />
        );
    };
}
