

import { FETCH_USERS, ADD_NEW_USER, FETCH_USER, REMOVE_USER } from '../actions/types';
const initialState = {
  items: [],
  item: {}
};


/*
User Reducer: Reads the action type and executes some non-mutating
data processing. Returns a copy of a new state to 
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
