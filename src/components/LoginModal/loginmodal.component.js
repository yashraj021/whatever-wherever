import React from 'react';
import {dimension} from '../../constants/constants';
import LoginArea from '../LoginArea/loginArea.component';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import {connect} from 'react-redux';
import {setLoginModal} from '../../redux/LoginModal/loginmodal.actions';
import {
  TextInput,
  KeyboardAvoidingView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Modal,
  Keyboard,
  TouchableWithoutFeedback
} from 'react-native';

const LoginModal = ({modalState, modalClose}) => (

    <Modal
        animationType="slide"
        transparent={true}
        visible={modalState}
        onRequestClose = {modalClose}
    >
    <TouchableWithoutFeedback onPress = {Keyboard.dismiss}>
        <KeyboardAvoidingView style = {styles.modalSlide} behavior='padding'>
            <View style = {styles.modalSpace}>
                <Text style = {styles.header_login}>
                    Login
                </Text>
                <LoginArea/>
            </View>
        </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
    </Modal>

);

const modalHeight = dimension.height * 0.35;
const modalWidth = dimension.width;

const styles = StyleSheet.create({
    modalSlide: {
        height: dimension.height,
        display: 'flex',
        flexDirection: 'column-reverse',
    },
    modalSpace: {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#e6e6e6',
        height: modalHeight,
        borderTopRightRadius: 50,
        borderTopLeftRadius: 50
    },
    
    header_login: {
        flex: 1,
        height: modalHeight *0.2,
        width: modalWidth *0.5,
        fontFamily: 'Quicksand-Light',
        fontSize: RFValue(30),
        textAlign: "center",
        letterSpacing: 10,
    }
})

const mapStateToProps = state => ({
    modalState: state.loginModal.modal
});

const mapDispatchToProps = dispatch => ({
    modalClose: () => dispatch(setLoginModal()) 
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginModal);

