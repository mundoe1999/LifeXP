import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

//Initial state for setting up the store. Initially an empty object
const initialState = {};


/*array of middlewear, currently only contains thunk which allows
the action creators to return a function as an action
*/
const middleware = [thunk];

//The store contains the root reducer exported from ./reducers/index.js
//the initial state, and the middlware
const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware)
  )
);

export default store;
