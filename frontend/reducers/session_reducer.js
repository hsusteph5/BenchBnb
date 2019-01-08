import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER} from '../actions/sesion_actions';

const sessionReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_CURRENT_USER: 
            return { id: action.currentUser.id };
        case LOGOUT_CURRENT_USER: 
            return { id: null}
        default: 
            return state; 
    }
};

export default sessionReducer;