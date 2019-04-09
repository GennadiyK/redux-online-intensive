import { api } from '../../../../REST/index';
import { postsActions} from '../../actions';
import { put, apply } from 'redux-saga/effects';
import { uiActions } from '../../../ui/actions';

export function* fetchPosts() {
    try {
        yield put(uiActions.startFetching());
        const response = yield apply(api, api.posts.fetch);
        const { data, message } = yield apply(response, response.json);

        if (response.status !== 200) {
            throw new Error( message );
        }
        yield put(postsActions.fillPosts(data));
        yield put(uiActions.stopFetching());

    } catch (e) {
        yield put(uiActions.emitError(e , 'fetchPost worker'));
    } finally {
        yield put(uiActions.stopFetching());
    }
}