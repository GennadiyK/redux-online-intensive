import { applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import {castomThunk} from './castom'

const logger = createLogger({
    duration: true,
    collapsed: true,
    colors: {
        title: () => '#139bfe',
        prevState: () => '#1c5faf',
        action: () => '#149945',
        nextState: () => '#a47104',
        error: () => '#ef0005',
    }
})

const composeEnhancers = __DEV__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [castomThunk];

if(__DEV__) {
    middleware.push(logger);
}

export const enhancedStore  = composeEnhancers(applyMiddleware(...middleware));
