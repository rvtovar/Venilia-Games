const initState = {
    search: ''
}

export default (state = initState, action) => {
    switch(action.type){
        case 'SET_SEARCH_FILTER':
            return {
                ...state,
                search: action.search
            }
        default:
            return state
    }
}