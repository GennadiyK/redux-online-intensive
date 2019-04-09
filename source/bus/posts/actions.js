import { types } from './types';
import { api } from '../../REST/index';

export const postsActions = {
    fillPosts: (posts) => {
        return {
            type:    types.FILL_POSTS,
            payload: posts,
        };
    },
    createPost: (post) => {
        return {
            type:   types.CREATE_POST,
            payload: post,
        };
    },
    fetchPosts: () => async (dispatch) => {
        dispatch({
            type: types.FETCH_POSTS,
        });
    },
    createPostAsync: (comment) => {
        return {
            type: types.CREATE_POST_ASYNC,
            payload: comment,
        }
    },
}
