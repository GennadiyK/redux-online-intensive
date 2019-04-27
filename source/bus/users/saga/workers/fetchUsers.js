import { api } from '../../../../REST/index';
import { put, apply } from 'redux-saga/effects';
import { uiActions } from '../../../ui/actions';
import { usersActions } from '../../actions';

export function* fetchUsers() {
    try {
         yield put(uiActions.startFetching());
        const response = yield apply(api, api.users.fetch);
        const { data: users, message } = yield apply(response, response.json);

        if (response.status !== 200) {
            throw new Error( message );
        }
        yield put(usersActions.fillUsers(users));
    } catch (e) {
     yield put(uiActions.emitError(e , 'fetchUsers worker'));
    } finally {
        yield put(uiActions.stopFetching());
    }
}