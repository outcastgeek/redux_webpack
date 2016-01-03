/**
 * Created by outcastgeek on 1/3/16.
 */

const toggleTodo = (todo) => {
    return Object.assign({}, todo, {
        completed: !todo.completed
    });
    // Empty object {} gets its properties assigned
    // from following objects, and overlapping properties
    // from last object argument win
};

module.exports = {
    toggleTodo: toggleTodo
}
