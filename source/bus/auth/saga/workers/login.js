import { api } from '../../../../REST';
import { authAction } from '../../actions';
import { put, apply } from 'redux-saga/effects';
import { uiActions } from '../../../ui/actions';
import { profileActions } from '../../../profile/actions';

export function* login({payload: credentials}) {
    try {
        yield put(uiActions.startFetching());
        const response = yield apply(api, api.auth.login, [credentials]);
        const { data: profile, message } = yield apply(response, response.json);

        if (response.status !== 200) {
            throw new Error( message );
        }

        if (credentials.remember) {
            yield apply(localStorage, localStorage.setItem, ['remember', true]);
        }
        yield apply(localStorage, localStorage.setItem, ['token', profile.token]);

        yield put(profileActions.fillProfile(profile));
        yield put(authAction.authenticate());

    } catch (e) {
        yield put(uiActions.emitError(e , 'login worker'));
    } finally {
        yield put(uiActions.stopFetching());
    }
}