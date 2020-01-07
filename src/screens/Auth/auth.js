import React from 'react';
import LoginButton from '../../components/LoginButton/loginButton.component';
import PopUpModal from '../../components/PopUpModal/popupmodal.component';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import {dimension} from '../../constants/constants';

import {
  StyleSheet,
  View,
  Image,
  Text
} from 'react-native';


class AuthScreen extends React.Component {
  

  render() {
    console.log(this.props.componentId)
    return (
      <View style = {styles.auth}>
          <Image
            source = {require('../../../assets/Logo.png')}
            style = {{height: 300, width: 200}}
          />
          <Text style = {{fontFamily: 'Khula-Bold', fontSize: RFValue(45, dimension.height), fontStyle: 'italic', letterSpacing: -3, color: '#301ca3' }}>
            WHATEVER   WHEREVER
          </Text>
          <LoginButton/>
          <PopUpModal/>
      </View>
    )
  }
 
}

const styles = StyleSheet.create({
  auth: {
    height: '100%',
    width: '100%',
    flexDirection: 'column',
    backgroundColor: 'white',
    display: "flex",
    justifyContent: 'space-around',
    alignItems: 'center'
  }
});


export default AuthScreen;
