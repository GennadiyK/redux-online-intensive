import { Map } from 'immutable';
import { authAction } from '../actions';
import { authReducer } from '../reducer';

const initialState = Map({
    isAuthenticated: false,
    isInitialized: false,
});

describe('auth reducer', () => {
    test('show initial state by default', () => {
        expect(authReducer(void 0, {})).toEqual(initialState);
    })
    test('show handle AUTHENTICATE', () => {
        const res = initialState.set('isAuthenticated', true);
        expect(authReducer(void 0, authAction.authenticate())).toEqual(res);
    })
    test('show handle INITIALIZE', () => {
        const res = initialState.set('isInitialized', true);
        expect(authReducer(void 0, authAction.initialize())).toEqual(res);
    })
    test('show handle LOGOUT', () => {
        const res = initialState.set('isAuthenticated', false);
        expect(authReducer(void 0, authAction.logout())).toEqual(res);
    })
});