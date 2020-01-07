import React from 'react';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import {dimension} from '../../constants/constants';
import Icon from 'react-native-vector-icons/EvilIcons';
import {
    StyleSheet,
    View,
    TextInput
  
  } from 'react-native';

const SearchBar = ({inputHandler}) => (

<View style = {styles.searchWrapper}>
    <Icon name="search" size={40} color="#900" />
    <TextInput 
        style = {{marginLeft: 10, width: '100%'}} 
        placeholder = "Search Store Names"
        onChangeText = {(text) => inputHandler(text)}
    />
</View>

);

const styles = StyleSheet.create({
    searchWrapper:{
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
        elevation: 5,
        borderRadius: 5,
        height: 50,
        width: '100%',
        marginBottom: 20,
        marginTop: 20,
        backgroundColor: 'white',
        paddingLeft: 10,
        paddingRight: 10        
    }
});

export default SearchBar;