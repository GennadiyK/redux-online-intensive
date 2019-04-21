import { api } from '../../../../REST';
import { authAction } from '../../actions';
import { put, apply } from 'redux-saga/effects';
import { uiActions } from '../../../ui/actions';
import { profileActions } from '../../../profile/actions';

export function* authenticate() {
    try {
        yield put(uiActions.startFetching());
        const response = yield apply(api, api.auth.authenticate);
        const { data: profile, message } = yield apply(response, response.json);

        if (response.status !== 200) {
            throw new Error( message );
            if( response.status === 401 ) {
                yield apply(localStorage, localStorage.removeItem, ['token']);
                yield apply(localStorage, localStorage.removeItem, ['remember']);

                return null;
            }
        }

        yield apply(localStorage, localStorage.setItem, ['token', profile.token]);

        yield put(profileActions.fillProfile(profile));
        yield put(authAction.authenticate());

    } catch (e) {
        yield put(uiActions.emitError(e , 'authenticate worker'));
    } finally {
        yield put(uiActions.stopFetching());
        yield put(authAction.initialize());
    }
}