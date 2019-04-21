import { fromJS, List } from 'immutable';

import { types } from './types';

const initialState = List();

export const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FILL_POSTS:
            return fromJS(action.payload);
        case types.CREATE_POST:
            return state.unshift(fromJS(action.payload));
        case types.CLEAR_POSTS:
            return state.clear();
        case types.REMOVE_POST:
            return state.filter(( item ) => {
                return item.get('id') !== action.payload;
            })
            return state;
        default:
            return state;
    }
};
