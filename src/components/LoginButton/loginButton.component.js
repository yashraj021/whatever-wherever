import React from 'react';
import {dimension} from '../../constants/constants';
import {connect} from 'react-redux';
import {setLoginModalOpen} from '../../redux/LoginModal/loginmodal.actions';

import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native';

const LoginButton = ({setLoginModal}) => (

    <View>
        <TouchableOpacity style = {styles.login} onPress = {() =>setLoginModal()}>
            <Text style = {styles.logInButton}>
              LOGIN
            </Text>
          </TouchableOpacity>
    </View>
);

const styles = StyleSheet.create({

    login: {
      backgroundColor: 'black',
      height: dimension.height * 0.06,
      width: dimension.width * 0.3,
      borderRadius: 5,
      justifyContent: 'center',
      alignItems: 'center'
    },
    logInButton: {
      color: 'white',
      letterSpacing: 10
    }
  });

  
  const mapDispatchToProps = dispatch => ({
    setLoginModal: () => dispatch(setLoginModalOpen()) 
  })
  
  export default connect(null,mapDispatchToProps)(LoginButton);