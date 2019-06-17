import axios from 'axios';

// let initialState = {};

// ************************************ ACTION TYPES ************************************
const FETCH_BOARD = "FETCH_BOARD"
const FETCH_ALL_BOARDS = "FETCH_ALL_BOARDS";
const ADD_BOARD = "ADD_BOARD";
const REMOVE_BOARD = "REMOVE_BOARD";

// ************************************ ACTION CREATORS ************************************
const fetchBoard = (board) => {
    return {
        type: FETCH_BOARD,
        payload: board 
    }
}

const fetchAllBoard = (boards) => {
    return {
        type: FETCH_ALL_BOARDS,
        payload: boards
    }
}

const removeBoard = (board) => {
    return {
        type: REMOVE_BOARD,
        payload: board
    }
}

// ************************************ THUNK CREATORS ************************************
export const fetchBoardThunk = (boardId) => (dispatch) => {
    return axios
        .get("/api/boards/" + boardId)
        .then(response => response.data)
        .then(data => dispatch(fetchBoard(data)))
        .catch(err => console.log(err));
} 

export const fetchAllBoardThunk = (userId) => (dispatch) => {
    return axios
        .get("/api/boardId")
        .then(response => response.data)
        .then(data => dispatch(fetchAllBoard(data)))
        .catch(err => console.log(err));
}

export const removeBoardThunk = (boardId) => (dispatch) => {
    return dispatch(removeBoard(boardId));
}

// ************************************ REDUCER ************************************
export default (state = {campus: [], singleBoard: {}}, action) => {
    switch (action.type) {
        case FETCH_BOARD: 
            return {
                ...state, singleBoard: action.payload
            } 
        case FETCH_ALL_BOARDS:
            return {
                ...state, boards: action.payload
            }
        case ADD_BOARD: 
            return {};
        case REMOVE_BOARD:
            return {};
        default:
            return state;
    }
}
