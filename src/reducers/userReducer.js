

import { FETCH_USERS, ADD_NEW_USER, FETCH_USER, REMOVE_USER, GET_USER,FETCH_USER_BY_NAME } from '../actions/types';

//initial state for the actions is empty, use this to store payload
const initialState = {
  items: [],
  item: [],
  searchUsers: []
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
        items: action.payload
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
    case GET_USER:
      return {
        ...state,
        user: action.user
      }
    case FETCH_USER_BY_NAME:
      return {
        ...state,
        searchUsers: action.payload
      }
    default:
      return state;
  }
}
