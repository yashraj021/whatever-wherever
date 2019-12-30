import React from 'react';
import {dimension} from '../../constants/constants';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import CircularButton from '../CircularButton/circularbutton.component';
import PhoneInput from '../PhoneInput/phoneInput.component';
import PasswordInput from '../PasswordInput/passwordInput.component';
import {connect} from 'react-redux';
import {setForgotPasswordModalOpen,setForgotPasswordModalClose} from '../../redux/ForgetPasswordModal/forgetpassword.actions';
import {EnableRegisterModal, DisableRegisterModal} from '../../redux/RegisterModal/registerModal.actions';

import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

class LoginArea extends React.Component{
  
    state = {
        phoneno: '',
        password: ''
    }

    phoneInputHandler = (event) => {
        this.setState({phoneno: event})
    }

    passwordInputHandler = (event) => {
        this.setState({password: event})
    }

    render() {

        return(
            <View style = {styles.loginArea}>
                <View style = {styles.loginSpace}>
                    <PhoneInput phoneInputHandler = {this.phoneInputHandler}/>
                    <PasswordInput passwordInputHandler = {this.passwordInputHandler} />
                </View>
                <CircularButton/>
                <View style = {styles.recovery}>
                    <Text style = {{borderRightWidth: 1, paddingRight: RFValue(10)}} onPress = {() => {this.props.registerModalClose(); this.props.forgetModalOpen()}} >
                        Forget Password?
                    </Text>
                    <Text style = {{marginLeft: RFValue(10)}} onPress = {() => { this.props.forgetModalClose(); this.props.registerModalOpen();}}>
                        Register
                    </Text>
                </View>
            </View>
        )
    }
};

const modalHeight = dimension.height * 0.35;
const modalWidth = dimension.width;

const styles = StyleSheet.create({
    loginArea: {
        width: modalWidth,
    },

    loginSpace: {
        marginTop: modalHeight *0.1,
        backgroundColor: 'white',
        height: modalHeight * 0.4,
        width: modalWidth * 0.75,
        borderTopRightRadius: 50,
        borderBottomRightRadius: 50
    },

    recovery: {
        marginTop: RFValue(10),
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "center"
        
    }
})

const mapDispatchToProps = dispatch => ({
    forgetModalOpen: () => dispatch(setForgotPasswordModalOpen()),
    forgetModalClose: () => dispatch(setForgotPasswordModalClose()),

    registerModalOpen: () => dispatch(EnableRegisterModal()),
    registerModalClose: () => dispatch(DisableRegisterModal())
});


export default connect(null, mapDispatchToProps)(LoginArea);