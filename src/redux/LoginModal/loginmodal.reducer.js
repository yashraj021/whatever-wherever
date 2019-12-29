INITIAL_STATE = {
    modal: false
}

const loginModal = (state = INITIAL_STATE, action) => {
    switch ( action.type ) {
        case 'SET_MODAL':
            return {
                ...state,
                modal: !state.modal
            }

        default:
                return state;
    }
}

export default loginModal;