

import { FETCH_USERS, ADD_NEW_USER, FETCH_USER, REMOVE_USER } from '../actions/types';

//initial state for the actions is empty, use this to store payload
const initialState = {
  items: [],
  item: {}
};


/*
User Reducer: Reads the action type and executes some non-mutating
data processing. Returns a copy of a new state to allow modification of the store
*/
export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_USERS:
      return {
        ...state,
        items: action.payload
      };
    case ADD_NEW_USER:
      return {
        ...state,
        item: action.payload
      };
    case FETCH_USER:
      return {
        ...state,
        item: action.payload
      };
    case REMOVE_USER:
      return {
        ...state,
        item: action.payload
      }
    default:
      return state;
  }
}
