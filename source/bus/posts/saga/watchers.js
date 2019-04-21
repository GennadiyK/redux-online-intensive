import { takeEvery, all, call } from 'redux-saga/effects';
import { types } from '../types';
import { createPost, fetchPosts, removePost, likePost } from './workers/index';

export function* watchCreatePost() {
    yield takeEvery(types.CREATE_POST_ASYNC, createPost);
}

export function* watchFetchPost() {
    yield takeEvery(types.FETCH_POSTS, fetchPosts);
}

export function* watchRemovePost() {
    yield takeEvery(types.REMOVE_POST_ASYNC, removePost);
}

export function* watchLikePost() {
    yield takeEvery(types.LIKE_POST_ASYNC, likePost);
}

export function* watchPosts() {
    yield all([call(watchCreatePost), call(watchFetchPost), call(watchRemovePost), call(watchLikePost)]);
}