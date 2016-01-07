/**
 * Created by outcastgeek on 12/31/15.
 */

import './style.css';

import'./text.scss';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { countStore, todoStore } from './store/configureStore';

// Don't do this! You're bringing DevTools into the production bundle.
import DevTools from './dev/DevTools';

class CounterView extends Component {

    render() {
        var {value, onIncrement, onDecrement} = this.props;
        return (
            <div>
                <h1 className="souligne">Count: {value}</h1>
                <button onClick={onIncrement}>+</button>
                <button onClick={onDecrement}>-</button>
            </div>
        );
    }
}

const render = () => {
    ReactDOM.render(
        <Provider store={countStore}>
            <div>
                <CounterView
                    value={countStore.getState()}
                    onIncrement={() => countStore.dispatch({ type: 'INCREMENT' })}
                    onDecrement={() => countStore.dispatch({ type: 'DECREMENT' })}
                />
                <DevTools />
            </div>
        </Provider>,
        document.getElementById('content')
    );
}

countStore.subscribe(render);

render();
