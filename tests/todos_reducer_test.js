/**
 * Created by outcastgeek on 1/3/16.
 */

import {
    toggleTodo,
    todos,
    todoApp
} from '../app/reducers/todos_reducer';

import expect from 'expect';

import deepFreeze from 'deep-freeze';

describe('Todos Reducer Tests', () => {

    it('should toggle Todo', () => {
        const todoBefore = {
            id: 0,
            text: 'Learn Redux',
            completed: false
        };
        const todoAfter = {
            id: 0,
            text: 'Learn Redux',
            completed: true
        };

        deepFreeze(todoBefore); // Mutations are not allowed in Redux

        expect(
            toggleTodo(todoBefore)
        ).toEqual(todoAfter);
    });

    it('should add a todo', () => {
        const stateBefore = [];
        const action = {
            type: 'ADD_TODO',
            id: 0,
            text: 'Learn Redux'
        };
        const stateAfter = [
            {
                id: 0,
                text: 'Learn Redux',
                completed: false
            }
        ];

        deepFreeze(stateBefore);
        deepFreeze(action);

        expect(
            todos(stateBefore, action)
        ).toEqual(stateAfter);
    });

    it('should toggle a todo', () => {
        const stateBefore = [
            {
                id: 0,
                text: 'Learn Redux',
                completed: false
            },
            {
                id: 1,
                text: 'Go shopping',
                completed: false
            }
        ];
        const action = {
            type: 'TOGGLE_TODO',
            id: 1
        };
        const stateAfter = [
            {
                id: 0,
                text: 'Learn Redux',
                completed: false
            },
            {
                id: 1,
                text: 'Go shopping',
                completed: true
            }
        ];

        deepFreeze(stateBefore);
        deepFreeze(action);

        expect(
            todos(stateBefore, action)
        ).toEqual(stateAfter);
    });

    it('should set the visibility filter', () => {

        const stateBefore = {
            todos: [
                {
                    id: 0,
                    text: 'Learn Redux',
                    completed: false
                },
                {
                    id: 1,
                    text: 'Go shopping',
                    completed: false
                }
            ],
            visibilityFilter: 'SHOW_ALL'
        };
        const action = {
            type: 'SET_VISIBILITY_FILTER',
            filter: 'SHOW_COMPLETED'
        };
        const stateAfter = {
            todos: [
                {
                    id: 0,
                    text: 'Learn Redux',
                    completed: false
                },
                {
                    id: 1,
                    text: 'Go shopping',
                    completed: false
                }
            ],
            visibilityFilter: 'SHOW_COMPLETED'
        };

        deepFreeze(stateBefore);
        deepFreeze(action);

        expect(
            todoApp(stateBefore, action)
        ).toEqual(stateAfter);
    });

});
