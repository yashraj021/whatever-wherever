import { combineReducers } from 'redux';  


import loginModal from './LoginModal/loginmodal.reducer';
import forgotPasswordReducer from './ForgetPasswordModal/forgetPassword.reducer'
import forgotVerification from './ForgotRegisterVerificationModal/forgotregisterverification.reducer';
import RegisterModalState from './RegisterModal/registerModal.reducer';

export default combineReducers({
    loginModal: loginModal,
    forgetPasswordModal: forgotPasswordReducer,
    verificationModal: forgotVerification,
    registerModal: RegisterModalState
});