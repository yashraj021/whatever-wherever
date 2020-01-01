import React from 'react';
import {dimension} from '../../constants/constants';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import {enableNewPasswordModal} from '../../redux/NewPasswordModal/newPasswordModal.actions';
import {connect} from 'react-redux';
import {DisableVerificationModal} from '../../redux/ForgotRegisterVerificationModal/forgotregisterverification.actions';
import {setForgotPasswordModalClose} from '../../redux/ForgetPasswordModal/forgetpassword.actions';
import {DisableRegisterModal} from '../../redux/RegisterModal/registerModal.actions';


import {
    StyleSheet,
    View,
    TextInput,
    TouchableOpacity,
    Text
} from 'react-native';



class VerificationModal extends React.Component {

    state = {
        otp1: '',
        otp2: '',
        otp3: '',
        otp4: ''
    }

    submitHandler = () => {
        if(this.state.otp1 && this.state.otp2 && this.state.otp3 && this.state.otp1){
            let otpGenerated = parseInt(`${this.state.otp1}${this.state.otp2}${this.state.otp3}${this.state.otp4}`);
            alert(`FOR TEST. OTP INPUT VALUE:- ${otpGenerated}`);
            if(this.props.NewPasswordSet)
                this.props.newPasswordModalState();
            else {
                this.props.setForgotPasswordModalClose();
                this.props.disableVerificationModal();
                this.props.DisableRegisterModal();
            }
        } else alert('OTP field Empty.')
    }

    phoneInputHandler = (event) => {
       this.setState({phoneno: event})
    }
    
    inputs = {};

    focusTheField = (id) => {
    this.inputs[id].focus();
    }

    render() {
        return (
            <View style = {styles.verificationArea}>
                <View style = {styles.verificationSpace}>
                    <View style = {styles.otpArea}>
                        <TextInput
                            style = {styles.otp}
                            returnKeyType={ 'next' }
                            ref={input => { this.inputs['field1'] = input }}
                            onChangeText={(event) => {
                                this.setState({otp1: event}, () => {this.state.otp1 != ''? this.focusTheField('field2'): null; } )    
                            }}
                            maxLength = {1}
                        />
                    </View>

                    <View style = {styles.otpArea}>
                        <TextInput
                            style = {styles.otp}
                            returnKeyType = {'next'}
                            ref={input => { this.inputs['field2'] = input }}
                            onChangeText={(event) => {
                                this.setState({otp2: event}, () => {this.state.otp2 != ''? this.focusTheField('field3'): this.focusTheField('field1'); } )    
                            }}
                            maxLength = {1}
                        />
                    </View>

                    <View style = {styles.otpArea}>
                        <TextInput
                            style = {styles.otp}
                            returnKeyType = {'next'}
                            ref={input => { this.inputs['field3'] = input }}
                            onChangeText={(event) => {
                                this.setState({otp3: event}, () => {this.state.otp3 != ''? this.focusTheField('field4'): this.focusTheField('field2'); } )    
                            }}
                            maxLength = {1}
                        />
                    </View>

                    <View style = {styles.otpArea}>
                        <TextInput
                            style = {styles.otp}
                            returnKeyType = {'done'}
                            ref={input => { this.inputs['field4'] = input }}
                            onChangeText = {(event) => this.setState({otp4: event}, () => {this.state.otp4 != ''? null : this.focusTheField('field3'); })}
                            maxLength = {1}
                        />
                    </View>
                </View>
                <View style = {styles.button_space}>
                <TouchableOpacity style = {styles.proceed_button} onPress = {this.submitHandler}>
                    <Text style = {{color: 'white', fontFamily: 'Quicksand-Regular', letterSpacing: 2}}>
                        Proceed
                    </Text>
                </TouchableOpacity>
                </View>
            </View>
        );
    }
}



const modalHeight = dimension.height * 0.35;
const modalWidth = dimension.width;

const styles = StyleSheet.create({
    verificationArea: {
        flex: 5,
        width: modalWidth,
        
    },

    verificationSpace: {
        marginTop: modalHeight *0.15,
        flexDirection: 'row',
        paddingLeft: RFValue(50),
        paddingRight: RFValue(50),
        height: modalHeight * 0.2,
        justifyContent: 'space-around',
        alignItems: 'center'
    },

    otpArea: {
        
        flexDirection: 'column-reverse',
        justifyContent: 'center',
        backgroundColor: '#f2f2f2',
        height: modalHeight * 0.17,
        width: modalHeight * 0.17,
    },

    otp: {
        fontFamily: 'Quicksand-Bold',
        fontSize: RFValue(15,dimension.height),
        textAlign: 'center'
    },

    button_space: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: RFValue(25)
    },

    proceed_button: {
        height: modalHeight * 0.15,
        width: modalWidth * 0.3,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5

    }
});

const mapDispatchToProps = dispatch => ({
    newPasswordModalState: () => dispatch(enableNewPasswordModal()),
    disableVerificationModal: () => dispatch(DisableVerificationModal()),
    setForgotPasswordModalClose: () => dispatch(setForgotPasswordModalClose()),
    DisableRegisterModal: () => dispatch(DisableRegisterModal())
})



export default connect(null,mapDispatchToProps)(VerificationModal);


