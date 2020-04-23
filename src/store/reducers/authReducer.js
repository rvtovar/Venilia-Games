const initState = {
    authError: null
}

export default (state = initState,action) => {
    switch(action.type){
        case 'LOGIN_ERROR':
            return {
                ...state,
                authError: 'Login Failed'
            }
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                authError: null
            }
        case 'LOGOUT_SUCCESS':
            console.log('logout sucess')
            return state
        case 'SIGNUP_SUCCESS':
            return{
                ...state,
                authError: null
            }
        case 'SIGNUP_ERROR':
            return {
                ...state,
                authError: action.err.message
            }
        case 'CLEAR_AUTH_ERROR':
            return {
                ...state,
                authError:null
            }
        default:
            return state
    }
}