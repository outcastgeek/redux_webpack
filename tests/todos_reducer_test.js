/**
 * Created by outcastgeek on 1/3/16.
 */

import { toggleTodo } from '../app/todos_reducer';

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

});
