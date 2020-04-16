import firebase from 'firebase/app'

export const createGame = (game) => {
    return (dispatch,getState) => {
        const profile = getState().firebase.profile
        const ownerId = getState().firebase.auth.uid

        firebase.firestore().collection('games').add({
            ...game,
            owner: `${profile.username}`,
            ownerId: ownerId,
            players: [ownerId]
        }).then(() => {
            dispatch({
                type: 'CREATE_GAME'
            })
        }).catch((err) => {
            dispatch({
                type: 'CREATE_GAME_ERROR',
                err
            })
        })
    }
}