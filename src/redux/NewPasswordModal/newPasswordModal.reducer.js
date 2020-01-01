const INITIAL_STATE = {
    newPasswordModalState: false
}

const newPasswordModal = (state = INITIAL_STATE, action) => {

    switch(action.type) {

        case 'ENABLE_NEW_PASSWORD_MODAL':
            return {
                ...state,
                newPasswordModalState: true
            }

        case 'DISABLE_NEW_PASSWORD_MODAL':
            return {
                ...state,
                newPasswordModalState: false
            }

        default: return state
    }
}

export default newPasswordModal;