import React from 'react';
import LoginButton from './src/components/LoginButton/loginButton.component'
import {
  StyleSheet,
  View,
} from 'react-native';


class App extends React.Component {
  

  render() {
    return (
      <View style = {styles.auth}>
          <LoginButton/>
      </View>
    )
  }
 
}

const styles = StyleSheet.create({
  auth: {
    height: '100%',
    width: '100%',
    backgroundColor: 'white',
    display: "flex",
    justifyContent: 'center',
    alignItems: 'center'
  }
});


export default App;
