/**
 * Created by outcastgeek on 1/3/16.
 */

//const toggleTodo = (todo) => {
//    return Object.assign({}, todo, {
//        completed: !todo.completed
//    });
//    // Empty object {} gets its properties assigned
//    // from following objects, and overlapping properties
//    // from last object argument win
//};

const toggleTodo = (todo) => {
    return {
        ...todo,
        completed: !todo.completed
    };
    // Valid for ES7 (babel stage-2 preset), does not require a polyfill
};

const todo = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                id: action.id,
                text: action.text,
                completed: false
            };
        case 'TOGGLE_TODO':
            if (state.id !== action.id) {
                return state;
            }
            return {
                ...state,
                completed: !state.completed
            };
        default:
            return state;
    }
};

const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                todo(undefined, action)
            ];
        case 'TOGGLE_TODO':
            return state.map(t => todo(t, action));
        default:
            return state;
    }
};

const visibilityFilter = (
    state = 'SHOW_ALL',
    action
) => {
    switch (action.type) {
        case 'SET_VISIBILITY_FILTER':
            return action.filter;
        default:
            return state;
    }
};

import { combineReducers } from 'redux';

// Always name the reducers after the key names of the state they manage,
// so that the following shorthand notation ({key1, key2} <=> {key1: key1, key2: key2})
// which is the ES6 object literal notation
const todoApp = combineReducers({
    todos,
    visibilityFilter
});

//const todoApp = combineReducers({
//    todos: todos, // The todos field of the state object will be managed by the todos reducer
//    visibilityFilter: visibilityFilter // The vibilityFilter field of the state object will be managed by the visibilityFilter reducer
//});

//const todoApp = (state = {}, action) => {
//    return {
//        todos: todos(
//            state.todos,
//            action
//        ),
//        visibilityFilter: visibilityFilter(
//            state.visibilityFilter,
//            action
//        )
//    };
//};

module.exports = {
    toggleTodo: toggleTodo,
    todos: todos,
    todoApp: todoApp
}
