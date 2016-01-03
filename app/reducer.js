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
    list.push(0);
    return list;
};

module.exports = {
    counter: counter,
    addCounter: addCounter
};
