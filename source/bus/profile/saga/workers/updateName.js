import { api } from '../../../../REST/index';
import { profileActions} from '../../actions';
import { put, apply } from 'redux-saga/effects';
import { uiActions } from '../../../ui/actions';

export function* updateName({payload: firstName, lastName}) {
    try {
         yield put(uiActions.startFetching());
        const response = yield apply(api, api.profile.updateProfile, [firstName, lastName]);
        const { data: updateProfile, message } = yield apply(response, response.json);

        if (response.status !== 200) {
            throw new Error( message );
        }
        yield put(profileActions.fillProfile(updateProfile));
    } catch (e) {
     yield put(uiActions.emitError(e , 'updateName worker'));
    } finally {
        yield put(uiActions.stopFetching());
    }
}