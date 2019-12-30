import { combineReducers } from 'redux';  

/* Import the reducers here */
import loginModal from './LoginModal/loginmodal.reducer';
import forgotPasswordReducer from './ForgetPasswordModal/forgetPassword.reducer'
import forgotVerification from './ForgotVerificationModal/forgotverification.reducer';

export default combineReducers({
    loginModal: loginModal,
    forgetPasswordModal: forgotPasswordReducer,
    verificationModal: forgotVerification
});