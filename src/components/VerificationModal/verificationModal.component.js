import React from 'react';
import {dimension} from '../../constants/constants';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";


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
        let otpGenerated = parseInt(`${this.state.otp1}${this.state.otp2}${this.state.otp3}${this.state.otp4}`);
        alert(`FOR TEST. OTP INPUT VALUE:- ${otpGenerated}`)
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
                        />
                    </View>

                    <View style = {styles.otpArea}>
                        <TextInput
                            style = {styles.otp}
                            returnKeyType = {'done'}
                            ref={input => { this.inputs['field4'] = input }}
                            onChangeText = {(event) => this.setState({otp4: event}, () => {this.state.otp4 != ''? null : this.focusTheField('field3'); })}
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
        backgroundColor: '#f2f2f2',
        height: modalHeight * 0.15,
        width: modalHeight * 0.15,
    },

    otp: {
        fontFamily: 'Quicksand-Bold',
        fontSize: 20,
        textAlign: 'center'
    },

    button_space: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: RFValue(25)
    },

    proceed_button: {
        height: modalHeight * 0.12,
        width: modalWidth * 0.2,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5

    }
});


export default VerificationModal;


