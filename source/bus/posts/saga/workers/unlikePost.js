import { api } from '../../../../REST/index';
import { postsActions} from '../../actions';
import { put, apply, select } from 'redux-saga/effects';
import { uiActions } from '../../../ui/actions';

export function* unlikePost({ payload: postId }) {
    try {
        yield put(uiActions.startFetching());
        const response = yield apply(api, api.posts.like, [postId]);
        if (response.status !== 204) {
            const { message } = yield apply(response, response.json);
            throw new Error( message );
        }

        const liker = yield select((state) => {
            return state.profile.removeAll(['avatar', 'token']);
        })

        yield put(postsActions.unlikePost({liker, postId}));
        yield put(uiActions.stopFetching());

    } catch (e) {
        yield put(uiActions.emitError(e , 'unLikePost worker'));
    } finally {
        yield put(uiActions.stopFetching());
    }
}