
import {  fromJS, List } from 'immutable';
import { usersActions } from '../actions';
import { usersReducer } from '../reducer';

const initialState = List();

describe('users reducer', () => {
    test('show initial state by default', () => {
        expect(usersReducer(void 0, {})).toEqual(initialState);
    })

    test('show handle CLEAR_USERS', () => {
        expect(usersReducer(void 0, usersActions.clearUsers())).toEqual(initialState);
    })

    test('show handle FILL_USERS', () => {
        expect(usersReducer(void 0, usersActions.fillUsers(__.userProfile))).toEqual(fromJS(__.userProfile));
    })
});