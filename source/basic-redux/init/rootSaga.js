import { all, call } from 'redux-saga/effects';
import { watchPosts }  from '../../basic-redux/bus/posts/saga/watchers';

export function* rootSaga () {
    yield all([call(watchPosts)]);
}