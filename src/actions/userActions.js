//Import the list of actions from type for user actions
import { FETCH_USERS, ADD_NEW_USER, REMOVE_USER, FETCH_USER, ADD_USER_TO_BOARD } from './types';


import axios from 'axios';

/*Helper functions used in the thunks, they create actions containing
the action type and payload

Interacts with the reducer, as the type matches a type in the reducer
*/

const fetchUsers = (user) => {
  return {
    type: FETCH_USERS,
    payload: user
  }
}

const fetchUser = (user) => {
  return {
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

const addUserToBoard = (user) => {
  return {
    type: ADD_USER_TO_BOARD,
    payload: user
  }
}

const removeUser = (userId) => {
  return {
    type: REMOVE_USER,
    payload: userId
  }
}



// ************************************ THUNK CREATORS ************************************
/*the thunks fire off the actions above using dispatch, the object is passed 
as an argument with the data recieved from the axios api call
*/


export const fetchAllUsersThunk = () => dispatch => {
  return axios
    .get('/api/users')
    .then(res => res.data)
    .then(data => dispatch(fetchUsers(data)))
    .catch(err => console.log(err));
};

export const fetchUserThunk = (userId) => dispatch => {
  console.log("fetchUser called on", userId)
  console.log(`/api/users/${userId}`)
  return axios
    .get(`/api/users/${userId}`)
    .then(res => {
      dispatch(fetchUser(res.data))
    })
};


export const addNewUserThunk = (user) => (dispatch) => {
  return axios
    .post("/api/users", user)
    .then(res => res.data)
    // .then(res => console.log("res in thunk: ", res.id))
    .then(dispatch(addNewUser()))
    .catch(err => console.log(err));
}

export const deleteUserThunk = (userId) => (dispatch) => {
  return axios
    .delete("/api/users", userId)
    .then(res => res.data)
    .then(data => dispatch(removeUser()))
    .catch(err => console.log(err));
}

export const addUserToBoardThunk = (user) => (dispatch) => {
  return axios
    .put(`/api/board/`, user)
    .then(res => res.data)
    //might not need taht data part, jsut the then
    .then(data => dispatch(addUserToBoard()))
    .catch(err => console.log(err));
}