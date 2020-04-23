import firebase from 'firebase/app'

export const clearAuthError = () => ({
    type: 'CLEAR_AUTH_ERROR'
})

export const logIn = (credentials) => {
    return (dispatch,getState) => {
        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(() => {
            dispatch({
                type:'LOGIN_SUCCESS'
            })
        }).catch((err) => {
            dispatch({
                type:'LOGIN_ERROR',
                err
            })
        })
    }
}

export const logOut = () => {
    return (dispatch,getState) => {
        firebase.auth().signOut().then(() => {
            dispatch({
                type: '@@reduxFirestore/CLEAR_DATA'
            })
            dispatch({
                type: 'LOGOUT_SUCCESS'
            })
        })
    }
}


export const signUp = (newUser) => {
    return (dispatch,getState) => {
        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then((res) => {
            return firebase.firestore().collection('users')
                .doc(res.user.uid).set({
                    firstName: newUser.firstName,
                    lastName: newUser.lastName,
                    displayName: `${newUser.firstName}.${newUser.lastName[0]}`
                })
        }).then(() => {
            dispatch({
                type:'SIGNUP_SUCCESS'
            })
        }).catch((err) => {
            dispatch({
                type: 'SIGNUP_ERROR',
                err
            })
        })
    }
}