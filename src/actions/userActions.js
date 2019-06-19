import { FETCH_USER, FETCH_USERS ,NEW_USER } from './types';
import axios from 'axios';


// ************************************ THUNK CREATORS ************************************

export const fetchUsers = () => dispatch => {
  fetch('/api/users')
    .then(res => res.json())
    .then(users =>
      dispatch({
        type: FETCH_USERS,
        payload: users
      })
    );
};

export const fetchUser = (userId) => dispatch => {
  fetch('/api/users' + userId)
    .then(res => res.json())
    .then(user =>
      dispatch({
        type: FETCH_USER,
        payload: user
      })
    );
};

export const newUser = userData => dispatch => {
  fetch('/api/users', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(userData)
  })
    .then(res => res.json())
    .then(newUser =>
      dispatch({
        type: NEW_USER,
        payload: newUser
      })
    );
};
