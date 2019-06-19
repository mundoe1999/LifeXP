import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';



/*Files involved with the store:
Reducers are located in ./src/reducers, the rootReducer is created and exported from
./reducers/index.js

Thunks are located in ./src/actions
./types.js exports all the types of actions for both the thunks and reducers
*/


//Initial state for setting up the store. Initially an empty object
const initialState = {};


/*array of middleware, currently only contains thunk which allows
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
