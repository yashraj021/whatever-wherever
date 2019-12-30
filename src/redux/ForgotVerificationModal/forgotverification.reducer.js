const INITIAL_STATE = {
    phoneNo: null,
    verificationModalState: false
}

const forgotVerification = (state = INITIAL_STATE, action) => {

    switch(action.type) {

        case 'ENABLE_VERIFICATION_MODAL':
            return {
                ...state,
                phoneNo: action.payload,
                verificationModalState: true
            }

        case 'DISABLE_VERIFICATION_MODAL':
            return {
                ...state,
                phoneNo: null,
                verificationModalState: false
            }

        default: return state
    }
}

export default forgotVerification;