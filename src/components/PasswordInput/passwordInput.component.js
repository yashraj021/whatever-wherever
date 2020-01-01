import React from 'react';
import {dimension} from '../../constants/constants';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import Icon from 'react-native-vector-icons/Ionicons';
const myIcon = <Icon name="ios-lock" size={25} color="black" />;

import {
  TextInput,
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';

const PasswordInput = ({passwordInputHandler, NewPassword}) => {
    return(
        <View style = { NewPassword ? styles.newPassword: styles.password}>
            <View style = {styles.passwordImg}>
                {myIcon}
            </View>
            <View style = {{flex: 9, paddingLeft: 2}}>
                <TextInput 
                    placeholder = 'Password'  
                    onChangeText = {event => passwordInputHandler(event)}
                    textContentType = 'password'
                    secureTextEntry={true}
                />
            </View>
        </View>
    )
}

const modalHeight = dimension.height * 0.35;
const modalWidth = dimension.width;

const defaultPasswordStyle = {
        flex: 1,
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center",
        
}
const styles = StyleSheet.create({
    password: {
        ...defaultPasswordStyle,
        borderTopWidth: 0.5
    },

    newPassword: {
        ...defaultPasswordStyle,
        
    },

    passwordImg: {
        width: modalWidth * 0.2,
        flexDirection: 'row',
        justifyContent: 'center',
        borderRightWidth: 1,
        height: modalHeight * 0.1,
        alignItems: 'center'
    }
})

export default PasswordInput;