const INITIAL_STATE = {
    phoneNo: null,
    email: null,
    verificationModalState: false,
}

const forgotVerification = (state = INITIAL_STATE, action) => {

    switch(action.type) {

        case 'ENABLE_VERIFICATION_MODAL':
            return {
                ...state,
                phoneNo: action.payload,
                email: null,
                verificationModalState: true,
            }

        case 'DISABLE_VERIFICATION_MODAL':
            return {
                ...state,
                phoneNo: null,
                email: null,
                verificationModalState: false,
            }

        case 'ENABLE_EMAIL_VERIFICATION_MODAL':
            return {
                ...state,
                email: action.payload
            }
        

        default: return state
    }
}

export default forgotVerification;