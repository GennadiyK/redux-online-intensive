import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';

import { rootReducer } from './rootReducer';
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

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer,  composeEnhancers(
  applyMiddleware(logger)
));