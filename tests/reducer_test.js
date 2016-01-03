/**
 * Created by outcastgeek on 1/1/16.
 */

import {
    counter,
    addCounter,
    removeCounter,
    incrementCounter
} from '../app/reducer';

import expect, { createSpy, spyOn, isSpy } from 'expect';

import deepFreeze from 'deep-freeze';

describe('Counter Reducer Tests', () => {

    it('shoud increment by one', () => {

        expect(
            counter(0, { type: 'INCREMENT' })
        ).toEqual(1);

        expect(
            counter(1, { type: 'INCREMENT' })
        ).toEqual(2);

    });

    it('shoud decrement by one', () => {

        expect(
            counter(2, { type: 'DECREMENT' })
        ).toEqual(1);

        expect(
            counter(1, { type: 'DECREMENT' })
        ).toEqual(0);


    });

    it('shoud should return original state on unknown action', () => {

        expect(
            counter(1, { type: 'SOMETHING_ELSE' })
        ).toEqual(1);

    });

    it('should return original state on undefined state by convention', () => {

        expect(
            counter(undefined, {})
        ).toEqual(0);

    });

    it('should return the same list with 0 appended', () => {

        const listBefore = [];
        const listAfter = [0];

        deepFreeze(listBefore);

        expect(
            addCounter(listBefore)
        ).toEqual(listAfter);

    });

    it('should remove list item at index 1', () => {
        const listBefore = [0, 10, 20];
        const listAfter = [0, 20];

        deepFreeze(listBefore);

        expect(
            removeCounter(listBefore, 1)
        ).toEqual(listAfter);
    });

    it('should increment the counter at index 1', () => {
        const listBefore = [0, 10, 20];
        const listAfter = [0, 11, 20];

        deepFreeze(listBefore);

        expect(
            incrementCounter(listBefore, 1)
        ).toEqual(listAfter);
    });

});
