import { combineReducers, applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import * as reducers from '../reducers';

console.log(reducers);

// Construct our Redux store;
const rootReducer = combineReducers(reducers);
const logger = createLogger({ collapsed: true });
const middleware = (applyMiddleware(thunkMiddleware, logger));
const initialState ={};


const store = createStore(rootReducer, middleware);


export default store;
