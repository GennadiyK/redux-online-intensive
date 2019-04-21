import { api } from '../../../../REST/index';
import { postsActions} from '../../actions';
import { put, apply } from 'redux-saga/effects';
import { uiActions } from '../../../ui/actions';

export function* removePost({ payload: id }) {
    try {
        yield put(uiActions.startFetching());
        const response = yield apply(api, api.posts.remove, [id]);

        if (response.status !== 204) {
            const { message } = yield apply(response, response.json);
            throw new Error( message );
        }

        yield put(postsActions.removePost(id));
        yield put(uiActions.stopFetching());

    } catch (e) {
        yield put(uiActions.emitError(e , 'removePost worker'));
    } finally {
        yield put(uiActions.stopFetching());
    }
}