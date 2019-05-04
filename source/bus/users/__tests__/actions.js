import { types } from '../types';

import { usersActions } from '../actions';

describe('users actions: ', () => {
    test('clearUsers', () => {
        expect(usersActions.clearUsers()).toEqual({
            type: types.CLEAR_USERS,
        });
    });

    test('fillUsers', () => {
        expect(usersActions.fillUsers()).toEqual({
            type: types.FILL_USERS,
        });
    });

    test('fetchUsersAsync', () => {
        expect(usersActions.fetchUsersAsync()).toEqual({
            type: types.FETCH_USERS_ASYNC,
        });
    });
});