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
        default:
            return state
    }
}