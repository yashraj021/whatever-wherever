import React from 'react';
import {dimension} from '../../constants/constants';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const myIcon = <Icon name="email" size={25} color="black" />;

import {
  TextInput,
  StyleSheet,
  View
} from 'react-native';

const EmailInput = ({emailInputHandler}) => {
    return(
        <View style = {styles.email}>
            <View style = {styles.emailImg}>
                {myIcon}
            </View>
            <View style = {{flex: 9, paddingLeft: 2}}>
                <TextInput 
                    placeholder = 'Email'  
                    onChangeText = {event => emailInputHandler(event)}
                />
            </View>
        </View>
    )
}

const modalHeight = dimension.height * 0.35;
const modalWidth = dimension.width;

const styles = StyleSheet.create({
    email: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center",
        borderTopWidth: 0.5
    },

    emailImg: {
        width: modalWidth * 0.2,
        flexDirection: 'row',
        justifyContent: 'center',
        borderRightWidth: 1,
        height: modalHeight * 0.1,
        alignItems: 'center'
    }
})

export default EmailInput;