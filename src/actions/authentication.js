import axios from 'axios';
import {AUTHENTICATED,UNAUTHENTICATED,AUTHENTICATED_ERROR} from './types';

export function signInAction({username,password}, history){
  return async (dispatch) =>{
    try {
      const res = await axios.put('/auth/login',{username,password});
      dispatch({type: AUTHENTICATED});
      localStorage.setItem('user', res.data.token);
      console.log(res.data);
      console.log(res.data.token);
    } catch(error){
      dispatch({
        type: AUTHENTICATED_ERROR,
        payload: 'Invalid email or password'
      })
    }
  }
}

export function signOutAction(){
  localStorage.clear();
  return{
    type: UNAUTHENTICATED
  };
}