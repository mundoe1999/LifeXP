import {FETCH_USER, FETCH_BOARDS} from '../actions/types';


export function fetchUser(){
    return{
        type:"FETCH_USER",
        payload:{
            userName:"",
        }
    }
}

export function fetchBoards(){
    return{
        type:"FETCH_BOARDS",
        payload:{
            boards:[]
        }
    }
}

export const INCREMENT = 'counter/INCREMENT';

