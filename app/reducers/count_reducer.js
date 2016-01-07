/**
 * Created by outcastgeek on 1/1/16.
 */

const counter = (state = 0, action) => {

    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
};

const addCounter = (list) => {
    return [...list, 0];
};

const removeCounter = (list, index) => {
    return [
        ...list.slice(0, index),
        ...list.slice(index + 1)
    ];
};

const incrementCounter = (list, index) => {
    return [
        ...list.slice(0, index),
        list[index] + 1,
        ...list.slice(index + 1)
    ];
};

module.exports = {
    counter: counter,
    addCounter: addCounter,
    removeCounter: removeCounter,
    incrementCounter: incrementCounter
};
