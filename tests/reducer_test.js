/**
 * Created by outcastgeek on 1/1/16.
 */

import { counter, addCounter } from '../app/reducer';

import expect, { createSpy, spyOn, isSpy } from 'expect';

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

    it('should return same list', () => {

        const listBefore = [];
        const listAfter = [0];

        expect(
            addCounter(listBefore)
        ).toEqual(listAfter);

    });

});
