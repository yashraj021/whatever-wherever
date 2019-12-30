const INITIAL_STATE = {
    registerModal: false
}

const RegisterModalState = (state = INITIAL_STATE, action) => {
    switch(action.type) {

        case 'ENABLE_REGISTER_MODAL':
            return {
                ...state,
                registerModal: true
            }

            case 'DISABLE_REGISTER_MODAL':
                return {
                    ...state,
                    registerModal: false
                }

            default: 
            return {
                ...state
            }
    }
}

export default RegisterModalState;