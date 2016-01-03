/**
 * Created by outcastgeek on 12/31/15.
 */

require('./style.css'); // imports globally

require('./text.scss'); // imports globally

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';

import { counter } from './reducer';

const store = createStore(counter);

class CounterView extends Component {

    render() {
        var {value, onIncrement, onDecrement} = this.props;
        return (
            <div>
                <h1>Count: {value}</h1>
                <button onClick={onIncrement}>+</button>
                <button onClick={onDecrement}>-</button>
            </div>
        );
    }
}

const render = () => {
    ReactDOM.render(
        <CounterView
            value={store.getState()}
            onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
            onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
        />,
        document.getElementById('content')
    );
}

store.subscribe(render);

render();
