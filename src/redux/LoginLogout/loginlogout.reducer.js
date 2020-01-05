const INITIAL_STATE = {
    logIn: false
}

const loggedInState = (state = INITIAL_STATE, action) => {

    switch(action.type) {

        case 'LOG_IN': 
        return {
            ...state,
            logIn: true
        }

        case 'LOG_OUT':
            return {
                ...state,
                logIn: false
            }

        default:
            return state
    } 
}