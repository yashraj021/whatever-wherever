import React from 'react';
import {dimension} from '../../constants/constants';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import Icon from 'react-native-vector-icons/FontAwesome';

import {
  StyleSheet,
  View,
  TouchableOpacity
} from 'react-native';

const myIcon = <Icon name="chevron-right" size={40} color="white" />;
const CircularButton = () => (
        <TouchableOpacity style = {styles.circularButton}>
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
        top: RFValue(60),
        right: RFValue(60),
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default CircularButton;