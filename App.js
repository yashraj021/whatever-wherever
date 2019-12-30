import React from 'react';
import LoginButton from './src/components/LoginButton/loginButton.component';
import PopUpModal from './src/components/PopUpModal/popupmodal.component';
import {dimension, dimensionScreen} from './src/constants/constants';
import ExtraDimensions from 'react-native-extra-dimensions-android';
import {
  StyleSheet,
  View,
  Image
} from 'react-native';


class App extends React.Component {
  

  render() {
    return (
      <View style = {styles.auth}>
          <Image
            source = {require('./assets/Logo.png')}
            style = {{height: 300, width: 200}}
          />
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


export default App;
