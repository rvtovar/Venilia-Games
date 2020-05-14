import firebase from 'firebase/app'

export const createGame = (game) => {
    return async (dispatch,getState) => {
        const profile = getState().firebase.profile
        const ownerId = getState().firebase.auth.uid

        await firebase.firestore().collection('games').add({
            ...game,
            owner: profile.displayName,
            ownerId: ownerId,
        }).then(async (docRef) => {
            return await firebase.firestore().collection('players').add({
                player:ownerId,
                game: docRef.id,
            })
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

export const joinGame = (game) => {
    return (dispatch,getState) => {
        const playerId = getState().firebase.auth.uid
        const gameRef = firebase.firestore().collection('games').doc(game.id)
        gameRef.update({
            playerIds: [...game.playerIds,playerId]
        }).then(() => {
            dispatch({
                type:'JOIN_GAME'
            })
        }).catch((err) => {
            dispatch({
                type:'JOIN_GAME_ERROR',
                err
            })
        })
    }
}

export const clearData = () => ({
    type: '@@reduxFirestore/CLEAR_DATA'
})