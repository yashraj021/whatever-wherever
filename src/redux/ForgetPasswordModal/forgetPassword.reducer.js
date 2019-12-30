const INITIAL_STATE = {
    forgotPasswordModal: false
}

const forgotPasswordReducer = (state = INITIAL_STATE, action) => {

    switch(action.type) {
        case 'SET_FORGET_MODAL_CLOSE': 
            return {
                ...state,
                forgotPasswordModal: false
            }
        
        case 'SET_FORGET_MODAL_OPEN':
            return {
                ...state,
                forgotPasswordModal:true
            }

        default: 
            return state
    }

}

export default forgotPasswordReducer;