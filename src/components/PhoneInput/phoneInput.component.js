import React from 'react';
import {dimension} from '../../constants/constants';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";


import {
  TextInput,
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';

const PhoneInput = ({phoneInputHandler}) => {
        return (
            <View style = {styles.phoneno}>
                <View style = {styles.phoneno_country}>
                    <Image
                        style = {{height: 15, width: 20}}
                        source={require('../../../assets/india.png')}
                    />
                    <Text style = {{fontWeight: 'bold'}}>
                        +91
                    </Text>
                </View>
                <View style = {{flex: 9, paddingLeft: 2}}>
                    <TextInput 
                        placeholder = " Mobile number"
                        keyboardType='numeric' 
                        onChangeText = {event => phoneInputHandler(event)} 
                        maxLength={10}
                    />
                </View>
            </View>
        )
    };

const modalHeight = dimension.height * 0.35;
const modalWidth = dimension.width;

const styles = StyleSheet.create({
    phoneno: {
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    phoneno_country: {
        
        width: modalWidth * 0.2,
        flexDirection: 'row',
        paddingLeft: RFValue(5),
        justifyContent: "space-around",
        borderRightWidth: RFValue(1),
        height: modalHeight * 0.1,
        alignItems: 'center'
    },

});

export default PhoneInput;