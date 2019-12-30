const INITIAL_STATE = {
    modal: false
}

const loginModal = (state = INITIAL_STATE, action) => {
    switch ( action.type ) {
        case 'SET_MODAL_OPEN':
            return {
                ...state,
                modal: true
            }
        
        case 'SET_MODAL_CLOSE':
            return {
                ...state,
                modal: false
            }

        default:
                return {
                    ...state
                };
    }
}

export default loginModal;