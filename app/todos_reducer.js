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

module.exports = {
    toggleTodo: toggleTodo,
    todos: todos
}
