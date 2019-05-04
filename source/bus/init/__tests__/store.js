import { createStore, combineReducers } from 'redux';
import { routerReducer as router  } from 'react-router-redux';

import { postsReducer as posts } from '../../posts/reducer';
import { uiReducer as ui } from '../../ui/reducer';
import { authReducer as auth } from '../../auth/reducer';
import { profileRducer as profile } from '../../profile/reducer';
import { usersReducer as users } from '../../users/reducer';
import { formsReducer as forms } from '../../forms/reducer';

import { store } from '../store';

const referenceRootReducer = combineReducers({
    posts,
    ui,
    auth,
    profile,
    users,
    forms,
    router,
});

const referenceStore = createStore(referenceRootReducer);

describe('store:', () => {
   test('should have valid state shape', () => {
       expect(store.getState()).toEqual(referenceStore.getState());
   })
});