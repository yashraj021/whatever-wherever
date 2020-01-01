import React from 'react';
import {
    KeyboardAvoidingView,
    StyleSheet,
    View,
    Text,
    Modal,
    Keyboard,
    TouchableWithoutFeedback
  } from 'react-native';
  import {dimension} from '../../constants/constants';

  import {connect} from 'react-redux';
  import {DisableVerificationModal} from '../../redux/ForgotRegisterVerificationModal/forgotregisterverification.actions';
  import {disableNewPasswordModal} from '../../redux/NewPasswordModal/newPasswordModal.actions';
  import {setForgotPasswordModalClose} from '../../redux/ForgetPasswordModal/forgetpassword.actions';

 
  import PasswordInput from '../PasswordInput/passwordInput.component';
  import CircularButton from '../CircularButton/circularbutton.component';

  
  class NewPassswordModal extends React.Component {

    state = {
        password: '',
        confirmPassword: ''
    }
    
    passwordInputHandler = () => {
        if(this.state.password === this.state.confirmPassword) {
            alert("New Password is set.");
            this.props.disableVerificationModal();
            this.props.disableNewPasswordModal();
            this.props.setForgotPasswordModalClose();
        }

        else {
            alert("Password didn't match.");
            return false;
        }
    }

      render () {
          return (
            <View style = {styles.loginArea}>
                <View style = {styles.loginSpace} >
                    <PasswordInput NewPassword passwordInputHandler={(event)=> this.setState({password: event})} />
                    <PasswordInput passwordInputHandler={(event)=> this.setState({confirmPassword: event})}/>
                </View>
                <CircularButton onPressHandler = {this.passwordInputHandler}/>
            </View>
          )
      }
  };

  const modalHeight = dimension.height * 0.40;
  const modalWidth = dimension.width;
    
  const styles = StyleSheet.create({

    loginArea: {
        width: modalWidth,
    },

    loginSpace: {
        marginTop: modalHeight *0.07,
        backgroundColor: 'white',
        height: modalHeight * 0.4,
        width: modalWidth * 0.75,
        borderTopRightRadius: 50,
        borderBottomRightRadius: 50
    }
  });


  const mapDispatchToProps = dispatch => ({
    disableVerificationModal: () => dispatch(DisableVerificationModal()),
    disableNewPasswordModal: () => dispatch(disableNewPasswordModal()),
    setForgotPasswordModalClose: () => dispatch(setForgotPasswordModalClose())
})



export default connect(null,mapDispatchToProps)(NewPassswordModal);