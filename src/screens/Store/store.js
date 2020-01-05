import React from 'react';
import {Navigation} from 'react-native-navigation';


import {
  StyleSheet,
  View,
  Text,
  Image,
  BackHandler

} from 'react-native';


const Store = (props) => {
    BackHandler.addEventListener('hardwareBackPress', () => {
        Navigation.popToRoot(props.componentId)
        return true;
    });
    return( 
    <View style = {styles.parentScreen}>
        <Text>
            HI
        </Text>
        {
            console.log(props.componentId)
        }
    </View>
    )
};

const styles = StyleSheet.create({
    parentScreen: {
        height: '100%',
        width: '100%',
        backgroundColor: 'red'
    }
})

export default Store;