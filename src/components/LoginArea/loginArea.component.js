import React from 'react';
import {dimension} from '../../constants/constants';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import Icon from 'react-native-vector-icons/Ionicons';
import CircularButton from '../CircularButton/circularbutton.component';
import PhoneInput from '../PhoneInput/phoneInput.component';
import PasswordInput from '../PasswordInput/passwordInput.component';

import {
  TextInput,
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';

const myIcon = <Icon name="ios-lock" size={25} color="black" />;

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
            </View>
        )
    }
};

const modalHeight = dimension.height * 0.35;
const modalWidth = dimension.width;

const styles = StyleSheet.create({
    loginArea: {
        flex: 5,
        width: modalWidth,
        

    },

    loginSpace: {
        marginTop: modalHeight *0.15,
        backgroundColor: 'white',
        height: modalHeight * 0.4,
        width: modalWidth * 0.75,
        borderTopRightRadius: 50,
        borderBottomRightRadius: 50
    }
})

export default LoginArea;