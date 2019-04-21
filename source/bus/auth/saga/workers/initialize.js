import { api } from '../../../../REST';
import { authAction } from '../../actions';
import { put, apply } from 'redux-saga/effects';
import { uiActions } from '../../../ui/actions';
import { profileActions } from '../../../profile/actions';

export function* initialize() {
    const token = yield apply(localStorage, localStorage.getItem,['token']);
    const remember = yield apply(localStorage, localStorage.getItem,['remember']);

    if(token && remember) {
        yield put(authAction.authenticateAsync())
    } else {
        yield  put(authAction.initialize());
    }
}