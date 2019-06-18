import { FETCH_BOARDS, NEW_BOARD } from './types';

export const fetchBoards = () => dispatch => {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(boards =>
      dispatch({
        type: FETCH_BOARDS,
        payload: boards
      })
    );
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
