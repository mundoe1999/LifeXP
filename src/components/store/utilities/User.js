import axios from 'axios';

// let initialState = {};

// ************************************ ACTION TYPES ************************************
const FETCH_USER = "FETCH_USER"

//Work on user first, then solidify names
//const FETCH_WORKSPACE = "FETCH_WORKSPACE";

// ************************************ ACTION CREATORS ************************************
const fetchUser= (user) => {
    return {
        type: FETCH_USER,
        payload: user 
    }
}

// ************************************ THUNK CREATORS ************************************
export const fetchUserThheunk = (id) => (dispatch) => {
    return axios
    //Modify api address here. Need proper api first
        .get("/api/users/" + id)
        .then(response => response.data)
        .then(data => dispatch(fetchUser(data)))
        .catch(err => console.log(err));
} 

// ************************************ REDUCER ************************************
export default (state = {users: [], singleUser: {}}, action) => {
    switch (action.type) {
        case FETCH_USER: 
            return {
                ...state, singleUSer: action.payload
            } 
        default:
            return state;
    }
}

