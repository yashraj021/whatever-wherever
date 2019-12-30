import React from 'react';
import {dimension} from '../../constants/constants';
import PhoneInput from '../PhoneInput/phoneInput.component';
import CircularButton from '../CircularButton/circularbutton.component';
import {EnableVerificationModal} from '../../redux/ForgotVerificationModal/forgotverification.actions';
import {connect} from 'react-redux';

import {
    StyleSheet,
    View,
} from 'react-native';



class ForgotPasswordModal extends React.Component {

    state = {
        phoneno: '',
        verification: false
    }

    phoneInputHandler = (event) => {
       this.setState({phoneno: event})
    }

    onSubmitHadler = () => {
        let phoneNo = this.state.phoneno;
        if(phoneNo.length < 10)
            alert("Phone number Incorrect.")
        else{
            phoneNo = parseInt(phoneNo);
            this.setState({
                verification: true
            }, () => {this.props.verificationModal(phoneNo)}
            );
        }
    }

    render() {
        return (
            <View style = {styles.forgetArea}>
                <View style = {styles.forgetSpace}>
                    <PhoneInput phoneInputHandler = {this.phoneInputHandler}/>
                </View>
                <CircularButton onPressHandler = {this.onSubmitHadler}/>
            </View>
        );
    }
}



const modalHeight = dimension.height * 0.35;
const modalWidth = dimension.width;

const styles = StyleSheet.create({
    forgetArea: {
        flex: 5,
        width: modalWidth
    },

    forgetSpace: {
        marginTop: modalHeight *0.2,
        backgroundColor: 'white',
        height: modalHeight * 0.2,
        width: modalWidth * 0.75,
        borderTopRightRadius: 50,
        borderBottomRightRadius: 50
    },
});

const mapDispatchToProps = dispatch => ({
    verificationModal: (value) => dispatch(EnableVerificationModal(value))
});

export default connect(null, mapDispatchToProps)(ForgotPasswordModal);


