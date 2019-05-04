import { api } from '../../../../REST/index';
import { profileActions} from '../../actions';
import { put, apply } from 'redux-saga/effects';
import { uiActions } from '../../../ui/actions';

export function* updatePassword({payload: {newPassword, oldPassword }}) {
    try {
         yield put(uiActions.startFetching());
         console.log(newPassword)
        const response = yield apply(api, api.profile.updateProfile, [{newPassword, oldPassword}]);
        const { data: updateProfile, message } = yield apply(response, response.json);

        if (response.status !== 200) {
            throw new Error( message );
        }
        yield put(profileActions.fillProfile(updateProfile));
    } catch (e) {
     yield put(uiActions.emitError(e , 'updatePassword worker'));
    } finally {
        yield put(uiActions.stopFetching());
    }
}