import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import combinedReducers from './reducers';

const middleWare = [thunk];

const reduxLogger = createLogger();

const store = createStore(combinedReducers, applyMiddleware(...middleWare, reduxLogger));

export default store;
