import { FETCH_BOARDS, ADD_NEW_BOARD, REMOVE_BOARD, FETCH_BOARD } from './types';
import axios from 'axios';

const fetchBoards = (board) => {
  return{
    type: FETCH_BOARDS,
    payload: board
  }
}

const fetchBoard = (board) => {
  return{
    type: FETCH_BOARD,
    payload: board
  }
}

const addNewBoard = (newBoard) => {
  return {
      type: ADD_NEW_BOARD,
      payload: newBoard
  }
}

const removeBoard = (boardId) => {
  return{
    type: REMOVE_BOARD,
    payload: boardId
  }
}



// ************************************ THUNK CREATORS ************************************
export const fetchAllBoardsThunk = () => dispatch => {
  return axios
  .get('/api/boards')
    .then(res => res.data)
    .then(data => dispatch(fetchBoards(data)))
    .catch(err => console.log(err));
};

export const fetchBoardThunk = (boardId) => dispatch => {
  return axios
  .get(`/api/boards/${boardId}`)
    .then(res => res.data)
    .then(data => dispatch(fetchBoard(data)))
    .catch(err => console.log(err));
};


export const addNewBoardThunk = (board) => (dispatch) => {
  return axios 
      // axios.post because we are ADDING a new board
      // remember, axios can GET, POST, PUT, DELETE
      .post("/api/boards", board)
      .then(response => response.data)
      .then(data => dispatch(addNewBoard()))
      .catch(err => console.log(err));
}

export const deleteBoardThunk = (boardId) => (dispatch) => {
  return axios 
      // axios.post because we are ADDING a new board
      // remember, axios can GET, POST, PUT, DELETE
      .delete("/api/boards", boardId)
      .then(response => response.data)
      .then(data => dispatch(removeBoard()))
      .catch(err => console.log(err));
}