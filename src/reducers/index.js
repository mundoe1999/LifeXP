//index.js contains all the exports for the reducer folder. Calling this
//or the root folder will export each respecrtive reducer in this folder
//is exported in to the store as a combined reducer
import { combineReducers } from 'redux';
import boardReducer from './boardReducer';
import taskReducer from './taskReducer';
import userReducer from './userReducer';

export default combineReducers({
  boards: boardReducer,
  tasks: taskReducer,
  users: userReducer
});
