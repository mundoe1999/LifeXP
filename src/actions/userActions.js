import { FETCH_USERS, ADD_NEW_USER, REMOVE_USER, FETCH_USER } from './types';
import axios from 'axios';

const fetchUsers = (user) => {
  return{
    type: FETCH_USERS,
    payload: user
  }
}

const fetchUser = (user) => {
  return{
    type: FETCH_USER,
    payload: user
  }
}

const addNewUser = (newUser) => {
  return {
      type: ADD_NEW_USER,
      payload: newUser
  }
}

const removeUser = (userId) => {
  return{
    type: REMOVE_USER,
    payload: userId
  }
}



// ************************************ THUNK CREATORS ************************************
export const fetchAllUsersThunk = () => dispatch => {
  return axios
  .get('/api/users')
    .then(res => res.data)
    .then(data => dispatch(fetchUsers(data)))
    .catch(err => console.log(err));
};

export const fetchUserThunk = (userId) => dispatch => {
  return axios
  .get(`/api/users/${userId}`)
    .then(res => res.data)
    .then(data => dispatch(fetchUser(data)))
    .catch(err => console.log(err));
};


export const addNewUserThunk = (user) => (dispatch) => {
  return axios 
      // axios.post because we are ADDING a new user
      // remember, axios can GET, POST, PUT, DELETE
      .post("/api/users", user)
      .then(response => response.data)
      .then(data => dispatch(addNewUser()))
      .catch(err => console.log(err));
}

export const deleteUserThunk = (userId) => (dispatch) => {
  return axios 
      // axios.post because we are ADDING a new user
      // remember, axios can GET, POST, PUT, DELETE
      .delete("/api/users", userId)
      .then(response => response.data)
      .then(data => dispatch(removeUser()))
      .catch(err => console.log(err));
}