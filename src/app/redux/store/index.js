import { createStore, applyMiddleware, compose } from 'redux';
import reducers from '../reducers';
import middleware from '../middleware';

let preloadState = {};
if (typeof window != 'undefined' && window.__PRELOAD_STATE__) {
  preloadState = window.__PRELOAD_STATE__;
  delete window.__PRELOAD_STATE__;
}

const composeEnhancers = (typeof window != 'undefined') ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose : compose;
const store = createStore(reducers, preloadState, composeEnhancers(
  applyMiddleware(...middleware),
));

export default store;
