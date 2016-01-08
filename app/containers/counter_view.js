/**
 * Created by outcastgeek on 1/6/16.
 */

import React, { Component } from 'react';

export class CounterView extends Component {

    render() {
        const {value, onIncrement, onDecrement} = this.props;
        return (
            <div>
                <h1 className="souligne">Count: {value}</h1>
                <button onClick={onIncrement}>+</button>
                <button onClick={onDecrement}>-</button>
            </div>
        );
    }
}
