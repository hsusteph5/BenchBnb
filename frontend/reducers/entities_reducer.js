import { combineReducers } from 'redux';
import userReducer from './user_reducer.js';
import sessionReducer from './session_reducer.js';


export default combineReducers({
    user: userReducer, 
    session: sessionReducer
});

