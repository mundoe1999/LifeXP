//Import the list of actions from type for user actions
import { FETCH_USERS, ADD_NEW_USER, REMOVE_USER, FETCH_USER, ADD_USER_TO_BOARD, GET_USER, FETCH_USER_BY_NAME } from './types';


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

const fetchUserByName = (user) => {
  return {
    type: FETCH_USER_BY_NAME,
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

export const fetchUserByNameThunk = (username) => dispatch => {
  console.log("Blahbahba called", username)
  return axios
    .put(`/api/users/searchUsers`, username)
    .then(res => {
      console.log(res.data);
      dispatch(fetchUserByName(res.data))
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


/*Waste */

const gotMe = (user) => ({
  type: GET_USER,
  user
})

export const getMe = () => dispatch => {
  return axios.get('/auth/me')
    .then(res => res.data)
    .then(user => dispatch(gotMe(user)))
    .catch(console.error.bind(console))

}



export const login = (formData) => dispatch => {
  return axios.put('/auth/login', formData)
    .then(res => res.data)
    .then(user => dispatch(gotMe(user)))
    .catch(console.error.bind(console))

}


