import {FETCH_BOARDS, NEW_BOARD, FETCH_BOARD} from '../actions/types';


export function fetchBoards(){
    return{
        type:FETCH_BOARDS,
        payload:{
            boards:[]
        }
    }
}

export function fetchBoard(){
    return{
        type: FETCH_BOARD,
        payload:{
            board: {}
        }
    }
}

export function newBoard(){
    return{
        type:NEW_BOARD,
        payload:{
            boards:[]
        }
    }
}



export const INCREMENT = 'counter/INCREMENT';

