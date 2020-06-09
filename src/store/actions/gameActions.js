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
        const userId = getState().firebase.auth.uid
        firebase.firestore().collection('players').add({
            game:game.id,
            player:userId
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

export const leaveGame = () => {
    return (dispatch, getState) => {
        const userId = getState().firebase.auth.uid
        const players = getState().firestore.ordered.players
        const playerId = players.filter(({player}) => player === userId)[0].id
        firebase.firestore().collection('players').doc(playerId).delete().then(() => {
            dispatch({
                type: 'LEFT_GAME'
            })
        }).catch((err) => {
            dispatch({
                type: 'LEFT_GAME_ERROR'
            })
        })
    }
}

export const clearData = () => ({
    type: '@@reduxFirestore/CLEAR_DATA'
})