import React from 'react';
import {dimension} from '../../constants/constants';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import CircularButton from '../CircularButton/circularbutton.component';
import PhoneInput from '../PhoneInput/phoneInput.component';
import PasswordInput from '../PasswordInput/passwordInput.component';
import {connect} from 'react-redux';
import EmailInput from '../EmailInput/emailInput.component';
import {EnableEmailVerificationModal, EnableVerificationModal} from '../../redux/ForgotRegisterVerificationModal/forgotregisterverification.actions';

import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

class RegisterModal extends React.Component{
  
    state = {
        phoneno: '',
        password: '',
        email: ''
    }

    phoneInputHandler = (event) => {
        this.setState({phoneno: event})
    }

    passwordInputHandler = (event) => {
        this.setState({password: event})
    }

    emailInputHandler = event => {
        this.setState({email: event})
    }

    validate = (text) => {
        console.log(text);
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
        if(reg.test(text) === false) {
            alert("Email is Not Correct");
            return false;
        }
        else {
            this.props.EmailVerification(this.state.email);
            this.props.PhoneVerification(this.state.phoneno);
            console.log("Email is Correct");
        }
    }

    render() {

        return(
            <View style = {styles.registerArea}>
                <View style = {styles.registerSpace}>
                    <PhoneInput phoneInputHandler = {this.phoneInputHandler}/>
                    <EmailInput emailInputHandler = {this.emailInputHandler} />
                    <PasswordInput passwordInputHandler = {this.passwordInputHandler} />
                </View>
                <CircularButton onPressHandler = {() => this.validate(this.state.email)}/>
            </View>
        )
    }
};

const modalHeight = dimension.height * 0.35;
const modalWidth = dimension.width;

const styles = StyleSheet.create({
    registerArea: {
        width: modalWidth,
    },

    registerSpace: {
        backgroundColor: 'white',
        height: modalHeight * 0.6,
        width: modalWidth * 0.75,
        borderTopRightRadius: 50,
        borderBottomRightRadius: 50
    },
})

const mapDispatchToProps = dispatch => ({
    EmailVerification: value => dispatch(EnableEmailVerificationModal(value)),
    PhoneVerification: value => dispatch(EnableVerificationModal(value))
});


export default connect(null, mapDispatchToProps)(RegisterModal);