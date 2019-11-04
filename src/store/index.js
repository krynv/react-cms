import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import promise from 'redux-promise';

import rootReducer from '../reducers';

const logger = createLogger();

const store = createStore(
    rootReducer,
    undefined,
    applyMiddleware(logger, promise)
);

export default store;