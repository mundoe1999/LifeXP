import { FETCH_BOARDS, NEW_BOARD } from './types';
import axios from 'axios';

const fetchBoards = (board) => {
  return{
    type: FETCH_BOARDS,
    payload: board
  }
}

export const fetchAllBoards = () => dispatch => {
  console.log('dispatch')
  return axios
  .get('/api/boards')
    .then(res => res.data)
    .then(data => dispatch(fetchBoards(data)))
    .catch(err => console.log(err));
};

export const createBoard = boardData => dispatch => {
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'BOARD',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(boardData)
  })
    .then(res => res.json())
    .then(board =>
      dispatch({
        type: NEW_BOARD,
        payload: board
      })
    );
};
