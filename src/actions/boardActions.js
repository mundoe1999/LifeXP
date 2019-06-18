import { FETCH_BOARDS, ADD_BOARD, FETCH_ALL_BOARDS } from './types';
import axios from 'axios';

const fetchAllBoards = (boards) => {
  return {
    type: FETCH_ALL_BOARDS,
    payload: boards
  }
}
const addBoard = (board) =>{
  return{
      type: ADD_BOARD,
      payload: board
  }
}


export const fetchBoards = () => dispatch => {
  return axios
    .get('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.data)
    .then(boards => dispatch(fetchAllBoards(boards)))
    .catch(err => console.log(err));
}


export const addBoardThunk = (initial) => (dispatch) => {
  return axios
    .post(`/api/boards/`, initial)
    .then(res => res.data)
    .then(board => dispatch(addBoard(board)))
    .catch(err => console.log(err));
}
