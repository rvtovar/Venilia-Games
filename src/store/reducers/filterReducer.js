const initState = {
    title: '',
    owner: ''
}

export default (state = initState, action) => {
    switch(action.type){
        case 'SET_TITLE_FILTER':
            return {
                ...state,
                title: action.title
            }
        case 'SET_OWNER_FILTER':
            return {
                ...state,
                owner: action.owner
            }
        default:
            return state
    }
}