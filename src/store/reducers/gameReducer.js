const initState = {
    gameError: null
}

export default (state = initState, action) => {
    switch(action.type){
        case 'CREATE_GAME':
            return {
                ...state,
                gameError: null
            }
        case 'CREATE_GAME_ERROR':
            return {
                ...state,
                gameError:'Oops something went wrong'
            }
        case 'JOIN_GAME':
            return {
                ...state,
                gameError: null
            }
        case 'JOIN_GAME_ERROR':
            return {
                ...state,
                gameError: `Sorry couldn't join game`
            }
        case 'LEFT_GAME':
            return {
                ...state,
                gameError: null
            }
        case 'LEFT_GAME_ERROR':
            return {
                ...state,
                gameError: `Sorry Couldn't Leave Game`
            }
        default:
            return state
    }
}