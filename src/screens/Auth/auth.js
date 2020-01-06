import React from 'react';
import LoginButton from '../../components/LoginButton/loginButton.component';
import PopUpModal from '../../components/PopUpModal/popupmodal.component';

import {
  StyleSheet,
  View,
  Image
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
          <LoginButton/>
          <PopUpModal/>
          {
            console.log("AuthScreen", this.props.componentId)
          }
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
