import { FETCH_BOARDS, NEW_BOARD ,FETCH_BOARD } from './types';
import axios from 'axios';


// ************************************ THUNK CREATORS ************************************

export const fetchBoards = (id) => dispatch => {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(boards =>
      dispatch({
        type: FETCH_BOARDS,
        payload: boards
      })
    );
};

export const fetchBoard = (id) => dispatch => {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(board =>
      dispatch({
        type: FETCH_BOARD,
        payload: board
      })
    );
};

export const newBoard = boardData => dispatch => {
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(boardData)
  })
    .then(res => res.json())
    .then(post =>
      dispatch({
        type: NEW_BOARD,
        payload: boardData
      })
    );
};
