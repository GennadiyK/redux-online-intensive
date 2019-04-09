import { takeEvery, all, call } from 'redux-saga/effects';
import { types } from '../types';
import { createPost, fetchPosts } from './workers/index';

export function* watchCreatePost() {
    yield takeEvery(types.CREATE_POST_ASYNC, createPost);
}

export function* watchFetchPost() {
    yield takeEvery(types.FETCH_POSTS, fetchPosts);
}

export function* watchPosts() {
    yield all([call(watchCreatePost), call(watchFetchPost)]);
}