import React from 'react';
import {dimension} from '../../constants/constants';
import LoginArea from '../LoginArea/loginArea.component';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import {connect} from 'react-redux';
import {setLoginModalClose} from '../../redux/LoginModal/loginmodal.actions';
import ForgotPasswordModal from '../ForgetPasswordModal/forgetPasswordModal.components';
import VerificationModal from '../VerificationModal/verificationModal.component';
import { setForgotPasswordModalClose} from '../../redux/ForgetPasswordModal/forgetpassword.actions';
import {DisableVerificationModal} from '../../redux/ForgotVerificationModal/forgotverification.actions';

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

    const {modalState, modalClose, forgotPasswordState, forgotPassClose, verificationModal, verificationModalClose} = props;

    const renderModal = () => {
        if(forgotPasswordState){
            return (
                <View style = {styles.modalSpace}>
                    <Text style = {styles.header_login}>
                            'Forgot Password'
                    </Text>
                    <ForgotPasswordModal/>
                </View>
            )
        }

        else if(verificationModal){
            return (
                <View style = {styles.modalSpace}>
                    <Text style = {styles.header_login}>
                            'Verification'
                    </Text>
                    <VerificationModal/>
                </View>
            )
        }
        else {
            
        }
    }

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalState}
            onRequestClose = {() => {
                modalClose();
                forgotPassClose();
                verificationModalClose();
                
            }
                }
        >
            <TouchableWithoutFeedback onPress = {Keyboard.dismiss}>
                <KeyboardAvoidingView style = {styles.modalSlide} behavior='padding'>
                    <View style = {styles.modalSpace}>
                        <Text style = {styles.header_login}>
                        {
                            forgotPasswordState ? (verificationModal ? 'Verification' : 'Forgot Password') : 'Login' 
                        }
                        </Text>
                        {
                            forgotPasswordState ? (verificationModal ? <VerificationModal/> : <ForgotPasswordModal/> ) : <LoginArea/>
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
    verificationModal: state.verificationModal.verificationModalState
});

const mapDispatchToProps = dispatch => ({
    modalClose: () => dispatch(setLoginModalClose()),
    forgotPassClose: () => dispatch(setForgotPasswordModalClose()),
    verificationModalClose: () => dispatch(DisableVerificationModal())
})

export default connect(mapStateToProps, mapDispatchToProps)(PopUpModal);

