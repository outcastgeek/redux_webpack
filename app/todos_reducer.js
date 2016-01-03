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

const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ];
        case 'TOGGLE_TODO':
            return state.map(todo => {
                if (todo.id !== action.id) {
                    return todo;
                }
                return {
                    ...todo,
                    completed: !todo.completed
                };
            });
        default:
            return state;
    }
};

module.exports = {
    toggleTodo: toggleTodo,
    todos: todos
}
