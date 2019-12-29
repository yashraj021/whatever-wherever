import { combineReducers } from 'redux';  

/* Import the reducers here */
import loginModal from './LoginModal/loginmodal.reducer';

export default combineReducers({
    loginModal: loginModal
});