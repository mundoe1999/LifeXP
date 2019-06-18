import { FETCH_BOARDS, ADD_BOARD, FETCH_ALL_BOARDS, FETCH_BOARD } from '../actions/types';


const initialState = {
  items: [],
  item: {}
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_BOARDS:
      return {
        ...state,
        items: action.payload
      };
    case FETCH_ALL_BOARDS:
      return {
        ...state,
        items: action.payload
      };
    case ADD_BOARD:
      return {
        ...state,
        item: action.payload
      };
    case FETCH_BOARD:
      return {
        ...state,
        item: action.payload
      };
    default:
      return state;
  }
}
