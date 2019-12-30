import React from 'react';
import {dimension} from '../../constants/constants';
import LoginArea from '../LoginArea/loginArea.component';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import {connect} from 'react-redux';
import {setLoginModalClose} from '../../redux/LoginModal/loginmodal.actions';
import ForgotPasswordModal from '../ForgetPasswordModal/forgetPasswordModal.components';
import VerificationModal from '../VerificationModal/verificationModal.component';
import { setForgotPasswordModalClose} from '../../redux/ForgetPasswordModal/forgetpassword.actions';
import {DisableVerificationModal} from '../../redux/ForgotRegisterVerificationModal/forgotregisterverification.actions';
import RegisterModal from '../RegisterModal/registermodal.component';
import {DisableRegisterModal} from '../../redux/RegisterModal/registerModal.actions';


import {
  KeyboardAvoidingView,
  StyleSheet,
  View,
  Text,
  Modal,
  Keyboard,
  TouchableWithoutFeedback
} from 'react-native';

const PopUpModal = (props) => {

    const {modalState, modalClose, forgotPasswordState, forgotPassClose, verificationModalState, verificationModalClose, registerModalState, registerModalClose} = props;

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalState}
            onRequestClose = {() => {
                modalClose();
                forgotPassClose();
                verificationModalClose();
                registerModalClose();
                
            }
                }
        >
            <TouchableWithoutFeedback onPress = {Keyboard.dismiss}>
                <KeyboardAvoidingView style = {styles.modalSlide} behavior='padding'>
                    <View style = {styles.modalSpace}>
                        <Text style = {styles.header_login}>
                        {
                            forgotPasswordState ? (verificationModalState ? 'Verification' : 'Forgot Password') : 'Login' 
                        }
                        </Text>
                        {
                            forgotPasswordState ? (verificationModalState ? <VerificationModal/> : <ForgotPasswordModal/> ) : (registerModalState ? (verificationModalState ? <VerificationModal/> : <RegisterModal/>): <LoginArea/>)  
                        }
                
                    </View>
                </KeyboardAvoidingView>
            </TouchableWithoutFeedback>
        </Modal>
    
    );
}



const modalHeight = dimension.height * 0.30;
const modalWidth = dimension.width;

const styles = StyleSheet.create({
    modalSlide: {
        height: dimension.height,
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column-reverse',
    },
    modalSpace: {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#fafafa',
        height: modalHeight,
        borderTopRightRadius: 50,
        borderTopLeftRadius: 50
    },
    
    header_login: {
        height: modalHeight *0.2,
        width: modalWidth *0.5,
        fontFamily: 'Quicksand-Light',
        fontSize: RFValue(20),
        textAlign: "center",
        letterSpacing: 10,
    }
})

const mapStateToProps = state => ({
    modalState: state.loginModal.modal,
    forgotPasswordState: state.forgetPasswordModal.forgotPasswordModal,
    verificationModalState: state.verificationModal.verificationModalState,
    registerModalState: state.registerModal.registerModal
});

const mapDispatchToProps = dispatch => ({
    modalClose: () => dispatch(setLoginModalClose()),
    forgotPassClose: () => dispatch(setForgotPasswordModalClose()),
    verificationModalClose: () => dispatch(DisableVerificationModal()),
    registerModalClose: () => dispatch(DisableRegisterModal())
})

export default connect(mapStateToProps, mapDispatchToProps)(PopUpModal);

