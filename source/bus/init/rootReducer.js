import { combineReducers } from 'redux';

import { postsReducer as posts } from '../posts/reducer';
import { uiReducer as ui } from '../ui/reducer';

export const rootReducer = combineReducers({
    posts,
    ui,
});