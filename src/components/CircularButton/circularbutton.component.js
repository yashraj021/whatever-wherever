import React from 'react';
import {dimension} from '../../constants/constants';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import Icon from 'react-native-vector-icons/FontAwesome';

import {
  StyleSheet,
  TouchableOpacity
} from 'react-native';

const myIcon = <Icon name="chevron-right" size={40} color="white" />;
const CircularButton = ({onPressHandler}) => (
        <TouchableOpacity style = {styles.circularButton} onPress = {onPressHandler}>
            {myIcon}
        </TouchableOpacity>
);

const modalHeight = dimension.height * 0.35;


const styles = StyleSheet.create({
    circularButton: {
        position: 'absolute',
        backgroundColor: '#4b2ade',
        height: modalHeight * 0.25,
        width: modalHeight * 0.25,
        borderRadius: 50,
        top: RFValue(42),
        right: RFValue(65),
        justifyContent: 'space-around',
        alignItems: 'center'
    }
});

export default CircularButton;