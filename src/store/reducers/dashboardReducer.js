const initState = {
    charToggle: false
}

export default (state = initState, action) => {
    switch(action.type){
        case 'SET_CHAR_TOGGLE':
            return {
                ...state,
                charToggle: true
            }
        case 'SET_HOME_TOGGLE':
            return {
                ...state,
                charToggle: false
            }
        default:
            return state
    }
}