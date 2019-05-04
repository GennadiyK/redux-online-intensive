import { takeEvery, all, call } from 'redux-saga/effects';
import { types } from '../types';
import { updateName, updateAvatar, updatePassword } from './workers';

export function* watchUpdateNameWorker() {
    yield takeEvery(types.UPDATE_NAME_ASYNC, updateName);
}

export function* watchUpdateAvatarWorker() {
    yield takeEvery(types.UPDATE_AVATAR_ASYNC, updateAvatar);
}

export function* watchUpdatePasswordWorker() {
    yield takeEvery(types.UPDATE_PASSWORD_ASYNC, updatePassword);
}


export function* watchProfile() {
    yield all([call(watchUpdateNameWorker), call(watchUpdateAvatarWorker), call(watchUpdatePasswordWorker)]);
}