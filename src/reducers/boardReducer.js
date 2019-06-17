import { FETCH_BOARDS, NEW_BOARD, FETCH_BOARD } from '../actions/types';
import { bindActionCreators } from 'redux';

const initialState = {
  boards: [],
  board: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_BOARDS:
      return {
        ...state,
        items: action.payload
      };
    case NEW_BOARD:
      return {
        ...state,
        item: action.payload
      };
    case FETCH_BOARD:
        return {
            ...state,
            items: action.payload
        };
    default:
      return state;
  }
}
